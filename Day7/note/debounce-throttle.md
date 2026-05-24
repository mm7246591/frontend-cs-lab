# Debounce / Throttle

## Debounce 是什麼？

Debounce 是事件持續觸發時不執行，等停止觸發一段時間後，才執行最後一次。

適合：

- 搜尋框
- 表單自動儲存
- username 檢查
- input validation
- resize 結束後重新計算
- 部分 button 防連點

## Throttle 是什麼？

Throttle 是事件持續觸發時，固定時間內最多執行一次。

適合：

- scroll
- resize 過程中更新
- mousemove
- drag
- infinite scroll
- scroll progress
- button 防連點

## 判斷方式

只想要最後一次：Debounce  
想要固定頻率執行：Throttle

## Debounce 核心

每次事件觸發：

1. 清除舊 timer
2. 建立新 timer
3. delay 結束後執行 callback

## Throttle 核心

每次事件觸發：

1. 檢查距離上次執行是否已超過 delay
2. 如果超過就執行
3. 如果還沒超過就忽略

## 表單防連點

表單送出最推薦用 loading lock：

```ts
if (submitting.value) return;
submitting.value = true;

try {
  await submit();
} finally {
  submitting.value = false;
}
```
