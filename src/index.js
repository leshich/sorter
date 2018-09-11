class Sorter {
  constructor() {
    this.elements = [];
    this.compareFunction;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    indices.sort((a,b) => a - b);

    let needSortElements = [];
    indices.forEach((value) => {
      needSortElements.push(this.elements[value]);
    });
    
    if (this.compareFunction) {
      needSortElements.sort(this.compareFunction);
    } else {
      needSortElements.sort((a, b) => {
        return a - b;
      });
    }

    indices.forEach((value, index) => {
      this.elements[value] = needSortElements[index];
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;