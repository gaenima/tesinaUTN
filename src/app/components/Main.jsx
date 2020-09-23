import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectLogin } from './Login';
import { ConnectedBudget } from "./BudgetList";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedTaskList } from "./TaskList";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";
import { ConnectExpensDetail } from './ExpensDetail';
import { ConnectBudgetD } from './BudgetD';
import { Reports } from './Reports';
import { Redirect } from 'react-router-dom';

const RouteGuard = Component => ({match}) => {
  //console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
       return <Redirect to='/' />
  } {
    return <Component match={match} />
  }
 
}

 export const Main = () => (
    <Router history={history}>
     <Provider store={store}>
           <div>
          
                  <ConnectedNavigation/> 
                <Route exact path="/" component={ConnectLogin}/>
                <Route 
                exact 
                path="/dashboard"
                render = {RouteGuard(ConnectedDashboard)}
                //render={()=>(<ConnectedDashboard/>)}
                />
                  <Route 
                exact 
                path="/budgetList"
                render = {RouteGuard(ConnectedBudget)}
                //render={()=>(<ConnectedBudget/>)}
                />
                <Route
                    exact
                    path="/task/:id"
                    render = {RouteGuard(ConnectTaskDetail)}
                   // render={({match})=>(<ConnectTaskDetail match={match}/>)}
                    />
                    <Route
                    exact
                    path="/expens/:id"
                    render = {RouteGuard(ConnectExpensDetail)}
                    //render={({match})=>(<ConnectExpensDetail match={match}/>)}
                    />
                      <Route
                    exact
                    path="/budgetD/:id"
                    render = {RouteGuard(ConnectBudgetD)}
                    
                    />
                     <Route 
                exact 
                path="/reports"
                render = {RouteGuard(Reports)}
                //render={()=>(<ConnectedReports/>)}
                />
                </div>
        </Provider>
        </Router>
 )

