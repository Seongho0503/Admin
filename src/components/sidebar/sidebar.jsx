import React from "react";
import "./SideBar.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Routes, Route, Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem active">
                <HomeWorkIcon />
                Home
              </li>
            </Link>
            <Link to="/analystics">
              <li className="sidebarListItem">
                <TrendingUpIcon />
                Analystics
              </li>
            </Link>
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
