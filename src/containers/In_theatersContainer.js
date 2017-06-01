/**
 * 正在热映in_theaters子容器文件
 */
import React,{Component} from 'react'
// browserHistory用来做页面之间跳转使用
// import {browserHistory} from 'react-router'
import PropTypes from 'prop-types'

export default class In_theatersContainer extends Component{
    // router属性是父级标签Router标签封装的属性，子孙级使用之前需要在contextTypes中进行router属性的类型验证
    static contextTypes={
        router:PropTypes.object
    }
    // 返回首页
    gohome(){
        // browserHistory.push('/home?id=9&name=zhangsan');
        this.context.router.push('/home') // 推荐使用该方式
    }
    render(){
        console.log(this.props.params.page)
        return (
            <div>
                <h3>正在热映In_theatersContainer</h3>
                <button onClick={this.gohome.bind(this)}>返回首页</button>
            </div>
        )
    }
}