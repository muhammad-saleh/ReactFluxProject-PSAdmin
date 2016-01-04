"use strict";
console.log('inside app.js');
var React = require('react');
var Header = require('./common/header');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = Router.DefaultRoute;
var routes = require('../routes')

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );

    }
});

module.exports = App;
