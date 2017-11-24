---
category: Components
title: Button
order: 3
---

# Button
操作按钮
## 使用
```js
import { Button } from 'fluui'
```

## 示例
```jsx
import { Button } from 'fluui'
ReactDOM.render(
  <div clasName={box}>
    <div className='eg1'>
      <Button type="primary">主按钮</Button>
    </div>
  </div>
, mountNode)
```
## API

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | ---| --- | --- |
| type | 按钮类型 | string | primary/secondary | - |
| htmlType | 原生type类型 | string | button/submit... | button |
| size | 按钮大小 | string | default/large/small | default |
| disabled | 是否禁用 | string/boolean | `true`/`false` | - |
| onClick | `click`事件函数 | function | - | - |
| style | 额外style | object | - | - |
