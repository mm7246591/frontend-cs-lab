function debounce<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay: number,
): (...args: TArgs) => void {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return (...args: TArgs) => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay: number,
): (...args: TArgs) => void {
  let lastRunTime = 0;

  return (...args: TArgs) => {
    const now = Date.now();

    if (now - lastRunTime >= delay) {
      callback(...args);
      lastRunTime = now;
    }
  };
}

const debouncedSearch = debounce((keyword: string) => {
  console.log(`[debounce] search: ${keyword}`);
}, 500);

debouncedSearch("v");
debouncedSearch("vu");
debouncedSearch("vue");
debouncedSearch("vue3");

const throttledScroll = throttle((position: number) => {
  console.log(`[throttle] scroll position: ${position}`);
}, 500);

let position = 0;

const intervalId = setInterval(() => {
  position += 100;
  throttledScroll(position);

  if (position >= 2000) {
    clearInterval(intervalId);
  }
}, 100);
