import React, { useEffect, useState }  from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featTitle">Revenue</span>
                <div className="featMoneyContainer">
                    <span className="featMoney">income</span>
                    <span className="featMoneyRate">10%</span>
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
