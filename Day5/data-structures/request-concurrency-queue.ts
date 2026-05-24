type RequestTask<T> = () => Promise<T>;

class OptimizedRequestConcurrencyQueue {
  private queue: Array<() => void> = [];
  private head = 0;
  private runningCount = 0;
  private readonly concurrency: number;

  constructor(concurrency: number) {
    if (concurrency <= 0) {
      throw new Error("concurrency must be greater than 0");
    }
    this.concurrency = concurrency;
  }

  add<T>(task: RequestTask<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const runTask = async () => {
        this.runningCount++;

        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.runningCount--;
          this.runNext();
        }
      };

      this.queue.push(runTask);
      this.runNext();
    });
  }

  private runNext(): void {
    while (
      this.runningCount < this.concurrency &&
      this.head < this.queue.length
    ) {
      const nextTask = this.queue[this.head];
      this.head++;

      void nextTask();
    }

    if (this.head > 1000 && this.head * 2 > this.queue.length) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }
  }

  get pendingCount(): number {
    return this.queue.length - this.head;
  }

  get activeCount(): number {
    return this.runningCount;
  }
}
