class PyroButtonBuilder {
    constructor() {
      this.button = {
        type: 2, // Default to button (2)
        style: null, // primary, secondary, or danger (for buttons)
        label: null,
        custom_id: null, // Unique identifier for the button
        interactionHandler: null, // Store the interaction handler function
      };
    }
  
    setStyle(style) {
      this.button.style = style;
      return this;
    }
  
    setLabel(label) {
      this.button.label = label;
      return this;
    }
  
    setCustomID(customID) {
      this.button.custom_id = customID;
      return this;
    }
  
    // Add methods to handle Action Row and Select Menu types
    asActionRow() {
      this.button.type = 1; // 1 for Action Row
      return this;
    }
  
    asSelectMenu() {
      this.button.type = 3; // 3 for Select Menu
      return this;
    }
  
    handleInteraction(interactionHandler) {
      if (typeof interactionHandler !== 'function') {
        throw new Error('Interaction handler must be a function.');
      }
  
      this.button.interactionHandler = interactionHandler;
      return this;
    }
  
    build() {
      return this.button;
    }
  }
  
  module.exports = {PyroButtonBuilder};