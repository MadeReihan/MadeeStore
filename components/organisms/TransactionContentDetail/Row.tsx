import React from 'react';
import NumberFormat from 'react-number-format';

interface RowProps{
    label: string;
    value:string|number;
    classnames?:string;
}
export default function Row(props:RowProps) {
    const{label,value, classnames=''} = props;
    return (
        <p className="text-lg color-palette-1 mb-20">{label} <span
        className={`purchase-details ${classnames}`}>
            {typeof value === 'number' ?(
                <NumberFormat value={value} prefix='Rp. ' displayType='text' thousandSeparator='.' decimalSeparator=','/>
            ):(
                value
            )}
            </span></p>
    )
}
