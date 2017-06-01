/**
 * 主容器文件
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class AppContainer extends Component{
    render(){
        return (
            <div>
                <h3>AppContainer</h3>
                {/*<a href="#/home">首页</a>
                <a href="#/movie">电影列表</a>
                <a href="#/about">关于我们</a>*/}
                {/*Link配合browserHistory方式可以去掉锚点"#"浏览器的锚点"#"也没有了*/}
                <Link to='/home'>首页</Link>/
                <Link to='/movie'>电影列表</Link>/
                <Link to='/about'>关于我们</Link>
                <div>
                    {/*给子容器挖坑，子容器渲染的页面会填在此处*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}