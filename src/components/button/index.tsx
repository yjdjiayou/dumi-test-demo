// https://github.com/rollup/rollup/issues/3022
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export
export * from './button'; // does not set the default export
export { default } from './button';

// 以下两种写法会报错
// 1、
// import Button from './button';
// export { ButtonProps } from './button';
// export default Button;

// 2、
// export { ButtonProps, default as Button } from './Button';
