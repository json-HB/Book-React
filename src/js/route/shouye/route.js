import {Router} from "react-router";

module.exports = {
	path:"shouye",
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./main").default)
		})
	}
}