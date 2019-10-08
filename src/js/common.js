class Calc {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }
}

const calculator = new Calc(7, 21);
calculator.add();
