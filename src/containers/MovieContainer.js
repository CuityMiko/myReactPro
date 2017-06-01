/**
 * Movie容器文件
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class MovieContainer extends Component{
    render(){
        return (
            <div>
                <h3>MovieContainer</h3>
                <Link to='/movie/in_theaters/1'>正在热映</Link>/
                <Link to='/movie/coming_soon'>即将上映</Link>/
                <Link to='/movie/top250'>Top250</Link>
                <div>
                    {/*给子容器挖坑，子容器渲染的页面会填在此处*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}