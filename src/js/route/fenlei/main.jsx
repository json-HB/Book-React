import React, {Component} from "react";
import "./style";
import fenlei from "../../data/bookinfo";
import BookInfo from "../../vender/bookInfo/index";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
	}
	render () {
	let data = fenlei.bookInfo;
		return (
		<div>
			<BookInfo data={data} />
		</div>
		) 
	}
}
export default ModuleDefault;