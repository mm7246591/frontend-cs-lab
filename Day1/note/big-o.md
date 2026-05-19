# Big O 基礎

## Big O 是什麼？

Big O 用來描述當資料量變大時，程式成本的成長趨勢。

## 為什麼前端需要懂 Big O？

前端常會處理列表、表格、搜尋、排序、巢狀資料、API 資料關聯。如果沒有注意複雜度，資料量變大後頁面可能會卡頓。

## 常見時間複雜度

| 複雜度     | 名稱     | 直覺                 | 常見例子                    |
| ---------- | -------- | -------------------- | --------------------------- |
| O(1)       | 常數時間 | 資料變多，成本不太變 | 取陣列 index、Map.get       |
| O(log n)   | 對數時間 | 每次砍半             | Binary Search               |
| O(n)       | 線性時間 | 資料幾筆就大概跑幾次 | for loop、find、filter      |
| O(n log n) | 線性對數 | 常見高效排序         | merge sort、quick sort 平均 |
| O(n²)      | 平方時間 | 巢狀迴圈             | 雙層 for                    |
| O(2ⁿ)      | 指數時間 | 資料多一點就爆炸     | 暴力遞迴、部分組合問題      |

## Big O 判斷規則

### 規則 1：只看資料量變大後的成長趨勢

範例：

```ts
function PrintFirstUser(users: string[]) {
  console.log(users[0]);
}
```

不管 `users` 有幾筆資料，都只會拿第一筆，因此時間複雜度是 **O(1)**。

---

### 規則 2：單層迴圈通常是 O(n)

範例：

```ts
function findUser(users: string[], target: string) {
  for (const user of users) {
    if (user === target) {
      return user;
    }
  }

  return null;
}
```

最差情況是：

- 目標在最後一筆
- 或目標根本不存在

所以最多要掃完整個陣列，因此時間複雜度是 **O(n)**。

---

### 規則 3：雙層迴圈通常是 O(n²)

範例：

```ts
function hasDuplicate(users: string[]) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (i !== j && users[i] === users[j]) {
        return true;
      }
    }
  }

  return false;
}
```

如果有 100 筆資料，大約要跑：

```txt
100 * 100 = 10,000 次
```

如果有 1000 筆資料，大約要跑：

```txt
1000 * 1000 = 1,000,000 次
```

所以時間複雜度是 **O(n²)**。

---

### 規則 4：不同資料量要分開看

範例：

```ts
function matchUsersAndOrders(users: User[], orders: Order[]) {
  for (const user of users) {
    for (const order of orders) {
      if (user.id === order.userId) {
        console.log(user.name, order.id);
      }
    }
  }
}
```

這裡不是 **O(n²)**，因為 `users` 和 `orders` 是兩個不同的資料量。

假設：

```txt
users.length = n
orders.length = m
```

所以這段程式的時間複雜度是 **O(n \* m)**。

---

### 規則 5：忽略常數

範例：

```ts
function printUsers(users: string[]) {
  for (const user of users) {
    console.log(user);
  }

  for (const user of users) {
    console.log(user);
  }
}
```

這段程式會跑兩次 `n`，也就是：

```txt
O(2n)
```

但 Big O 會忽略常數，所以最後寫成 **O(n)**。

---

### 規則 6：保留成長最快的項目

範例：

```ts
function example(users: string[]) {
  console.log(users[0]);

  for (const user of users) {
    console.log(user);
  }

  for (const userA of users) {
    for (const userB of users) {
      console.log(userA, userB);
    }
  }
}
```

這段程式包含：

```txt
O(1) + O(n) + O(n²)
```

合起來是：

```txt
O(1 + n + n²)
```

但資料量變大後，`n²` 成長最快，所以最後寫成 **O(n²)**。

## 今日最重要觀念

Array.find 是 O(n)，如果在迴圈裡重複使用，可能會變成 O(n \* m)。

可以先用 Map 建立索引，把查找成本降到接近 O(1)。
