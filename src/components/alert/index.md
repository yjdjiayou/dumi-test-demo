---
group:
  title: 组件
  order: 20
order: 1
---

# Alert 按钮

## Demo:

```tsx
import React from 'react';
import { Button } from 'antd';

export default () => <Button>click</Button>;
```

## API 
|  参数  |  说明  |  类型  |  默认值  |
|  ---   |  ---  |  ---  |  ---  |
|  className  |  自定义类名  |  string  |  |
|  type  |  按钮类型 primary、warning、info  |  string  |  default  |
|  shape  |  按钮形状 circle、 round(默认)  |  string  |  round  |
|  onClick  |  对外暴露的点击事件  |  func  |  |
