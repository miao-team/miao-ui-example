import { ComponentClass } from "react";

import { MProps, MState } from './types'

export interface IProps extends MProps {
    title?: string;
}

export interface IState extends MState {
    title?: string;
}

declare const IExmaple: ComponentClass<IProps>;

export default IExmaple;
