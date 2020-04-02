import { ApplyPluginsType } from 'D:/library/demo1/node_modules/_@umijs_runtime@3.0.16@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('D:/library/demo1/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"组件","children":[{"path":"/components/button","title":"Button 按钮"}]}],"/babel-plugin-import":[{"path":"/babel-plugin-import","title":"babel-plugin-import","meta":{}}],"/examples":[{"path":"/examples","title":"文档示例","meta":{}}],"*":[{"path":"/","title":"dumi - 基于 Umi、为组件开发场景而生的文档工具","meta":{"order":10}}]}},"locales":[],"navs":{"*":[{"path":"/components","title":"组件","order":1},{"order":3,"title":"渲染示例","path":"/examples"},{"path":"/babel-plugin-import","title":"Babel-plugin-import"}]},"title":"UI组件库","mode":"site","repoUrl":".git"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/button",
        "component": require('../../components/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/button/index.md",
          "updatedTime": null,
          "title": "Button 按钮",
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
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "title": "Button",
            "path": "/components/button"
          }
        },
        "title": "Button 按钮"
      },
      {
        "path": "/babel-plugin-import",
        "component": require('../../../docs/babel-plugin-import.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/babel-plugin-import.md",
          "updatedTime": null,
          "title": "babel-plugin-import",
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
          ],
          "nav": {
            "path": "/babel-plugin-import",
            "title": "Babel-plugin-import"
          }
        },
        "title": "babel-plugin-import"
      },
      {
        "path": "/examples",
        "component": require('../../../docs/examples.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples.md",
          "updatedTime": null,
          "title": "文档示例",
          "legacy": "/example",
          "nav": {
            "order": 3,
            "title": "渲染示例",
            "path": "/examples"
          },
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "文档示例",
              "heading": "文档示例"
            },
            {
              "depth": 2,
              "value": "Demo 嵌入",
              "heading": "demo-嵌入"
            },
            {
              "depth": 1,
              "value": "一级标题",
              "heading": "一级标题"
            },
            {
              "depth": 2,
              "value": "二级标题",
              "heading": "二级标题"
            },
            {
              "depth": 3,
              "value": "三级标题",
              "heading": "三级标题"
            },
            {
              "depth": 4,
              "value": "四级标题",
              "heading": "四级标题"
            },
            {
              "depth": 5,
              "value": "五级标题",
              "heading": "五级标题"
            },
            {
              "depth": 2,
              "value": "水平线",
              "heading": "水平线"
            },
            {
              "depth": 2,
              "value": "强调样式",
              "heading": "强调样式"
            },
            {
              "depth": 2,
              "value": "引用",
              "heading": "引用"
            },
            {
              "depth": 2,
              "value": "列表",
              "heading": "列表"
            },
            {
              "depth": 2,
              "value": "代码",
              "heading": "代码"
            },
            {
              "depth": 2,
              "value": "表格",
              "heading": "表格"
            },
            {
              "depth": 2,
              "value": "超链接",
              "heading": "超链接"
            }
          ]
        },
        "title": "文档示例"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585659255000,
          "title": "dumi - 基于 Umi、为组件开发场景而生的文档工具",
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
        "title": "dumi - 基于 Umi、为组件开发场景而生的文档工具"
      },
      {
        "path": "/components",
        "component": require('../../../docs/components/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/index.md",
          "updatedTime": null,
          "title": "组件",
          "nav": {
            "order": 1,
            "title": "组件",
            "path": "/components"
          },
          "toc": "menu",
          "slugs": []
        },
        "title": "组件"
      },
      {
        "path": "/example",
        "exact": true,
        "redirect": "/examples"
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
