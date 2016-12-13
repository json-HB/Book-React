import {render} from "react-dom";
import React from "react";
import {Router, hashHistory} from "react-router";
render(<Router history={hashHistory} routes={require("./route")}/>, document.getElementById('app'));

