class SortedList {
  constructor(items, length) {
    this.items = [],
      this.length = this.items.length
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) return 0;
    return [...this.items].reduce((accum, curr) => accum + curr);
  }
};

module.exports = SortedList;