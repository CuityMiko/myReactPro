
import './Hello.css';
import './Hello.scss'

import React, {Component} from 'react'

export default class Hello extends Component {
    //组件的构造函数
    constructor(props,context){
        super(props,context) //继承父类的构造函数的参数
        //定义state,用来初始化一些属性值
        this.state={
            name:'zhangsan',
            age:24,
            isold:true
        }
    }
    render() {
        //给组件的属性赋值，可以通过组件props可以获取到
        console.log(this.props.name)
        return (
            <div>
                <h1>Hello React</h1>
            </div>
        )
    }
}
