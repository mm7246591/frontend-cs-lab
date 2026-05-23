// 3
// const stack: number[] = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.pop());

// B
// const stack: string[] = [];

// stack.push("A");
// stack.push("B");
// stack.push("C");

// stack.pop();
// console.log(stack.pop());

// 20，Peek
// const stack: number[] = [];

// stack.push(10);
// stack.push(20);

// console.log(stack[stack.length - 1]);

// O(1)
// 用 Array 尾端實作 Stack，push 和 pop 的複雜度是什麼？

// 因為複雜度會是O(n)
// 為什麼不建議用 unshift / shift 實作 Stack？

// 合法括號
// ({[]})

// 不合法括號
// ([)]

// 因為需要存放復原狀態跟復原後的狀態，所以需要兩個 Stack
// Undo / Redo 為什麼通常需要兩個 Stack？

// 因為需要存放上一頁和下一頁的狀態，所以需要兩個 Stack
// 瀏覽器上一頁 / 下一頁為什麼通常也可以用兩個 Stack 模擬？

// push first->push second->push third-> pop third->pop second->pop first
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("done");
}

first();
