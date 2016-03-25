#!/usr/bin/env bash
mkdir -p build
browserify src/main/ES/bootstrap.js -o build/angular-annotations.js -t [ babelify browserify-shim ] -s "angularAnnotations"
