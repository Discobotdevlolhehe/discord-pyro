const { Client } = require('discord.js');
const ClientUtil = require('./ClientUtil');

/**
 * The Pyro framework client.
 * Creates the handlers and sets them up.
 * @param {PyroOptions} [options={}] - Options for the client.
 * @param {ClientOptions} [clientOptions] - Options for Discord JS client.
 * If not specified, the previous options parameter is used instead.
 */
class PyroClient extends Client {
    constructor(options = {}, clientOptions) {
        super(clientOptions || options);

        const { ownerID = '' } = options;

        /**
         * The ID of the owner(s).
         * @type {Snowflake|Snowflake[]}
         */
        this.ownerID = ownerID;

        /**
         * Utility methods.
         * @type {ClientUtil}
         */
        this.util = new ClientUtil(this);
    }

    /**
     * Checks if a user is the owner of this bot.
     * @param {UserResolvable} user - User to check.
     * @returns {boolean}
     */
    isOwner(user) {
        const id = this.users.resolveId(user);
        return Array.isArray(this.ownerID)
            ? this.ownerID.includes(id)
            : id === this.ownerID;
    }
}

module.exports = PyroClient;
