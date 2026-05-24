// 1
// const queue: number[] = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);

// console.log(queue.shift());

// B
// const queue: string[] = [];

// queue.push("A");
// queue.push("B");
// queue.push("C");

// queue.shift();
// console.log(queue.shift());

// Stack是LIFO，Queue是FIFO。
// Stack 和 Queue 最大差異是什麼？

// 因為使用shift會動到陣列順序，時間複雜度O(n)，不適合高頻率的Queue實作。
// 為什麼不建議用 shift() 實作高頻 Queue？

// O(1)
// 用 head pointer 實作 Queue，dequeue 平均複雜度是多少？

// 代表同時最多進行3個任務
// API request queue 的 concurrency = 3 是什麼意思？

// 因為這樣才不會讓伺服器過載，或是讓使用者的網路塞爆，造成使用者體驗不佳。
// 為什麼批次上傳圖片時，不一定要一次把所有 request 都送出去？

// BFS
// Queue 可以用來實作 DFS 還是 BFS？

// A->C->B
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");

// 用 Queue + runningCount 控制併發數
//如果你有 100 個 API 請求，但同時最多只能跑 5 個，你會用什麼資料結構與策略？
