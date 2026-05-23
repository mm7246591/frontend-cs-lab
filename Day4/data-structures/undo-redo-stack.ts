class UndoRedoManager<T> {
  private undoStack: T[] = [];
  private redoStack: T[] = [];
  private currentState: T;

  constructor(initialState: T) {
    this.currentState = initialState;
  }

  setState(newState: T): void {
    this.undoStack.push(this.currentState);
    this.currentState = newState;
    this.redoStack = [];
  }

  undo(): T {
    if (this.undoStack.length === 0) {
      return this.currentState;
    }
    this.redoStack.push(this.currentState);
    this.currentState = this.undoStack.pop()!;

    return this.currentState;
  }

  redo(): T {
    if (this.redoStack.length === 0) {
      return this.currentState;
    }
    this.undoStack.push(this.currentState);
    this.currentState = this.redoStack.pop()!;

    return this.currentState;
  }

  getCurrentState(): T {
    return this.currentState;
  }

  getState() {
    return {
      undoStack: [...this.undoStack],
      redoStack: [...this.redoStack],
      currentState: this.currentState,
    };
  }
}

const editor = new UndoRedoManager("");

editor.setState("H");
editor.setState("He");
editor.setState("Hel");
editor.setState("Hell");
editor.setState("Hello");

console.log(editor.getState());

editor.undo();
console.log(editor.getState());

editor.undo();
console.log(editor.getState());

editor.redo();
console.log(editor.getState());

editor.setState("Hello!");
console.log(editor.getState());
