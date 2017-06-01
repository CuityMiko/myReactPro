/**
 * Context属性
 * 1.Context属性是用来对其组件内的子孙组件传值使用的
 * 2.在父类里的getChildContext方法给子孙类传递值
 * 3.在父类里需要在childContextTypes属性中对给子孙类传递值进行校验
 * 4.子孙类调用this.context方式，在调用之前需要在contextTypes属性中进行调用属性的类型校验
 */

import React,{Component} from 'react'

class MyBtn extends Component{
    static contextTypes={
        btns:React.PropTypes.array.isRequired
    }
    render(){
        return <div>
            {
                this.context.btns.map((item)=>{
                    return <button style={{background:item.color}} key={item.id}>{item.name}</button>
                })
            }
        </div>
    }
}

class Msg extends Component{
    static contextTypes={
        text:React.PropTypes.string.isRequired
    }
    render(){
        return <div>
            <h3>{this.context.text}:{this.props.text}</h3>
            <MyBtn />
        </div>
    }
}

class BtnList extends Component{
    getChildContext(){
        return {
            btns:this.props.btns,
            text:'动态按钮组'
        }
    }
    static childContextTypes={
        btns:React.PropTypes.array.isRequired,
        text:React.PropTypes.string.isRequired
    }
    render(){
        var children=this.props.infos.map((item)=>{
            return <Msg text={item.text} key={item.id} />
        })
        return <div>
            <h2>{this.props.info}</h2>
            {children}
        </div>
    }
}

export default BtnList