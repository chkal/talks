#!../node_modules/.bin/ts-node

function formatEuro( value: number, currency?: string ): string {

  return value.toFixed(2) + " " + ( currency || "€" );

}

console.log( formatEuro( 42 ) );

console.log( formatEuro( 42, "$" ) );
