type Task = () => void;

class TaskQueue {
  private queue: Task[] = [];
  private head = 0;

  add(task: Task): void {
    this.queue.push(task);
  }

  run(): void {
    while (this.head < this.queue.length) {
      const task = this.queue[this.head];
      this.head++;
      task();
    }

    this.queue = [];
    this.head = 0;
  }

  get size(): number {
    return this.queue.length - this.head;
  }
}

const taskQueue = new TaskQueue();

taskQueue.add(() => console.log("Task 1"));
taskQueue.add(() => console.log("Task 2"));
taskQueue.add(() => console.log("Task 3"));

console.log("before run size:", taskQueue.size);

taskQueue.run();

console.log("after run size:", taskQueue.size);
