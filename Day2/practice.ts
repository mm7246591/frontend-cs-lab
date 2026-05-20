// 複雜度O(1)
function getItem<T>(items: T[], index: number): T | undefined {
  return items[index];
}

// 複雜度O(1)
function addItem<T>(items: T[], item: T): void {
  items.push(item);
}

// 複雜度O(n)
function addItemToFront<T>(items: T[], item: T): void {
  items.unshift(item);
}

// 複雜度O(n)
function removeFirst<T>(items: T[]): T | undefined {
  return items.shift();
}

// 複雜度O(n)
function copyItems<T>(items: T[]): T[] {
  return [...items];
}

// 複雜度O(n)
function getActiveUsers(users: { id: number; active: boolean }[]) {
  return users.filter((user) => user.active);
}

// 複雜度O(n)
function getUserIds(users: { id: number }[]) {
  return users.map((user) => user.id);
}

// 複雜度O(n)
function removeMiddle<T>(items: T[]): void {
  const middleIndex = Math.floor(items.length / 2);

  items.splice(middleIndex, 1);
}

// 複雜度O(n)
function findUser(users: { id: number; name: string }[], targetId: number) {
  return users.find((user) => user.id === targetId);
}

// 複雜度O(n*m)
function joinOrdersWithUsers(
  orders: { id: number; userId: number }[],
  users: { id: number; name: string }[],
) {
  return orders.map((order) => {
    const user = users.find((user) => user.id === order.userId);

    return {
      orderId: order.id,
      userName: user?.name,
    };
  });
}
