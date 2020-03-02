#!../node_modules/.bin/ts-node

abstract class Printable {
  abstract asString(): string;
}

class Money extends Printable {

  constructor( private amount: number,
    private currency: string ) {
    // nothing here
  }

  asString() {
    return this.amount.toFixed( 2 ) + this.currency;
  }

}


let m = new Money( 42, "€" );
console.log(m.asString());
//let x = m.amount;

