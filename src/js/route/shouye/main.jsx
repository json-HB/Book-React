import React, {Component} from "react";
import { SearchBar, Button,Badge, WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile';
import "./style.less";
import shouye from "../../data/shouye";
import Booklist from "../../vender/booklist/index";

class ModuleDefault extends Component {
	constructor (props) {
		super(props);
	}
	render () {
	const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      selectedIndex: 1
    };
    let data = shouye;
		return (
		<div>
			<div className="searchheader">
				<SearchBar placeholder="搜索" />
			</div>
			<WingBlank>
            <Carousel {...settings}>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
               <img className="img-responsive" src="http://images.xxsy.net/mxxsynet/20151209/750785.jpg?v=1" />
              </Flex>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
              <img className="img-responsive" src="http://images.xxsy.net/mxxsynet/20151209/571389.jpg?v=1" />
              </Flex>
       
            </Carousel>
          </WingBlank>

        <Booklist data={data.xiaoxiangjngping} />
          <div className="jingcai">        	
          		<h3>精彩专区</h3>
          		<div className="twoImg row">
          			<div className="col-xs-6">
          				<a href="#">
          					<img className="img-responsive" src="http://m.xxsy.net/NewCss/image/jc_baoyue.png" />
          				</a>
          			</div>
          			<div className="col-xs-6">
          				<a href="#">
          					<img className="img-responsive"  src="http://m.xxsy.net/NewCss/image/videoori.png" />
          				</a>
          			</div>
          		</div>
          </div>
          <Booklist data={data.xinwensudi} />
          <Booklist data={data.hotFinal} />
          <Booklist data={data.renqijingxuan} />
          <Booklist data={data.editorPush} />
          <Booklist data={data.free} />
         
          <div className="footer">
          	<ul>
          		<li><a href="">3G版</a> |&nbsp;</li>
          		<li><a href="">客户端</a> |&nbsp;</li>
          		<li><a href="">在线咨询</a> |&nbsp; </li>
          		<li><a href="">意见反馈</a></li>
          	</ul>
          </div>
		</div>
		) 
	}
}
export default ModuleDefault;