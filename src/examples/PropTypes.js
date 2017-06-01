/**
 * 属性校验
 */
import React,{Component} from 'react'

export default class PropTypes extends Component{
    constructor(props,context){
        super(props,context)
    }
    //定义静态属性校验（校验从外界传过来的属性）
    static propTypes={
        autoPlay:React.PropTypes.bool.isRequired, //必须为bool类型并且不能为空
        maxnum:React.PropTypes.number.isRequired
    }
    render(){
        return (
            <div>属性校验</div>
        )
    }
}