type AsyncTask = () => Promise<void>;

class AsyncTaskQueue {
  private queue: AsyncTask[] = [];
  private isRunning = false;

  add(task: AsyncTask): void {
    this.queue.push(task);

    if (!this.isRunning) {
      void this.run();
    }
  }

  private async run(): Promise<void> {
    this.isRunning = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();

      if (!task) {
        continue;
      }

      await task();
    }

    this.isRunning = false;
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const asyncQueue = new AsyncTaskQueue();

asyncQueue.add(async () => {
  await delay(1000);
  console.log("Async Task 1");
});

asyncQueue.add(async () => {
  await delay(500);
  console.log("Async Task 2");
});

asyncQueue.add(async () => {
  await delay(100);
  console.log("Async Task 3");
});
