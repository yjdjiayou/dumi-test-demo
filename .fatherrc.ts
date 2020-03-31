// https://github.com/umijs/father/tree/2.x

export default {
    // 指定入口文件:
    entry: 'src/components/index', // 字符串/字符串数组，默认值为 src/index.js

    esm: {
        // rollup 模式：以 entry 为单位，将相关依赖打包输出为一个文件
        // babel 模式：把 src 目录下的所有文件转化成 lib（cjs） 或 es（esm）
        type: 'babel',
        // file:'test',// 指定输出的文件名，最终为 xxx.esm.js ，注意只有为 rollup 模式才生效
    },
    // cjs: 'babel', // 通常用于 node 环境、SSR、测试环境中使用
    // umd: true,
    // umd: {
    //     globals: {
    //         react: 'React',
    //     },
    //     // 配置引用 umd 库的全局变量名，如：jquery 的全局变量名为 $
    //     name: 'YUI',
    //     // 是否生成压缩过后的代码(xxx.umd.min.js)
    //     // minFile:false,
    //     // 是否同步输出sourcemap
    //     sourcemap: true,
    // },

    // 是否把 helper 方法提取到 @babel/runtime 里，推荐开启，能节约不少尺寸
    // 配置了 runtimeHelpers，一定要在 dependencies 里有 @babel/runtime 依赖
    // runtimeHelpers 只对 esm 有效，cjs 下无效，因为 cjs 已经不给浏览器用了，只在 ssr 时会用到，无需关心小的尺寸差异
    runtimeHelpers: true,

    // 默认是 .module.css 走 css modules，.css 不走 css modules。
    // 配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
    // cssModules:true,
    // 是否提取 css 为单独文件（不把 css 也打进最终产出的 bundle 中）
    extractCSS: true,
    // 在 rollup 模式下做 less 编译
    // lessInRollupMode:true,
    // 在 babel 模式下做 less 编译，基于 gulp-less
    // lessInBabelMode:true,
    // autoprefixer:{},//https://github.com/postcss/autoprefixer#options

    // 配置额外的 babel preset
    // extraBabelPresets:[],
    // 配置额外的 babel plugin
    extraBabelPlugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
                // style: 'css',
            },
        ],
    ],
};

// 注意：
// 关于 dependencies、peerDependencies 和 external
// cjs 和 esm 格式打包方式选 rollup 时有个约定，dependencies 和 peerDependencies 里的内容会被 external
// esm.mjs 和 umd 格式，只有 peerDenendencies 会被 external
// 打包方式为 babel 时无需考虑 external，因为是文件到文件的编译，不处理文件合并
