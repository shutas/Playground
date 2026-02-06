async function loadModule(moduleName) {
    try {
        const module = await import(`./${moduleName}.mjs`);
        return module;
    } catch (error) {
        console.error(`Failed to load ${moduleName}:`, error);
    }
}

const moduleName = process.env.NODE_ENV === "production" ? "prod" : "dev";

loadModule(moduleName).then(module => {
    module.default();
});

(async () => {
    const mathModule = await import("./es-modules-math.mjs");
    console.log(mathModule.add(10, 5));
})