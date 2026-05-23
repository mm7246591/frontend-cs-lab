class BrowserHistory {
  private backStack: string[] = [];
  private forwardStack: string[] = [];
  private currentPage: string;

  constructor(homepage: string) {
    this.currentPage = homepage;
  }

  visit(url: string): void {
    this.backStack.push(this.currentPage);
    this.currentPage = url;
    this.forwardStack = [];
  }

  back(): string {
    if (this.backStack.length === 0) {
      return this.currentPage; // No page to go back to
    }

    this.forwardStack.push(this.currentPage);
    this.currentPage = this.backStack.pop()!;

    return this.currentPage;
  }

  forward(): string {
    if (this.forwardStack.length === 0) {
      return this.currentPage;
    }

    this.backStack.push(this.currentPage);
    this.currentPage = this.forwardStack.pop()!;

    return this.currentPage;
  }

  getCurrentPage(): string {
    return this.currentPage;
  }

  getState() {
    return {
      backStack: [...this.backStack],
      currentPage: this.currentPage,
      forwardStack: [...this.forwardStack],
    };
  }
}

const browserHistory = new BrowserHistory("/home");

browserHistory.visit("/products");
browserHistory.visit("/products/1");
browserHistory.visit("/cart");

console.log(browserHistory.getState());

browserHistory.back();
console.log(browserHistory.getState());

browserHistory.back();
console.log(browserHistory.getState());

browserHistory.forward();
console.log(browserHistory.getState());
