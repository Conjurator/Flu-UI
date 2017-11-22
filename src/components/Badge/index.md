# Badge
右上角红色提示数字，多用来标示未读消息

## 使用
```js
import {Badge} from 'fluui'
```

<!-- STORY -->

## 示例

```jsx
import {Badge} from 'fluui'
ReactDOM.render(
  <div clasName={box}>
    <div className='eg1'>
      <Badge count={11} />
    </div>
    <div className='eg2'>
      <Badge count={0} showZero={true} />
    </div>
  </div>
, mountNode)
```

## API

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | ---| --- | --- |
| count | 要显示的数字 | number | - | - |
| dot | 是否显示为圆点 | boolean | `true`/`false` | `false` |
| showZero | 是否显示0 | boolean | `true`/`false` | `false` |
| style | 额外样式 | object | - | `{}` |
