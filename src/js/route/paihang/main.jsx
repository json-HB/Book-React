
import React, {Component} from "react";
import {Link} from "react-router";
import classNames from "../../until/classNames";
import "./style";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
	}
	render () {
	let path = this.props.routes[2].path;
		return (
		<div>
			<ul className="nav nav-pills" role="tablist">
			  <li role="presentation" className={classNames({active: path == "rewen"})}><Link to="/paihang/rewen">热文榜</Link></li>
			  <li role="presentation" className={classNames({active: path == "changxiao"})}><Link to="/paihang/changxiao">畅销榜</Link></li>
			  <li role="presentation" className={classNames({active: path == "zhuanshi"})}><Link to="/paihang/zhuanshi">钻石榜</Link></li>
			  <li role="presentation" className={classNames({active: path == "month"})}><Link to="/paihang/month">月票榜</Link></li>
			</ul>
			{this.props.children || "error"}
		</div>
		) 
	}
}
export default ModuleDefault;