// Debounce
// 使用者在搜尋框快速輸入文字，應該用 Debounce 還是 Throttle？

// Throttle
// 監聽 window.scroll 更新 scroll progress，應該用 Debounce 還是 Throttle？

// 停止觸發一段時間後，才執行最後一次
// Debounce 的核心行為是什麼？

// 固定時間間隔執行一次
// Throttle 的核心行為是什麼？

// C
// const fn = debounce((value: string) => {
//   console.log(value);
// }, 500);

// fn("A");
// fn("B");
// fn("C");

// loading lock
// 表單送出防連點，最推薦用 debounce、throttle，還是 loading lock？

// 避免元件銷毀後 callback 還執行，造成狀態更新錯誤或 memory leak
// 為什麼 Vue component unmount 時要 cancel debounce？

// 較早發出的 request 可能較晚回來，覆蓋較新的結果
// Async search 為什麼可能有 race condition？

// 只想要最後一次結果：Debounce
// 持續觸發中固定頻率執行：Throttle
