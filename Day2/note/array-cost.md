# Array 操作成本

## 今日重點

Array 是前端最常用的資料結構，但不同操作成本差很多。

## 常見操作複雜度

- arr[index]：O(1)
- push：平均 O(1)
- pop：O(1)
- shift：O(n)
- unshift：O(n)
- splice：通常 O(n)
- slice：O(k)
- map：O(n)
- filter：O(n)
- reduce：O(n)
- find：O(n)
- includes：O(n)
- spread copy：O(n)

## 為什麼 shift / unshift 比較慢？

因為它們操作陣列開頭，可能造成大量元素重新排列。

## 前端實務注意

### 1. 不要在大型資料中頻繁 shift

不好：

```ts
const next = queue.shift();
```
