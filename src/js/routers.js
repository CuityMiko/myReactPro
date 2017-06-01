/**
 * react-router 路由文件
 */
import React,{Component} from 'react'
// IndexRoute:用于初始化首页页面的组件，需要紧挨着AppContainer
import { Router, Route,IndexRoute, browserHistory} from 'react-router'

// 引入功能容器
import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import AboutContainer from '../containers/AboutContainer.js'
import In_theatersContainer from '../containers/In_theatersContainer.js'
import Coming_soonContainer from '../containers/Coming_soonContainer.js'
import Top250Container from '../containers/Top250Container.js'

export default class Routers extends Component{
    movieEnter(e){ // onEnter:进入路由时触发的方法，可以在方法做权限验证以及日志的操作（切面过滤）
        // console.log(e);
        // console.log(e.location.pathname)
        // console.log('进入了movie路由');
    }
    movieLeave(){ // onLeave离开路由时触发的方法
        // console.log('离开了movie路由');
    }
    movie_in_theatersEnter(e){ // onEnter:进入路由时触发的方法，可以在方法做权限验证以及日志的操作（切面过滤）
        // console.log(e.params.page)
        // console.log('进入了movie_in_theaters路由');
    }
    movie_in_theatersLeave(){ // onLeave离开路由时触发的方法
        // console.log('离开了movie_in_theaters路由');
    }
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={AppContainer}>
                    {/*默认HomeContainer为首页*/}
                    <IndexRoute component={HomeContainer} />
                    <Route path='home' component={HomeContainer} />
                    <Route path='movie' component={MovieContainer} 
                        onEnter={this.movieEnter.bind(this)}
                        onLeave={()=>this.movieLeave()}
                    >
                        {/*默认设置In_theatersContainer为首页*/}
                        <IndexRoute component={In_theatersContainer} />
                        <Route path='in_theaters/:page' component={In_theatersContainer} 
                            onEnter={this.movie_in_theatersEnter.bind(this)}
                            onLeave={()=>this.movie_in_theatersLeave()}
                        />
                        <Route path='coming_soon' component={Coming_soonContainer} />
                        <Route path='top250' component={Top250Container} />
                    </Route>
                    <Route path='about' component={AboutContainer} />
                </Route>
            </Router>
        )
    }
}