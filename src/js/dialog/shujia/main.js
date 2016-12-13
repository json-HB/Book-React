import React, {Component} from "react";
import "./style";
import { NavBar, Icon } from 'antd-mobile';

class Shujia extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		$(".anticon-ellipsis").click(() => {
			console.log("111")
		})
	}
	shujiaBack() {
		$(".contain-shujia").css({marginLeft:"100%"});
	}

	render() {
		return  (
		<div className="contain-shujia">
			 <NavBar leftContent="返回" mode="light" onLeftClick={this.shujiaBack.bind(this)}
      rightContent={[<Icon key="1" type="ellipsis" />]}
    >我的书架</NavBar>
    	<div className="speedLogin">
    		<span>登录&nbsp;|&nbsp;</span>
    		<span>注册&nbsp;|&nbsp;</span>
    		<span>QQ登录</span>
    	</div>
    	<p className="shuoming">
    		登录后阅读记录不丢失，手机电脑同步看
    	</p>
    	<div className="tapTwo">
    		<ul className="nav nav-tabs" role="tablist">
		  <li role="presentation" className="active"><a href="#home" role="tab" data-toggle="tab">Home</a></li>
		  <li role="presentation"><a href="#profile" role="tab" data-toggle="tab">Profile</a></li>
		 
		</ul>
	<div className="tab-content">
	  <div role="tabpanel" className="tab-pane active" id="home">没有阅读记录</div>
	  <div role="tabpanel" className="tab-pane" id="profile">登录后收藏才会显示</div>
	 
	</div>
    	</div>
		</div>
			)
	}
}
export default Shujia;