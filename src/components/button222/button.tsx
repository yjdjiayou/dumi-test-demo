/**
 * @author：yjd
 * @description：UI组件—基础组件
 * @date：2020/3/31
 */
import React from 'react';
import classnames from 'classnames';

/**
 * 按钮类型
 */
type ButtonTypes = 'primary' | 'dashed' | 'warning' | 'danger' | 'link';
/**
 * 按钮形状
 */
type ButtonShapes = 'circle' | 'radius' | 'round';

export interface ButtonProps {
    type?: ButtonTypes;
    shape?: ButtonShapes;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

function Button(props: ButtonProps) {
    const { children, className, type, shape, onClick } = props;
    const classes = classnames('xButton', 'ripple', type, shape, className);
    return <div className={classes}>{children}</div>;
}

export default Button;
