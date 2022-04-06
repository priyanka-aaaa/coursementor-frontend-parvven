import React from 'react';
import { Route, Switch } from "react-router-dom";
import routes from "./agent/AgentRoutes.js";
import Sidebar from "./agent/Sidebar";
import Topbar from "./agent/Topbar";

function AgentLogout(props) {
    const getRoutes = (routes) => {


        return routes.map((prop, key) => {
            if (prop.layout === "/agent") {
                return (

                    <Route

                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <Switch>{getRoutes(routes)}</Switch>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default AgentLogout;