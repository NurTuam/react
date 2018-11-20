import React ,{Component} from "react";
//import {connect} from "react-redux";
//import {addGun,removeGun,addGunSync} from "./reducer";  //引进方法
//import {Button,WingBlank,WhiteSpace} from 'antd-mobile';  // 加载 JS
//import 'antd-mobile/lib/Button/style/css';        // 加载 CSS
//import 'antd-mobile/dist/antd-mobile.css'
//import 'antd-mobile/lib/WhiteSpace/style/css';        // 加载 CSS

//@connect(
//  (state)=>{
//      return {
//          num:state
//      }
//  },
//  {
//      addGun,removeGun,addGunSync
//  }
//)
//class App extends Component{
////	constructor(){
////		super();
////		this.state={
////			a:1
////		}
////	}
//  render(){
//// 		const store=this.props.store;
////		const num=store.getState();
////		const addGun=this.props.addGun;
////		const addGunSync=this.props.addGunSync;
////		const removeGun=this.props.removeGun;
//      return(
//          <div>
//             <WingBlank>
//              <h1>现在有机关枪{this.props.num}把</h1>
//              <WhiteSpace></WhiteSpace>
//              <Button type="primary" onClick={()=>{this.props.addGun()}}>加机关枪</Button>
//              <Button type="warning" onClick={this.props.removeGun}>减机关枪</Button>  
//             </WingBlank>
//          </div>   
//      )
//  }
//}
//
//
////()=>调用这个方法
//
////const mapStateToProps=(state)=>{
////	return{
////		num:state
////	}
////}
////当父的属性传进去
////const actionCreators={
////	addGun,
////	removeGun,
////	addGunSync
////}
////App=connect(mapStateToProps,actionCreators)(App)   //mapStateToProps要写在前面  动作写在后面
//export default App;

import "../node_modules/todomvc-common/base.css"
import "../node_modules/todomvc-app-css/index.css"
import "../node_modules/todomvc-common/base.js"
import {add} from "./index"

class App extends Component{
	render(){
		return(
			<section class="todoapp">
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox"/>
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li class="completed">
						<div class="view">
							<input class="toggle" type="checkbox"/>
							<label>Taste JavaScript</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template"/>
					</li>
					<li>
						<div class="view">
							<input class="toggle" type="checkbox"/>
							<label>Buy a unicorn</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Rule the web"/>
					</li>
				</ul>
			</section>
			<footer class="footer">
				<span class="todo-count"><strong>0</strong> item left</span>
				<ul class="filters">
					<li>
						<a class="selected" href=" ">All</ a>
					</li>
					<li>
						< a href="#/active">Active</ a>
					</li>
					<li>
						< a href="#/completed">Completed</ a>
					</li>
				</ul>
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>
		)
		
	}
}

export default App;