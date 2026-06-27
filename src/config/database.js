// had to use the google dns server.Extra line of code added for that purpose
const mongoose = require("mongoose")
const dns = require("dns")

async function connectToDB() {
    try {
        // Use public DNS servers when the local resolver refuses SRV lookups.
        dns.setServers(["8.8.8.8", "8.8.4.4"]);
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    } catch (err) {
        console.error("Database connection failed:", err.message)
        if (err.code === "ECONNREFUSED" && err.syscall === "querySrv") {
            console.error(
                "SRV DNS lookup failed. Check your network/DNS or use a standard mongodb:// URI instead of mongodb+srv://."
            )
        }
    }
}

module.exports = connectToDB