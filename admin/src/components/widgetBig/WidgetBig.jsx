import React, { useEffect, useState } from 'react';
import { publicRequest, userRequest } from '../../requestMethods';
import "./widgetbig.css";

export default function WidgetBig() {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const getOrders = async () => {
            try {
                 const res = await publicRequest.get("orders")
                 setOrders(res.data)
            } catch (err) {}
        }
        getOrders();
    }, [])


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
                    {orders && orders.map((order) => (
                    <tr className="widgetBigTr" key={order._id}>
                        <td className="widgetBigUser">
                            <span className="widgetBigName">{order.userId || "orderid"}</span>
                        </td>
                        <td className="widgetBigdate">11-12-2021</td>
                        <td className="widgetBigAmount">{order.amount}</td>
                        <td className="widgetBigStatus">
                            <Button type={order.status} />
                        </td>
                    </tr>
                    ))}
                    </tbody>
                
                
               
            </table>
        </div>
    )
}
