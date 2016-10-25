#!/usr/bin/env node
"use strict";

class Money {

  constructor( amount, currency ) {
    this.amount = amount;
    this.currency = currency;
  }

  asString() {
    return this.amount.toFixed( 2 ) + this.currency;
  }

}

let money = new Money( 42, "€" );

console.log( money.asString() );
// 42.00€