import React, { useEffect, useState } from 'react';
import "./widgetbig.css";

export default function WidgetBig() {

    const Button = ({ type }) => {
        return <button className={"widgetBigButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetBig">
            <h3 className="widgetBigTitle">Latest Transactions</h3>
            <table className="widgetBigtable">
                <tbody>
                <tr className="widgetBigTr">
                    <th className="widgetBigTh">Customer</th>
                    <th className="widgetBigTh">Date</th>
                    <th className="widgetBigTh">Amount</th>
                    <th className="widgetBigTh">Status</th>
                </tr>
                <tr className="widgetBigTr">
                    <td className="widgetBigUser">
                        <span className="widgetBigName">order-id</span>
                    </td>
                    <td className="widgetBigdate">11-12-2021</td>
                    <td className="widgetBigAmount">4000</td>
                    <td className="widgetBigStatus">
                        <Button type="approved" />
                    </td>
                </tr>
                </tbody>
               
            </table>
        </div>
    )
}
