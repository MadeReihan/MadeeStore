import React from 'react'
import Link from 'next/link';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';

interface TabelRow{
    image:string;
    title: string;
    category: string;
    item:string;
    price: number;
    status: string
    id:string
}
export default function TableRow(props : TabelRow) {
    const{image,title,category,item,price,status,id} = props;
    const statusclass = classNames({
        'float-start icon-status':true,
        'float-start icon-status success': status === 'Success',
        'float-start icon-status failed': status === 'Failed',
        'float-start icon-status pending': status === 'Pending',

    });
    const datcat = classNames({
        'Pending': status == 'pending',
        'Failed': status == 'failed',
        'Success': status == 'success',
    });
    return (
        <tr data-category={datcat} className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={image}
                    width="80" height="60" alt=""/>
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium color-palette-1 m-0"><NumberFormat value={price} prefix='Rp. ' displayType='text' thousandSeparator='.' decimalSeparator=','/></p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${status}`}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {datcat}</p>
                </div>
            </td>
            <td>
                <Link href={`/member/transaction/${id}`}>
                    <a
                        className="btn btn-status rounded-pill text-sm">Details</a>
                </Link>
            </td>
            
        </tr>
    )
}
