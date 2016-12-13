import React, {Component} from "react";
import "./style";
import classNames from "../../until/classNames";

class Booklist extends Component {
     constructor (props) {
     super(props);
     this.state={
     data: this.props.data
     }
     }
     render() {
     let data = this.state.data;
     return (
     <div className="booksList">
               
               {(() => {
               if(data) {
               return (
      <div>
               <div className="headerTitle">
                    <h3>{data[0].title}</h3>
                    <span>更多<i className="glyphicon glyphicon-chevron-right"></i></span>
               </div>
               <div className="listFirst">
                    <img src={data[0].url} />
                    <div className="detail">
                         <h3>{data[0].bookTitle}</h3>
                         <p><span className={classNames({"badge": true, "yineng": data[0].badge == "异能",
                         "doushi": data[0].badge == "都市",
                         "jiakong": data[0].badge == "架空",
                         "xuanhuan": data[0].badge == "玄幻",
                         "xiaoyuan": data[0].badge == "校园"})}>{data[0].badge}</span><i>{data[0].autor}</i></p>
                         <p>{data[0].book_info}</p>
                    </div>
               </div>
               </div>
               )
               }
       
               })()
               }
               
               <div className="line"></div>
               <ul>
               {(() => {
               if(data) {
                    return (
                         data.slice(1).map((val, i) => {
                         return (<li key={i}><a href="#">
                         <div className="row">
                              <div className="col-xs-2">
                              <span className={classNames({"badge": true, "yineng": val.badge == "异能",
                         "doushi": val.badge == "都市",
                         "jiakong": val.badge == "架空",
                         "xuanhuan": val.badge == "玄幻",
                         "xiaoyuan": val.badge == "校园"})}>{val.badge}</span>
                              </div>
                              <div className="col-xs-6">{val.bookName}</div>
                              <div className="col-xs-4">{val.autor}</div>
                         </div>
                    </a></li>)
                         })
                    )
               }
               })()}     
               </ul>
          </div>
     )
     }
}
export default Booklist;

