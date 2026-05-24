# Queue

## Queue 是什麼？

Queue 是先進先出 FIFO 的資料結構。

First In, First Out。

最早加入的資料，會最先被取出。

## 核心操作

- enqueue：加入隊尾
- dequeue：從隊首取出
- peek：查看隊首，但不移除
- size：目前數量
- isEmpty：是否為空

## Queue vs Stack

- Stack：LIFO，後進先出
- Queue：FIFO，先進先出

## 複雜度

如果用 Array + head pointer：

- enqueue：平均 O(1)
- dequeue：平均 O(1)
- peek：O(1)
- size：O(1)

## 為什麼不要直接用 shift？

因為 shift 會移除陣列第一個元素，後面的元素通常要往前搬，所以是 O(n)。

高頻 Queue 建議用 head pointer。

## 前端常見應用

- API 請求佇列
- 批次圖片上傳
- Toast 依序顯示
- 任務排程
- Event Loop
- Web Worker 任務
- Retry 機制
- Rate limit
- BFS

## API 併發控制

如果有很多 API request，不一定要一次全部送出。

可以用 Queue + runningCount：

- queue：存放還沒執行的任務
- runningCount：目前正在執行的任務數
- concurrency：同時最多允許幾個任務

當 runningCount 小於 concurrency，就從 queue 取出下一個任務執行。

## 今日總結

Queue 適合處理「先來先處理」的場景，尤其適合任務排程、請求佇列與併發控制。
