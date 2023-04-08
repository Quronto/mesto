class Section {
  constructor({items, renderer}, templateSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    
    this._container = document.querySelector(templateSelector);
  };

  addNewItem(element) {
    this._container.prepend(element);
  };

  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item))
  };

  addItem(element) {
    this._container.append(element);
  };
};

export default Section;