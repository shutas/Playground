const fs = require("fs");
fs.readFile("nonexistent.txt", (err) => {
    console.error(err.code);
});

const http = require("http");
const req = http.get("http://nonexistent-site.com", (res) => {});
req.on("error", (err) => {
    console.error(err.code);
});

function readConfigFile(filename, callback) {
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                return callback(new Error(`Config file ${filename} not found`));
            } else if (err.code === "EACCES") {
                return callback(new Error(`No permission to read ${filename}`));
            }
            return callback(err);
        }

        try {
            const config = JSON.parse(data);
            callback(null, config);
        } catch (parseError) {
            callback(new Error(`Invalid JSON in ${filename}`));
        }
    });
}

readConfigFile("config.json", (err, config) => {
    if (err) {
        console.error("Failed to read config:", err.message);
        return;
    }
    console.log("Config loaded successfully:", config);
});

const fs = require("fs").promises;

async function loadUserData(userId) {
    try {
        const data = await fs.readFile(`users/${userId}.json`, "utf8");
        const user = JSON.parse(data);

        if(!user.email) {
            throw new Error("Invalid user data: missing email");
        }

        return user;
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error(`User ${userId} not found`);
        } else if (error instanceof SyntaxError) {
            throw new Error("Invalid user data format");
        }
        throw error;
    } finally {
        console.log(`Finished processing user ${userId}`);
    }
}

(async () => {
    try {
        const user = await loadUserData(123);
        console.log("User loaded:", user);
    } catch (error) {
        console.error("Failed to load user data:", error.message);
    }
})();

process.on("uncaughtException", (error) => {
    console.error("UNCAUGHT EXCEPTION! Shutting down...");
    console.error(error.name, error.message);

    server.close(() => {
        console.log("Process terminated due to uncaught exception");
        process.exit(1);
    });
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("UNHANDLED REJECTION! Shutting down...");
    console.error("Unhandled Rejection at:", promise, "Reason:", reason);

    server.close(() => {
        process.exit(1);
    });
});

Promise.reject(new Error("Something went wrong"));

setTimeout(() => {
    throw new Error("Uncaught exception after timeout");
},1000);

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
        this.statusCode = 400;
    }
}

class NotFoundError extends Error {
    constructor(resource) {
        super(`${resource} not found`);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

function getUser(id) {
    if(!id) {
        throw new ValidationError("User ID is required", "id");
    }
}

getUser(0);