import React, {Component} from "react";
import { Link } from "react-router";
import "./style.less";
import classNames from "../until/classNames";
import {autobind} from "core-decorators";
import Shujia from "../dialog/shujia/main";
import Login from "../dialog/login/main";
import Search from "../dialog/search/main";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
	}

	@autobind
	shujia() {
		$(".contain-shujia").css({marginLeft: "0%"});
	}

	@autobind
	login() {
	$(".contain-login").css({marginLeft: "0%"})
	}

	@autobind
	search() {
	$(".contain-search").css({marginLeft: "0%"})
	}

	render () {
	let path = this.props.routes[1].path;
		return (
		<div>
		<Shujia />
		<Search />
		<Login />
		<header>
			<h1 className="logo">
				<img src="http://m.xxsy.net/NewCss/image/logo_h.png?v=20160222" />
			</h1>
			<div className="shujia" onClick={this.shujia}>
				<i className="iconfont icon-books"></i>
			</div>
			<div className="login" onClick={this.login}>
				<i className="iconfont icon-login"></i>
			</div>
			<div className="search" onClick={this.search}>
				<i className="iconfont icon-search"></i>
			</div>
		</header>
		<ul className="nav nav-pills" role="tablist">
  <li role="presentation" className={classNames({active: path == "shouye"})}><Link to="shouye">首页</Link></li>
  <li role="presentation" className={classNames({active: path == "fenlei"})}><Link to="fenlei">分类</Link></li>
  <li role="presentation" className={classNames({active: path == "paihang"})}><Link to="paihang">排行</Link></li>
 <li role="presentation" className={classNames({active: path == "wanben"})}><Link to="wanben">完本</Link></li>
  <li role="presentation" className={classNames({active: path == "free"})}><Link to="free">免费</Link></li>
</ul>
{this.props.children || "error"}
		</div>
		) 
	}
}
export default ModuleDefault;