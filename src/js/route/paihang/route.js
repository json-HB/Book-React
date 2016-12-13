import {Router} from "react-router";

module.exports = {
	path:"paihang",
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./main").default)
		})
	},
	getChildRoutes (location,callback) {
		require.ensure([],(require) => {
			callback(null, [
				require("./rewen/route"),
				require("./changxiao/route"),
				require("./zhuanshi/route"),
				require("./month/route"),
				])
		})
	},
	getIndexRoute (location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./rewen/route'))
    })
  }
}