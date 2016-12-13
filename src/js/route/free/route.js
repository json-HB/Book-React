import {Router} from "react-router";

module.exports = {
	path:"free",
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./main").default)
		})
	}
}