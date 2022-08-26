import React from 'react'
import Label, { LabelProps } from './Label';
import Switch, { SwitchProps } from './Switch';

type HeaderProps = LabelProps & SwitchProps;

export default function Header(props: HeaderProps) {
    return (
        <div className='justify-between flex mt-[45px]'>
            <Label name={props.name} count={props.count} />
            <Switch onLeftArrowClick={props.onLeftArrowClick} onRightArrowClick={props.onRightArrowClick} />
        </div>
    )
}
