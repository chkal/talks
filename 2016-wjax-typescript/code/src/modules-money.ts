#!../node_modules/.bin/ts-node

export class Money {

  constructor( private amount: number,
    private currency: string ) {
    // nothing
  }

  asString() {
    return this.amount.toFixed( 2 ) + this.currency;
  }
}