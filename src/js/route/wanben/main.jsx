import React, {Component} from "react";
import wanben from "../../data/wanben";
import BookInfo from "../../vender/bookInfo/index";
import "./style";
import {autobind} from "core-decorators";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
		this.lock = true;
		this.state = {
		data: wanben.bookInfo
		}
	}
	componentDidMount() {
		let me = this;
		$(window).scroll(function () {
		if($(window).scrollTop() > 1000) {
		$(".backTop").removeClass("hide");
		}
		if($(window).scrollTop()/($("#app").height() - $(window).height()) > 0.7 && me.lock) {
			me.lock = false;
			setTimeout(function() {
			me.lock = true;
			me.setState({
			data: me.state.data.concat(wanben.bookInfo)
			})
			},1000)
		}
		})

	}
	@autobind 
	top() {
	$(".backTop").addClass("hide");
	$(window).scrollTop(0);
	}

	render () {
	let data = this.state.data;
		return (
		<div>
			<BookInfo data={data} />
			<div className="backTop hide" onClick={this.top}>
			<button><i className="fa fa-angle-double-up" aria-hidden="true"></i></button>		
			</div>
		</div>
		) 
	}
}
export default ModuleDefault;