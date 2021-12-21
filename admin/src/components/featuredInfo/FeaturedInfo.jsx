import React, { useEffect, useState }  from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    

    useEffect(() => {
        const getIncome = async () => {
          try {
            const res = await userRequest.get("orders/income");
            const list = res.data.sort((a, b) => (
                a._id - b._id
            ))
              setIncome(list)
              setPercentage(res.data[1].total * 100 / res.data[0].total)
          } catch {}
        };
        getIncome();
      }, []);

    
    
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featTitle">Revenue</span>
                <div className="featMoneyContainer">
                    <span className="featMoney">{income[1]?.total}</span>
                    <span className="featMoneyRate">{Math.floor(percentage)}%
                    {percentage < 0 ? <ArrowDownward className="featIcon negative" /> : <ArrowUpward className="featIcon" />}
                    </span>
                </div>
                <span className="featSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featTitle">Sales</span>
                <div className="featMoneyContainer">
                    <span className="featMoney">$4,444</span>
                    <span className="featMoneyRate">-1.4 <ArrowDownward className="featIcon negative" /></span>
                </div>
                <span className="featSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featTitle">Cost</span>
                <div className="featMoneyContainer">
                    <span className="featMoney">$2,444</span>
                    <span className="featMoneyRate">+2.4 <ArrowUpward className="featIcon" /></span>
                </div>
                <span className="featSub">Compared to last month</span>
            </div>
            
        </div>
    )
}
