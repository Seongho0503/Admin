import React from "react";
import "./FeatureInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeatureInfo() {
  return (
    <div className="feature">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowDownwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowDownwardIcon className="featureIcon down" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">compared to last month</span>
      </div>
    </div>
  );
}
