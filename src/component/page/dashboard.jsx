import React from "react";
import "./css/dashboard.css";
import {Card} from "../reusable/Card";

const Dashboard = () =>{
    return (
    <div className="dashboards-page-holder">
        <section className="dashboard-leftSection">
            <div><Card><h3 className="cardHeader">Purchase Overview</h3></Card></div>
            <div><Card><h3 className="cardHeader">Purchase & Use</h3></Card></div>
            <div><Card><h3 className="cardHeader">Most Purchased Stock</h3></Card></div>
        </section>
        <section className="dashboard-rightSection">
            <div><Card><h3 className="cardHeader">Inventory Summary</h3></Card></div>
            <div><Card><h3 className="cardHeader">Product Summary</h3></Card></div>
            <div><Card><h3 className="cardHeader">Order Summary</h3></Card></div>
            <div><Card><h3 className="cardHeader">Low Quality Stock</h3></Card></div>
        </section>
    </div>);
}

export default Dashboard;