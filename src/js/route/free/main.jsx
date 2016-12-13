import React, {Component} from "react";
import BookList from "../../vender/booklist/index";
import free from "../../data/free";
import classNames from "../../until/classNames";
import "./style";
import {autobind} from "core-decorators";


class ModuleDefault extends Component {
	constructor (props) {
		super(props);
		this.state = {
		type: "one"
		}
		
	}
	@autobind
	changeData(ev) {
		let type = $(ev.target).data("id");
		this.setState({
		type: type
		})
	}
	render () {
	
		let bookList = free.bookList;
		let tejia = free.tejia;
		return (
		<div>
			<BookList data={bookList} />
			<div className="tejia">
				<div className="header">
					<h3>特价单本</h3>
					<span>更多<i className="fa fa-chevron-right" aria-hidden="true"></i></span>
				</div>
			</div>
			<div className="radioList" onClick={this.changeData}>
				<div className="row">
					<div className="col-xs-4">
						<button data-id="one" className="btn btn-default btn-block">1元</button>
					</div>
					<div className="col-xs-4">
						<button data-id="two" className="btn btn-default btn-block">2元</button>
					</div>
					<div className="col-xs-4">
						<button data-id="three" className="btn btn-default btn-block">3元</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<button data-id="four" className="btn btn-default btn-block">4元</button>
					</div>
					<div className="col-xs-4">
						<button data-id="five" className="btn btn-default btn-block">5~6元</button>
					</div>
					<div className="col-xs-4">
						<button data-id="six" className="btn btn-default btn-block">7~8元</button>
					</div>
				</div>
			</div>
			<ul className="choose">
			{(() => {
				if(tejia) {
				return (
				tejia[this.state.type].map((val, index) => {
			
				return (
					<div key={index}>
				<li className="row">
					<div className="col-xs-2">
						<span className={classNames({"badge": true, "yineng": val.badge == "穿越","doushi": val.badge == "都市","jiakong": val.badge == "架空","xuanhuan": val.badge == "玄幻"})}>{val.badge}</span>
					</div>
					<div className="col-xs-6">{val.bookName}</div>
					<div className="col-xs-3">{val.autor}</div>
				</li>
				
				</div>
					)
				})
				)
				}
			})()}
				
			</ul>
		</div>
		) 
	}
}
export default ModuleDefault;