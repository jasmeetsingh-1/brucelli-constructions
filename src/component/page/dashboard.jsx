import React from "react";
import "./css/dashboard.css";
import Card from "../reusable/Card";

const Dashboard = () =>{
    return (
    <div className="dashboards-page-holder">
        <section className="dashboard-leftSection">
            <div><Card><div className="cardHeader">Purchase Overview</div></Card></div>
            <div><Card><div className="cardHeader">Purchase & Use</div></Card></div>
            <div><Card><div className="cardHeader">Most Purchased Stock</div></Card></div>
        </section>
        <section className="dashboard-rightSection">
            <div><Card><div className="cardHeader">Inventory Summary</div></Card></div>
            <div><Card><div className="cardHeader">Product Summary</div></Card></div>
            <div><Card><div className="cardHeader">Order Summary</div></Card></div>
            <div><Card><div className="cardHeader">Low Quality Stock</div></Card></div>
        </section>
    </div>);
}

export default Dashboard;