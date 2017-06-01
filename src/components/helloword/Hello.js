
import './Hello.css';
import './Hello.scss'

import React, {Component} from 'react'

export default class Hello extends Component {
    //组件的构造函数
    constructor(props,context){
        super(props,context) //继承父类的构造函数的参数
        //定义state,用来初始化一些属性值
        //类似于angular中的$scope对象
        this.state={
            name:'zhangsan',
            age:24,
            isold:true
        }
        //给state属性赋值用this.setState({name:'lisi'})方法
    }
    render() {
        //给组件的属性赋值，可以通过组件props可以获取到
        console.log(this.props.name)
        return (
            <div>
                <h1>Hello React,{this.state.name}</h1>
            </div>
        )
    }
}
