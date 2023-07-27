/**
 * Base class for a module.
 * @param {string} id - ID of module.
 * @param {PyroModuleOptions} [options={}] - Options.
 */
class PyroModule {
    constructor(id, { category = 'default' } = {}) {
        /**
         * ID of the module.
         * @type {string}
         */
        this.id = id;

        /**
         * ID of the category this belongs to.
         * @type {string}
         */
        this.categoryID = category;

        /**
         * Category this belongs to.
         * @type {Category}
         */
        this.category = null;

        /**
         * The filepath.
         * @type {string}
         */
        this.filepath = null;

        /**
         * The Pyro client.
         * @type {PyroClient}
         */
        this.client = null;

        /**
         * The handler.
         * @type {PyroHandler}
         */
        this.handler = null;
    }

    /**
     * Reloads the module.
     * @returns {PyroModule}
     */
    reload() {
        return this.handler.reload(this.id);
    }

    /**
     * Removes the module.
     * @returns {PyroModule}
     */
    remove() {
        return this.handler.remove(this.id);
    }

    /**
     * Returns the ID.
     * @returns {string}
     */
    toString() {
        return this.id;
    }
}

module.exports = PyroModule;
