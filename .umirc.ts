import { defineConfig } from 'dumi';

export default defineConfig({
    mode: 'site',
    title: 'UI组件库',
    styles: [`.__dumi-default-layout-footer-meta{ display:none!important; }`],
    alias: {
        '@components': '/components',
    },
    menus: {
        '/components': [
            {
                title: '组件',
                children: ['components/button'],
            },
        ],
    },
    // more config: https://d.umijs.org/config
});
