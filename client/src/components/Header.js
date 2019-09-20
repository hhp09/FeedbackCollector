import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    // placing helper function to determine what to render inside Header, based on log in status 
    // use switch statements for different cases (null TBD, logged in, logged out)
    renderContent() {
        switch(this.props.auth) {   // default case assumes true
            case null:
                return 'Resolving query';
            
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login via Google</a>
                    </li>
                );
            
            default:
                return [
                    <li key="1">
                        <Payments />
                    </li>,
                    <li key='2'>
                        <a href="/api/logout">Log Out</a>
                    </li>
                ];
        }
    };

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to={this.props.auth ? '/surveys': '/'} className="left brand-logo">
                            Feedback Collector
                        </Link>
                        <ul className="right">  
                            {
                                this.renderContent()
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
// getting state of auth in header by hooking it up to redux store (calling it from /reducers/index)
function mapStateToProps({ auth }) {
    return{
        auth
    };
}
export default connect(mapStateToProps)(Header);