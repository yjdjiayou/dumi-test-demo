---
group:
title: babel
---


## [Demo](https://github.com/ant-design/babel-plugin-import) 

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["import", { 
        "libraryName": "antd", 
        "libraryDirectory": "es",
        "style": true
    }, "antd"],
    ["import", { 
       "libraryName": "antd-mobile",
       "libraryDirectory": "lib"
     }, "antd-mobile"]
  ]
}
```

## 配置项解析

#### libraryName——设置需要按需加载的组件库名称

- 只设置 libraryName 
  
  `{ "libraryName": "antd" }`
  只会按需加载 组件（不包含组件样式），此时可以手动引入所有的样式 `import 'antd/dist/antd.css'`

```javascript 
import { Button } from 'antd';
ReactDOM.render(<Button>xxxx</Button>);

      ↓ ↓ ↓ ↓ ↓ ↓

var _button = require('antd/lib/button');
ReactDOM.render(<_button>xxxx</_button>);
```

#### style——按需加载样式
- 默认为 false，不引入样式

- 设置 style 为 true 

`{ "libraryName": "antd", "style": true }`
按需加载 组件&组件样式（默认加载 style 目录下的 index.js，该文件会去加载 index.less/index.scss 样式文件）

```javascript 
import { Button } from 'antd';
ReactDOM.render(<Button>xxxx</Button>);

      ↓ ↓ ↓ ↓ ↓ ↓

var _button = require('antd/lib/button');
require('antd/lib/button/style');
ReactDOM.render(<_button>xxxx</_button>);
```

- 设置 style 为 css 

`{ "libraryName": "antd", "style": css }` 按需加载 组件&组件样式（默认加载 style 目录下的 css.js 文件，该文件会去加载 index.css 文件）

```javascript 
import { Button } from 'antd';
ReactDOM.render(<Button>xxxx</Button>);

      ↓ ↓ ↓ ↓ ↓ ↓

var _button = require('antd/lib/button');
require('antd/lib/button/style/css');
ReactDOM.render(<_button>xxxx</_button>);
```

#### libraryDirectory——指定组件所在目录
`{"libraryName": "antd","libraryDirectory": "es", // default: lib}` 默认会去 lib 目录查找组件


































