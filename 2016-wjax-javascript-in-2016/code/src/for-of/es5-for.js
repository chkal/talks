#!/usr/bin/env node

var primes = [ 3, 5, 7, 11, 13 ];

// ES3
for(var i=0; i<primes.length; i++) {
  console.log(primes[i]);
}

// ES5
primes.forEach(function(p){
  console.log(p);
});
