/**
 * 主容器文件
 */
import React,{Component} from 'react'

export default class AppContainer extends Component{
    render(){
        return (
            <div>
                <h3>AppContainer</h3>
                <a href="#/home">首页</a>
                <a href="#/movie">电影列表</a>
                <a href="#/about">关于我们</a>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}