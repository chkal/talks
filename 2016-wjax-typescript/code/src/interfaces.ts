#!../node_modules/.bin/ts-node

interface Money {
  amount: number;
  currency: string;
  asString: () => string;
}

let money: Money = {
  amount: 42,
  currency: "€",
  asString: function(): string {
    return this.amount.toFixed( 2 ) + this.currency;
  }
};