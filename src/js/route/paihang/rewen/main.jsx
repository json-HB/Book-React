import React, {Component} from "react";
import "./style";
import wanben from "../../../data/wanben";
import BookInfo from "../../../vender/bookInfo/index";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
	}
	render () {
	let data = wanben.bookInfo;
		return (
		<div>
			<BookInfo data={data} />
		</div>
		) 
	}
}
export default ModuleDefault;