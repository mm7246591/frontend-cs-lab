class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("peek:", stack.peek()); // 3
console.log("pop:", stack.pop()); // 3
console.log("pop:", stack.pop()); // 2
console.log("size:", stack.size); // 1
console.log("isEmpty:", stack.isEmpty()); // false
