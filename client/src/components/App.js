import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';        // BrowserRouter defines how router should behave, Route sets rules between two destinations in an app
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


// refactored to class based component
class App extends Component {
    
    // lifecycle method to fetch current user
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {  // first, establishing routes with components
            return (
                <div className="container">
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route exact path="/" component={Landing} />         
                            <Route exact path="/surveys" component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                        </div> 
                    </BrowserRouter>
                </div>
            );
    };
};

export default connect(null, actions)(App);