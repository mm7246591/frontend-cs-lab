type User = {
  id: number;
  name: string;
};

function createUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
  }));
}

/**
 * O(1)
 * 不管 users 有幾筆，都只取第一筆。
 */
function getFirstUser(users: User[]): User | undefined {
  return users[0];
}

/**
 * O(n)
 * 最差情況下，需要掃完整個 users。
 */
function findUserById(users: User[], targetId: number): User | undefined {
  for (const user of users) {
    if (user.id === targetId) {
      return user;
    }
  }

  return undefined;
}

/**
 * O(n)
 * 雖然 map 會建立新陣列，但每個 user 只處理一次。
 */
function getUserNames(users: User[]): string[] {
  return users.map((user) => user.name);
}

/**
 * O(n²)
 * 每個 user 都會跟其他 user 比較一次。
 */
function hasDuplicateName(users: User[]): boolean {
  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      if (users[i].name === users[j].name) {
        return true;
      }
    }
  }

  return false;
}

/**
 * O(n)
 * 建立 Map 需要掃過 users 一次。
 */
function createUserMap(users: User[]): Map<number, User> {
  const userMap = new Map<number, User>();

  for (const user of users) {
    userMap.set(user.id, user);
  }
  return userMap;
}

/**
 * 通常接近 O(1)
 * Map 根據 key 查找資料，不需要像 Array.find 一樣從頭掃到尾。
 */
function findUserFromMap(
  userMap: Map<number, User>,
  targetId: number,
): User | undefined {
  return userMap.get(targetId);
}

function measure(label: string, callback: () => void): void {
  const start = performance.now();
  callback();
  const end = performance.now();

  console.log(`${label}: ${(end - start).toFixed(4)} ms`);
}

const smallUsers = createUsers(1000);
const largeUsers = createUsers(100000);

measure("O(1) getFirstUser small", () => {
  getFirstUser(smallUsers);
});

measure("O(1) getFirstUser large", () => {
  getFirstUser(largeUsers);
});

measure("O(n) findUserById small", () => {
  findUserById(smallUsers, 1000);
});

measure("O(n) findUserById large", () => {
  findUserById(largeUsers, 100000);
});

const largeUserMap = createUserMap(largeUsers);
measure("Map.get large", () => {
  findUserFromMap(largeUserMap, 100000);
});
