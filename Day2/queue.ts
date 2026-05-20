class BadQueue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  get size(): number {
    return this.items.length;
  }
}

class GoodQueue<T> {
  private items: T[] = [];
  private head: number = 0;

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.head >= this.items.length) {
      return undefined;
    }
    const item = this.items[this.head];
    this.head++;

    if (this.head > 1000 && this.head > this.items.length / 2) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }

    return item;
  }

  get size(): number {
    return this.items.length - this.head;
  }
}
