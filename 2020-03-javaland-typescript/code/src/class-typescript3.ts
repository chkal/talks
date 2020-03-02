#!../node_modules/.bin/ts-node

class Money {

  private readonly amount: number;
  private readonly currency: string;

  constructor( amount: number, currency: string ) {
    this.amount = amount;
    this.currency = currency;
  }

  asString() {
    return this.amount.toFixed( 2 ) + this.currency;
  }

}

let m = new Money( 42, "€" );
console.log(m.asString());
//let x = m.amount;

