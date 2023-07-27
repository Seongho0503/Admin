import React from "react";
import "./home.css";
import FeatureInfo from "../components/featureInfo/FeatureInfo";
import TradeChart from "../components/chart/TradeChart/TradeChart";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <TradeChart />
    </div>
  );
}
