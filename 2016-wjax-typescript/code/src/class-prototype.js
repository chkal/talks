#!/usr/bin/env node

var Money = function ( amount, currency ) {
  this.amount = amount;
  this.currency = currency;
};

Money.prototype.asString = function () {
  return this.amount.toFixed( 2 ) + this.currency;
};

var money = new Money( 42, "€" );

console.info( money.asString() );
// 42.00€
