---
category: doc
title: 快速上手
order: 1
---

### 安装
目前只支持使用npm安装
```bash
npm install fluui -s
```
### 第一个列子
```js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'fluui'

ReactDOM.render(
  <Button>默认按钮</Button>,
  document.getElementById('root')
)
```
