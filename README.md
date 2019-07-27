# @bhargavshah/spacify

![npm (scoped)](https://img.shields.io/npm/v/@bhargav.shah/spacify)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@bhargav.shah/spacify)

Adds spaces to between each character of a string.

## Install

```
$ npm install @bhargav.shah/spacify
```

## Usage

```js
const spacify = require("@bhargav.shah/spacify");

spacify("socrammed");
//=> "s o c r a m m e d"

spacify(1337);
//=> Uncaught TypeError: spacify needs a string!
```
