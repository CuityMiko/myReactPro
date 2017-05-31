/**
 * React的DOM操作:
 * 1.通过给标签设置ref属性以及this.refs属性进行操作标签的DOM操作
 * 2.this.refs属性必须在componentDidMount函数以及以后的生命周期中使用，在componentWillMount函数中是获取不到this.refs值的
 * 3.react中不推荐使用document去操作DOM
 */
import React,{Component} from 'react'

export default class ODom extends Component{
    constructor(props,context){
        super(props,context)
        //初始化state
        this.state={
            content:''
        }
    }
    componentWillMount(){
        console.log(this.refs.txtcontent)
    }
    //重置
    reset(str,e){
        console.log(e.target.getAttribute('data-info'));
        console.log(`${str}进行了重置`);
        this.setState({
            content:''
        },()=>{ //给state属性赋值以后回调函数
            this.refs.txtcontent.focus();
        })
    }
    //改变值
    changeval=(str)=>{
        console.log(str)
        console.log(this.refs.txtcontent.getAttribute('data-info'))
        this.setState({
            content:this.refs.txtcontent.value
        })
    }
    heiclick(e){
        //获取父级元素属性值
        console.log(this.refs.divccc.parentElement.getAttribute('data-info'))
        //获取子级元素属性值
        console.log(this.refs.divccc.childNodes[0].innerHTML)
        console.log(this.refs.divccc.childNodes[0])
    }
    render(){
        return (
            <div>
                <p>
                    <input placeholder="请输入内容..." type="text" data-info='lisi' value={this.state.content} ref='txtcontent' onChange={()=>this.changeval('hahaha')}/>
                </p>
                <p>
                    <strong>您输入的内容是:{this.state.content}</strong>
                </p>
                {/*this.reset.bind(this,'zhangsan') 通过bind方法改变this的作用域*/}
                <p><button data-info='张三' onClick={this.reset.bind(this,'zhangsan')}>重 置</button></p>
                <br/>
                <div data-info='parentdadsad'>
                    <div ref='divccc'>
                        <span data-info='childdsdasdas'>childdsdasdas34343434</span>
                        <span data-info='childdsdasdas2'>childdsdasdas234343434</span>
                    </div>
                </div>
                <a href="javascript:;" onClick={this.heiclick.bind(this)}>
                    <span data-info='wangwu'>heiheiheiclick</span>
                </a>
            </div>
        )
    }
}