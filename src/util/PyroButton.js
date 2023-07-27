const { PyroButtonBuilder } = require("./PyroButtonBuilder")

class PyroButton {
  static create() {
    return new PyroButtonBuild();
  }
}

module.exports = { PyroButton }