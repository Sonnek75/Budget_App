import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas, dateFormat } from '../utils/format';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const date = dateFormat(transaction.createdAt);

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {date}<span>{transaction.text}</span><span>{sign}${numberWithCommas(Math.abs((transaction.amount)))}</span>
            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
