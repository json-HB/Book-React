import {Router} from "react-router";

module.exports = {
	path:"wanben",
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./main").default)
		})
	}
}