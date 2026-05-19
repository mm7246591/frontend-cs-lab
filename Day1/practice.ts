// 複雜度:O(1) -> 正確
function getLastItem<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

// 複雜度:O(n) -> 正確
function printAll(items: string[]): void {
  for (const item of items) {
    console.log(item);
  }
}

// 複雜度:O(2n) => O(n) -> 錯誤，應該是O(n^2)，因為有兩層迴圈
function printPairs(items: string[]): void {
  for (const a of items) {
    for (const b of items) {
      console.log(a, b);
    }
  }
}

// 複雜度:O(n) -> 正確
function contains(items: number[], target: number): boolean {
  return items.includes(target);
}

// 複雜度:O(n+m) -> 錯誤，應該是O(n)，因為使用了Map來存儲用戶資料，查找操作是O(1)，所以整體複雜度是O(n+1)。
function findUserName(users: User[], targetId: number): string | undefined {
  const userMap = new Map<number, User>();

  for (const user of users) {
    userMap.set(user.id, user);
  }

  return userMap.get(targetId)?.name;
}

// 複雜度:O(n) -> 錯誤，應該是O(1)，因為只需要訪問陣列的前10個元素，無論陣列的大小如何，操作都是固定的時間。
function logFirstTen(items: string[]): void {
  for (let i = 0; i < 10; i++) {
    console.log(items[i]);
  }
}

// 複雜度:O(n) -> 正確
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.id > 100);
}

// 複雜度:O(n²) -> 錯誤，應該是O(n*m)，因為有兩個獨立的迴圈，第一個迴圈遍歷用戶，第二個迴圈遍歷訂單，兩者的大小可能不同。
function matchUsersAndOrders(
  users: User[],
  orders: { id: number; userId: number }[],
): void {
  for (const user of users) {
    for (const order of orders) {
      if (user.id === order.userId) {
        console.log(user.name, order.id);
      }
    }
  }
}
