import React, {Component} from "react";
import "./style";
import { NavBar, Icon } from 'antd-mobile';

class Login extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
	}
	shujiaBack() {
		$(".contain-login").css({marginLeft:"100%"});
	}
	render() {
		return  (
		<div className="contain-login">
			 <NavBar leftContent="返回" mode="light" onLeftClick={this.shujiaBack.bind(this)}
      rightContent={[<Icon key="1" type="ellipsis" />]}>登录</NavBar>
		<form className="form-horizontal" role="form">
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span></div>
      <input className="form-control" type="email" placeholder="手机号/邮箱/用户名" />
    </div>
   </div>
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-addon"><span className="glyphicon glyphicon-briefcase"></span></div>
      <input className="form-control" type="password" placeholder="密码" />
      <div className="input-group-addon"><span className="glyphicon glyphicon-eye-open"></span></div>
    </div>
   </div>
  <div className="checkbox">
    <label>
      <input type="checkbox" /> <i>自动登录</i>
    </label>
    <span><a>忘记密码？</a></span>
  </div>
  <button type="submit" className="btn btn-primary btn-block btn-lg">登录</button>
	</form>
	<p className="zhuce"><span>没有潇湘账号？</span> <a href="#">立即注册</a></p>
	<div className="hezuo">
		<p>使用合作账号登录</p>
		<p>
			<a href="#"></a>
		</p>
	</div>
</div>
			)
	}
}
export default Login;