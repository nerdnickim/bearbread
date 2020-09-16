import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import PrdList from "../Routes/PrdList";
import PrdDetail from "../Routes/PrdDetail";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/prdList" component={PrdList} />
			<Route path="/prdList/prdDetail" component={PrdDetail} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
