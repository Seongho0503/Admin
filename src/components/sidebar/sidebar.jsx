import React from "react";
import "./SideBar.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeWorkIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Analystics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeWorkIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Analystics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeWorkIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Analystics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
