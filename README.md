# Webpack bug reproduce

## Description

`"@babel/plugin-transform-arrow-functions"` is set in `plugins`. However the output file (assert/index.js) still contains "=>", making it fail in IE 11.

## Build

Run `npm run build`
