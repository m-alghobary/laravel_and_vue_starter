// 1- Register each file as a corresponding Vuex module.
// 2- Modules are namespaced as the camelCase equivalent of their file name.
// 3- Module nesting will === [sub-]directory hierarchy

import camelCase from "lodash/camelCase";

const modulesCache = {};
const storeData = { modules: {} };

(function updateModules() {
    // Create a require context to dynamically require all Vuex module files.
    const allModules = require.context(
        // files in the current directory
        ".",
        // search sub-directories
        true,
        // includes all .js files except this file and unit test files
        /^((?!index|\.unit\.).)*\.js$/
    );

    // for each module
    allModules.keys().forEach(moduleName => {
        // require the module exported object
        const moduleObject = allModules(moduleName);

        // Skip the module on hot reload if it the same module in the cached.
        if (modulesCache[moduleName] === moduleObject) return;

        // if it not on the cache cache it
        modulesCache[moduleName] = moduleObject;

        // Get the module path as an array.
        const modulePath = moduleName
            // Remove the "./" from the beginning.
            .replace(/^\.\//, "")
            // Remove the file extension from the end.
            .replace(/\.\w+$/, "")
            // Split nested modules into an array path.
            .split(/\//)
            // camelCase all module namespaces and names.
            .map(camelCase);

        // Get the modules object for the current path.
        const { modules } = getNamespace(storeData, modulePath);

        // add the definition of the last module in the path.
        modules[modulePath.pop()] = {
            namespaced: true,
            ...moduleObject
        };
    });

    // If the environment supports hot reloading...
    if (module.hot) {
        // Whenever any Vuex module is updated...
        module.hot.accept(allModules.id, () => {
            // Update `storeData.modules` with the latest definitions.
            updateModules();
            // Trigger a hot update in the store.
            require("../store").default.hotUpdate({
                modules: storeData.modules
            });
        });
    }
})();

// Recursively get the namespace of a Vuex module, even if nested.
function getNamespace(subtree, path) {
    // no more nested modules
    if (path.length === 1) return subtree;

    // get the first module in the path
    const namespace = path.shift();

    // build the nodules tree
    subtree.modules[namespace] = {
        modules: {},
        namespaced: true,
        ...subtree.modules[namespace]
    };

    return getNamespace(subtree.modules[namespace], path);
}

export default storeData.modules;
