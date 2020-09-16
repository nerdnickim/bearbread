import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import PrdList from "../Routes/PrdList";
import PrdDetail from "../Routes/PrdDetail";

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/prdList" component={PrdList} />
			<Route path="/:id" component={PrdDetail} />
		</Switch>
	</Router>
);

export default Routes;
