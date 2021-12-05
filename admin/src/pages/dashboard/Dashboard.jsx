import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidemenu from '../../components/sidemenu/Sidemenu';
import TopBar from '../../components/topbar/TopBar';


const Dashboard = () => {
    return (
        <Router>
            <Switch>
            <TopBar />
            <div className="container">
                <Sidemenu />
s
            </div>
            </Switch>
            
            
        </Router>
    );
}

export default Dashboard;
