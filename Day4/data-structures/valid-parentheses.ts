function isValidParentheses(input: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openingBrackets = new Set(["(", "[", "{"]);
  const closingBrackets = new Set([")", "]", "}"]);

  for (const char of input) {
    if (openingBrackets.has(char)) {
      stack.push(char);
      continue;
    } else if (closingBrackets.has(char)) {
      const lastBracket = stack.pop();
      if (lastBracket !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("([])")); // true
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
console.log(isValidParentheses("(((")); // false
console.log(isValidParentheses(")))")); // false
