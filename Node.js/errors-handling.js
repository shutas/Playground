/*const fs = require("fs");
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
*/

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