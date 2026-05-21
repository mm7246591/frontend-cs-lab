# Map / Set

## 今日重點

Map 和 Set 可以幫助我降低大量資料查找、去重、分組的成本。

## Set 是什麼？

Set 是不允許重複值的資料結構。

常見操作：

- add
- has
- delete
- clear
- size

常見用途：

- 去重
- 判斷某個值是否存在
- 儲存 selected ids
- 儲存 visited ids

## Map 是什麼？

Map 是 key-value 資料結構。

常見操作：

- set
- get
- has
- delete
- clear
- size

常見用途：

- 用 id 找資料
- 建立索引
- 資料分組
- 資料計數
- 儲存 cache

## Array.includes vs Set.has

Array.includes 是 O(n)。

```ts
selectedIds.includes(user.id);
```
