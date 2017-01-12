# overlay
---

基础浮层组件

## Install

```
$ npm install pandora-overlay --save
```

## Usage

```js
var Overlay = require('pandora-overlay');
var overlay = new Overlay({
  baseXY: { x: 0, y: 0},
  selfXY: { x: 0, y: 0},
  css: {
    background: 'rgba(0, 255, 0, 0.8)',
    width: 100,
    height: 100
  }
});
```
