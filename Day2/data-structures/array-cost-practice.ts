import { performance } from "node:perf_hooks";

function createNumbers(count: number): number[] {
  return Array.from({ length: count }, (_, index) => index);
}

function measure(label: string, callback: () => void): void {
  const start = performance.now();
  callback();
  const end = performance.now();

  console.log(`${label}: ${(end - start).toFixed(4)} ms`);
}

/**
 * 注意：
 * 這不是嚴格 benchmark，只是幫你觀察趨勢。
 * 真實結果會受到電腦、Node 版本、JS engine 最佳化影響。
 */

const FAST_COUNT = 200_000;
const SLOW_COUNT = 30_000;

measure("push 200,000 items", () => {
  const items: number[] = [];

  for (let i = 0; i < FAST_COUNT; i++) {
    items.push(i);
  }
});

measure("pop 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);

  while (items.length > 0) {
    items.pop();
  }
});

measure("unshift 30,000 items", () => {
  const items: number[] = [];

  for (let i = 0; i < SLOW_COUNT; i++) {
    items.unshift(i);
  }
});

measure("shift 30,000 items", () => {
  const items = createNumbers(SLOW_COUNT);

  while (items.length > 0) {
    items.shift();
  }
});

measure("splice middle 30,000 times", () => {
  const items = createNumbers(SLOW_COUNT);

  while (items.length > 0) {
    const middleIndex = Math.floor(items.length / 2);
    items.splice(middleIndex, 1);
  }
});

measure("copy array with spread 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);
  const copied = [...items];

  void copied;
});

measure("map 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);

  const result = items.map((item) => item * 2);

  void result;
});

measure("filter 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);

  const result = items.filter((item) => item % 2 === 0);

  void result;
});

measure("find last item from 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);

  const result = items.find((item) => item === FAST_COUNT - 1);

  void result;
});

measure("Map.get from 200,000 items", () => {
  const items = createNumbers(FAST_COUNT);
  const itemMap = new Map(items.map((item) => [item, item]));

  const result = itemMap.get(FAST_COUNT - 1);

  void result;
});
