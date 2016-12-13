import React, {Component} from "react";
import "./style";
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import {autobind} from "core-decorators";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '美食'
		}
	}
	componentDidMount() {
		
	}
	@autobind
  onChange(value) {
    this.setState({ value });
  }
	shujiaBack() {
		$(".contain-search").css({marginLeft:"100%"});
	}
	render() {
		return  (
		<div className="contain-search">
			 <NavBar leftContent="返回" mode="light" onLeftClick={this.shujiaBack.bind(this)}
      rightContent={[<Icon key="1" type="ellipsis" />]}
    >搜索</NavBar>
    <SearchBar
        value={this.state.value}
        placeholder="搜索"
        showCancelButton
        onChange={this.onChange}
      />
      <div className="loading">
      	<i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
      </div>
		</div>
			)
	}
}
export default Search;