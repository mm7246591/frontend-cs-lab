// 複雜度:O(n)
const ids = [1, 2, 2, 3, 3, 4];
const uniqueIds = [...new Set(ids)];

// 複雜度:O(n)
function hasSelectedId(selectedIds: number[], id: number): boolean {
  return selectedIds.includes(id);
}

// 複雜度:平均O(1)
function hasSelectedIdFast(selectedIdSet: Set<number>, id: number): boolean {
  return selectedIdSet.has(id);
}

// 複雜度:O(n)
function createUserMap(users: User[]): Map<number, User> {
  return new Map(users.map((user) => [user.id, user]));
}

// 複雜度:平均O(1)
function getUser(userMap: Map<number, User>, id: number): User | undefined {
  return userMap.get(id);
}

// 複雜度:O(n)
function getActiveUserNames(users: User[]): string[] {
  return users.filter((user) => user.active).map((user) => user.name);
}

// 複雜度:O(n)
function getUsersByRole(users: User[]): Map<User["role"], User[]> {
  const map = new Map<User["role"], User[]>();

  for (const user of users) {
    const group = map.get(user.role);

    if (group) {
      group.push(user);
    } else {
      map.set(user.role, [user]);
    }
  }

  return map;
}

// 複雜度:O(n*m)
function markSelectedUsers(users: User[], selectedIds: number[]) {
  return users.map((user) => ({
    ...user,
    selected: selectedIds.includes(user.id),
  }));
}

// 複雜度:O(n+m)
function markSelectedUsersFast(users: User[], selectedIds: number[]) {
  const selectedIdSet = new Set(selectedIds);

  return users.map((user) => ({
    ...user,
    selected: selectedIdSet.has(user.id),
  }));
}

// size為2，因為a和b是不同的物件
const a = { id: 1 };
const b = { id: 1 };

const set = new Set();

set.add(a);
set.add(b);

console.log(set.size);
