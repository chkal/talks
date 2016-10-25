#!../node_modules/.bin/ts-node

class Money {

  constructor( private amount: number,
               private currency: string ) {
    // nothing here
  }

  asString() {
    return this.amount.toFixed( 2 ) + this.currency;
  }

}

let m = new Money( 42, "€" );
console.log( m.asString() );
//let x = m.amount;

