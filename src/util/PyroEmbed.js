const { MyButton } = require('./button');

class PyroEmbed {
  constructor() {
    this.data = {
      title: null,
      description: null,
      fields: [],
      author: null,
      footer: null,
      // Add other properties as needed (color, timestamp, etc.)
      components: [], // Store components (buttons) associated with this embed
    };
  }

  setTitle(title) {
    this.data.title = title;
    return this;
  }

  setDescription(description) {
    this.data.description = description;
    return this;
  }

  addField(name, value, inline = false) {
    this.data.fields.push({ name, value, inline });
    return this;
  }

  // Implement other methods to set author, footer, etc.
  // ...

  addButton(button) {
    if (!(button instanceof MyButton)) {
      throw new Error('Invalid button object. Expected an instance of MyButton.');
    }

    this.data.components.push(button.build());
    return this;
  }

  build() {
    return this.data;
  }
}

module.exports = PyroEmbed;