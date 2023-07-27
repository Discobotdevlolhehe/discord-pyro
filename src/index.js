const { PyroButton } = require('./util/PyroButton');

module.exports = {
    // Core
    PyroClient: require('./src/structure/PyroClient'),
    PyroHandler: require('./src/structure/PyroHandler'),
    PyroModule: require('./src/structure/PyroModule'),
    ClientUtil: require('./src/structure/ClientUtil'),

    // Commands
    Command: require('./structure/commands/Command'),
    CommandHandler: require('./structure/commands/CommandHandler'),
    CommandUtil: require('./structure/commands/CommandUtil'),
    Flag: require('./structure/commands/Flag'),

    // args
    Argument: require('./structure/commands/args/Argument'),
    TypeResolver: require('./structure/commands/args/TypeResolver'),

    // Inhibitors
    Inhibitor: require('./structure/inhibitors/Inhibitor'),
    InhibitorHandler: require('./structure/inhibitors/InhibitorHandler'),

    // Listeners
    Listener: require('./structure/listeners/Listener'),
    ListenerHandler: require('./structure/listeners/ListenerHandler'),

    // Providers
    Provider: require('./providers/provider'),
    SequelizeProvider: require('./src/providers/SequelizeProvider'),
    SQLiteProvider: require('./src/providers/SQLiteProvider'),
    MongooseProvider: require('./providers/MongooseProvider'),

    // Utilities
    PyroError: require('./util/PyroError'),
    Category: require('./util/Category'),
    Constants: require('./util/Constants'),
    Util: require('./util/Util'),
    version: require('../package.json').version,

    //Export Embeds feature
    PyroButton: require("./util/PyroButton"),
    PyroEmbed: require("./util/PyroEmbed"),
};