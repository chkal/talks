#!../node_modules/.bin/ts-node

import { Money } from "./modules-money.ts";

let m = new Money( 42, "€" );

m.asString();
