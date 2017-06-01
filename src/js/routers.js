/**
 * react-router 路由文件
 */
import React,{Component} from 'react'
// IndexRoute:用于初始化首页页面的组件，需要紧挨着AppContainer
import { Router, Route,IndexRoute, hashHistory} from 'react-router'

// 引入功能容器
import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import AboutContainer from '../containers/AboutContainer.js'

export default class Routers extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={AppContainer}>
                    {/*默认HomeContainer为首页*/}
                    <IndexRoute component={HomeContainer} />
                    <Route path='home' component={HomeContainer} />
                    <Route path='movie' component={MovieContainer} />
                    <Route path='about' component={AboutContainer} />
                </Route>
            </Router>
        )
    }
}