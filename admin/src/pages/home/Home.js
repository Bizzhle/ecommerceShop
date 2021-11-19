import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummydata";
import WidgetBig from "../../components/widgetBig/WidgetBig";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        datakey="Active user"
      />
      <div className="homeWidgets">
        <WidgetSm />

        <WidgetBig />
      </div>
    </div>
  );
}
