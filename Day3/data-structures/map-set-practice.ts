type User = {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer";
  active: boolean;
};

type Order = {
  id: number;
  userId: number;
  amount: number;
};

const users: User[] = [
  { id: 1, name: "Alex", role: "admin", active: true },
  { id: 2, name: "Ben", role: "editor", active: true },
  { id: 3, name: "Cathy", role: "viewer", active: false },
  { id: 2, name: "Ben Duplicate", role: "editor", active: true },
  { id: 4, name: "Dora", role: "viewer", active: true },
];

const orders: Order[] = [
  { id: 101, userId: 1, amount: 300 },
  { id: 102, userId: 2, amount: 500 },
  { id: 103, userId: 2, amount: 700 },
  { id: 104, userId: 5, amount: 100 },
];

// 實作 uniqueBy
function uniqueBy<T, K>(items: T[], getKey: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];

  for (const item of items) {
    const key = getKey(item);

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(item);
  }

  return result;
}

const uniqueUsers = uniqueBy(users, (user) => user.id);

console.log("uniqueUsers:", uniqueUsers);

// 實作 indexBy
function indexBy<T, K>(items: T[], getKey: (item: T) => K): Map<K, T> {
  const map = new Map<K, T>();

  for (const item of items) {
    map.set(getKey(item), item);
  }
  return map;
}
const userMap = indexBy(users, (user) => user.id);

console.log("user id 1:", userMap.get(1));
console.log("user id 2:", userMap.get(2));

// 實作 groupBy
function groupBy<T, K>(items: T[], getKey: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const item of items) {
    const group = map.get(getKey(item));
    if (group) {
      group.push(item);
    } else {
      map.set(getKey(item), [item]);
    }
  }
  return map;
}
const usersByRole = groupBy(users, (user) => user.role);
console.log("usersByRole:", usersByRole);
console.log("viewers:", usersByRole.get("viewer"));

// 實作 countBy
function countBy<T, K>(items: T[], getKey: (item: T) => K): Map<K, number> {
  const map = new Map<K, number>();

  for (const item of items) {
    const count = map.get(getKey(item)) ?? 0;
    map.set(getKey(item), count + 1);
  }
  return map;
}

const userCountByRole = countBy(users, (user) => user.role);

console.log("userCountByRole:", userCountByRole);

// 實作 joinOrdersWithUsers
function joinOrdersWithUsers(orders: Order[], users: User[]) {
  const userMap = indexBy(users, (user) => user.id);

  return orders.map((order) => {
    const user = userMap.get(order.userId);

    return {
      orderId: order.id,
      amount: order.amount,
      userName: user?.name ?? "Unknown",
    };
  });
}

const joinedOrders = joinOrdersWithUsers(orders, users);

console.log("joinedOrders:", joinedOrders);
