const Messages = {
    // Module-related
    FILE_NOT_FOUND: filename => `File '${filename}' not found`,
    MODULE_NOT_FOUND: (constructor, id) => `${constructor} '${id}' does not exist`,
    ALREADY_LOADED: (constructor, id) => `${constructor} '${id}' is already loaded`,
    NOT_RELOADABLE: (constructor, id) => `${constructor} '${id}' is not reloadable`,
    INVALID_CLASS_TO_HANDLE: (given, expected) => `Class to handle ${given} is not a subclass of ${expected}`,
  
    // Command-related
    ALIAS_CONFLICT: (alias, id, conflict) => `Alias '${alias}' of '${id}' already exists on '${conflict}'`,
  
    // Options-related
    COMMAND_UTIL_EXPLICIT: 'The command handler options `handleEdits` and `storeMessages` require the `commandUtil` option to be true',
    UNKNOWN_MATCH_TYPE: match => `Unknown match type '${match}'`,
  
    // Generic errors
    NOT_INSTANTIABLE: constructor => `${constructor} is not instantiable`,
    NOT_IMPLEMENTED: (constructor, method) => `${constructor}#${method} has not been implemented`,
    INVALID_TYPE: (name, expected, vowel = false) => `Value of '${name}' was not ${vowel ? 'an' : 'a'} ${expected}`
  };
  
  class ErrorFactory {
    static createError(code, ...args) {
      if (Messages[code] === undefined) {
        throw new TypeError(`Error key '${code}' does not exist`);
      }
  
      const message = typeof Messages[code] === 'function'
        ? Messages[code](...args)
        : Messages[code];
  
      return new Error(message);
    }
  }
  
  /**
   * Represents an error for Pyro.
   * @param {string} key - Error key.
   * @param {...any} args - Arguments.
   * @extends {Error}
   */
  class PyroError extends Error {
    constructor(key, ...args) {
      super();
      const message = ErrorFactory.createError(key, ...args).message;
      this.message = message;
      this.code = key;
    }
  
    get name() {
      return `PyroError [${this.code}]`;
    }
  }
  
  module.exports = { PyroError };
  