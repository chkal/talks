#!/bin/bash

BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
$BASEDIR/node_modules/.bin/babel-node --presets es2015 $*
