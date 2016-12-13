import {Router} from "react-router";

module.exports = {
	path:"/",
	getChildRoutes (location,callback) {
		require.ensure([],(require) => {
			callback(null, [
				require("./shouye/route"),
				require("./fenlei/route"),
				require("./wanben/route"),
				require("./free/route"),
				require("./paihang/route"),
				])
		})
	},
	getComponent (location,cb) {
		require.ensure([],(require) => {
			cb(null,require("./index").default)
		})
	},
	getIndexRoute (location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./shouye/route'))
    })
  }
}
