import "./style.less";
import React, {Component} from "react";
import classNames from "../../until/classNames";

class BookInfo extends Component {
	constructor(props) {
	super(props);
	}
	render() {
	let data = this.props.data.sort(() => {
		return Math.random() - 0.5;
	});
	return (
	<div className="container">
			<ul>
			{(() => {
			if(data) {
				return (
				data.map((val, key) => {
				return (
					<li className="list" key={key}>
						<a href="#">
							<img src={val.url} />
							<ul>
								<li>
									<p>
										<span>{val.bookName}</span>
										<span className="badge">{val.badge}</span>
									</p>
								</li>
								<li>
									<p>
										<span>{val.autor}</span>
										<span><i className="fa fa-share-alt-square"></i>{val.eyes}</span>
										<span><i className="fa fa-eye "></i>{val.share}</span>
									</p>
								</li>
								<li>
									<p>
										{val.content}
									</p>
								</li>
							</ul>
						</a>
					</li>
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
export default BookInfo;
