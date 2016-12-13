import {Router} from "react-router";

module.exports = {
	path:"changxiao",
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./main").default)
		})
	}
}