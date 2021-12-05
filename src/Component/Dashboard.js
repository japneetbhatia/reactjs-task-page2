import React from 'react'
import "./Dashboard.css";
import HeaderButton from './headerButton.js';
import Filterform from './filterform.js';
import Table from "./ListTable"

function Dashboard() {
    return (
        <div className="container">
            <div className="modal">
                <div className="header">
                    <HeaderButton title="Payments" />
                    <HeaderButton title="Refunds" selected="true" />
                    <HeaderButton title="Orders" />
                </div>
                <div className="filter">
                    <Filterform />
                </div>
                <div className="table">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
