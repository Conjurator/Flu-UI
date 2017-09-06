import React from 'react'
import { storiesOf } from '@storybook/react'
import Carousel from '../src/components/Carousel'

storiesOf('Carousel', module)
  .add('default', () =>
      <Carousel imagesSrc={[
      	{
      		url:'https://sec-cdn.static.xiaomi.net/secStatic/groups/miui-sec/ccc/2c672cdd1d9ce2874ba96901b7ef16baec27e306.jpg',
      		href:'http:www.google.com'
      	},
      	{
      		url:'https://sec-cdn.static.xiaomi.net/secStatic/groups/miui-sec/ccc/6f186c1b82257f55b0fa658c51fd44a75c09b1c9.jpg',
      		href:'http:www.baidu.com'
      	}]}/>
)