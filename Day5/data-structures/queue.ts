class Queue<T> {
  private items: T[] = [];
  private head = 0;

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
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

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.head];
  }

  get size(): number {
    return this.items.length - this.head;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.items = [];
    this.head = 0;
  }

  toArray(): T[] {
    return this.items.slice(this.head);
  }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("peek:", queue.peek()); // 1
console.log("dequeue:", queue.dequeue()); // 1
console.log("dequeue:", queue.dequeue()); // 2
console.log("size:", queue.size); // 1
console.log("toArray:", queue.toArray()); // [3]
