# Stack

## Stack 是什麼？

Stack 是後進先出 LIFO 的資料結構。

Last In, First Out。

最後放進去的資料，會最先被拿出來。

## 核心操作

- push：放入頂端
- pop：從頂端取出
- peek：查看頂端，但不移除
- size：目前數量
- isEmpty：是否為空

## 複雜度

如果用 Array 尾端實作：

- push：平均 O(1)
- pop：O(1)
- peek：O(1)
- size：O(1)

## 為什麼不要用 shift / unshift？

因為 shift / unshift 操作陣列開頭，可能造成大量元素搬移，所以通常是 O(n)。

## 前端常見應用

- 瀏覽器上一頁 / 下一頁
- Undo / Redo
- JavaScript call stack
- Modal stack
- 括號匹配
- DFS
- Parser / AST

## Undo / Redo

Undo / Redo 通常用兩個 Stack：

- undoStack：儲存過去狀態
- redoStack：儲存被復原的狀態

當使用者輸入新狀態時，redoStack 要清空，因為歷史分支改變了。

## Browser History

瀏覽器歷史可以用兩個 Stack：

- backStack：上一頁歷史
- forwardStack：下一頁歷史
- currentPage：目前頁面

造訪新頁面時，要清空 forwardStack。

## Valid Parentheses

括號匹配適合用 Stack，因為最近開啟的括號必須最先被關閉。

## 今日總結

Stack 適合處理「最近發生的事情要最先被處理」的場景。
