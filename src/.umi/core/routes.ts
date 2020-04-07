import { ApplyPluginsType } from 'D:/library/demo1/node_modules/_@umijs_runtime@3.0.16@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('D:/library/demo1/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"首页介绍","meta":{"order":10}},{"title":"基础组件","path":"/base-components","meta":{"order":20},"children":[{"path":"/base-components/alert","title":"Alert 按钮","meta":{"order":1}},{"path":"/base-components/button222","title":"Button 按钮222","meta":{"order":2}},{"path":"/base-components/button","title":"Button 按钮","meta":{"order":3}}]},{"title":"表单组件","path":"/test","meta":{"order":30},"children":[{"path":"/test/test1","title":"表单组件111","meta":{}},{"path":"/test/test2","title":"表单组件222","meta":{}}]},{"title":"组件","path":"/components","meta":{},"children":[{"path":"/components/alert","title":"Alert 按钮","meta":{"order":3}},{"path":"/components/button","title":"Button 按钮","meta":{"order":3}},{"path":"/components/button222","title":"Button 按钮222","meta":{"order":3}}]},{"path":"/babel-plugin-import","title":"babel","meta":{}}]}},"locales":[],"navs":{},"title":"UI组件库","mode":"doc","repoUrl":".git"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/alert",
        "component": require('../../components/alert/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/alert/index.md",
          "updatedTime": 1585907893000,
          "group": {
            "title": "组件",
            "path": "/components"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 按钮",
              "heading": "alert-按钮"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Alert 按钮"
        },
        "title": "Alert 按钮"
      },
      {
        "path": "/components/button",
        "component": require('../../components/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/button/index.md",
          "updatedTime": 1585907893000,
          "group": {
            "title": "组件",
            "path": "/components"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮"
        },
        "title": "Button 按钮"
      },
      {
        "path": "/components/button222",
        "component": require('../../components/button222/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/button222/index.md",
          "updatedTime": 1585907893000,
          "group": {
            "title": "组件",
            "path": "/components"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮222",
              "heading": "button-按钮222"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮222"
        },
        "title": "Button 按钮222"
      },
      {
        "path": "/babel-plugin-import",
        "component": require('../../../docs/babel-plugin-import.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/babel-plugin-import.md",
          "updatedTime": 1585907893000,
          "group": null,
          "title": "babel",
          "slugs": [
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "配置项解析",
              "heading": "配置项解析"
            },
            {
              "depth": 4,
              "value": "libraryName——设置需要按需加载的组件库名称",
              "heading": "libraryname设置需要按需加载的组件库名称"
            },
            {
              "depth": 4,
              "value": "style——按需加载样式",
              "heading": "style按需加载样式"
            },
            {
              "depth": 4,
              "value": "libraryDirectory——指定组件所在目录",
              "heading": "librarydirectory指定组件所在目录"
            }
          ]
        },
        "title": "babel"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585907893000,
          "title": "首页介绍",
          "order": 10,
          "hero": {
            "title": "dumi",
            "desc": "基于 Umi、为组件开发场景而生的文档工具",
            "actions": [
              {
                "text": "快速上手",
                "link": "/guide/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "高性能",
              "desc": "<div class=\"markdown\"><p>有强大的 Umi 做底座，天生高性能、可扩展，且可使用 Umi 生态中的大部分插件</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "为组件开发而生",
              "desc": "<div class=\"markdown\"><p>独特的 Markdown 扩展，可嵌入 Demo、可导入外部 Demo 甚至插入自定义 React 组件，使得组件的文档不仅能看，还好用</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "轻松上手",
              "heading": "轻松上手"
            },
            {
              "depth": 2,
              "value": "谁在使用",
              "heading": "谁在使用"
            },
            {
              "depth": 2,
              "value": "反馈与共建",
              "heading": "反馈与共建"
            }
          ]
        },
        "title": "首页介绍"
      },
      {
        "path": "/base-components/alert",
        "component": require('../../../docs/base-components/alert.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base-components/alert.md",
          "updatedTime": null,
          "group": {
            "title": "基础组件",
            "order": 20,
            "path": "/base-components"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 按钮",
              "heading": "alert-按钮"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Alert 按钮"
        },
        "title": "Alert 按钮"
      },
      {
        "path": "/base-components/button",
        "component": require('../../../docs/base-components/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base-components/button.md",
          "updatedTime": null,
          "group": {
            "title": "组件",
            "path": "/base-components"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮"
        },
        "title": "Button 按钮"
      },
      {
        "path": "/base-components/button222",
        "component": require('../../../docs/base-components/button222.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/base-components/button222.md",
          "updatedTime": null,
          "group": {
            "title": "基础组件",
            "path": "/base-components"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮222",
              "heading": "button-按钮222"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮222"
        },
        "title": "Button 按钮222"
      },
      {
        "path": "/test/test1",
        "component": require('../../../docs/test/test1.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/test/test1.md",
          "updatedTime": null,
          "group": {
            "title": "表单组件",
            "path": "/test"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "表单组件111",
              "heading": "表单组件111"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "表单组件111"
        },
        "title": "表单组件111"
      },
      {
        "path": "/test/test2",
        "component": require('../../../docs/test/test2.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/test/test2.md",
          "updatedTime": null,
          "group": {
            "title": "表单组件",
            "order": 30,
            "path": "/test"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "表单组件222",
              "heading": "表单组件222"
            },
            {
              "depth": 2,
              "value": "Demo:",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "表单组件222"
        },
        "title": "表单组件222"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/alert"
      },
      {
        "path": "/base-components",
        "meta": {
          "order": 20
        },
        "exact": true,
        "redirect": "/base-components/alert"
      },
      {
        "path": "/test",
        "meta": {},
        "exact": true,
        "redirect": "/test/test1"
      }
    ],
    "title": "UI组件库"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
