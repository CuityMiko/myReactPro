/**
 * React生命周期
 */
// ES5定义组件写法
// 导入React
//import React,{Component} from 'react'

// 定义组件
/*var Life=React.createClass({
    // 初始化props属性方法 getDefaultProps在ES6语法中不能使用
    getDefaultProps(){
        console.log('------初始化props属性方法:getDefaultProps');
        var stuobj={
            pname:'hello',
            page:30
        }
        return stuobj;
    },
    // 初始化state属性方法 getInitialState在ES6语法中不能使用
    getInitialState(){
        console.log('------初始化state属性方法:getInitialState');
        return {
            name:'zhangsan',
            age:24
        }
    },
    // 组件将要被渲染到真实DOM节点中
    componentWillMount(){
        console.log('------组件将要被渲染到真实DOM节点中方法:componentWillMount');
    },
    // 组件渲染方法
    render(){
        console.log('------组件被渲染方法:render')
        return (
            <div>
                <p id="ptext">name:{this.state.name},age:{this.state.age}</p>
                <p>
                    <button onClick={this.changeclick}>change</button>
                </p>
            </div>
        )
    },
    // 组件已经渲染到DOM节点方法
    componentDidMount(){
        console.log('------组件已经渲染到DOM节点方法:componentDidMount')
    },
    // 以上方法除了render方法外在组件上的生命周期中只会被执行一次
    changeclick(e){
        console.log('------改变props和state属性')
        var ptext= document.getElementById('ptext');

        ptext.setAttribute('pname','haha'+Math.random(9))
        ptext.setAttribute('page',Math.random(9))

        this.setState({
            age:Math.random(1,9),
            name:'zhangsan'+Math.random(1,9)
        })
        // this.props.page=266
        // this.props.pname='hello'+this.props.page;
    },
    // 组件将要接收到新属性
    componentWillReceiveProps(nextProps){
        console.log('------组件将要接收到新属性方法:componentWillReceiveProps');
        console.log(nextProps)
    },
    // 判断组件是否重新渲染
    shouldComponentUpdate(nextProps,nextState){
        console.log('------判断组件是否重新渲染方法:shouldComponentUpdate')
        console.log(nextProps);
        console.log(nextState);
        return true
    },
    // 组件将要重新被渲染
    componentWillUpdate(){
        console.log('------组件将要重新被渲染方法:componentWillUpdate')
    },
    // 组件已经被重新渲染
    componentDidUpdate(){
        console.log('------组件已经被重新渲染方法:componentDidUpdate')
    },
    // 当路由发生变化，组件将要被销毁时调用函数
    componentWillUnmount(){
        console.log('------当路由发生变化，组件将要被销毁时调用函数componentWillUnmount');
    }
})
module.exports=Life;*/

//ES6定义组件写法
import React,{Component} from 'react'

export default class Life extends Component{
    /**
     * 构造函数，初始化props属性和state属性
     * 用来代替组件生命周期中的getDefaultProps()和getInitialState()方法
     * @param {*} props 
     */
    static defaultProps = { //props设置默认值方式
        pname: 'zhangsan',
        page: 10,
    }; 
    constructor(props){
        super(props)
        console.log('------构造函数，初始化props属性和state属性');
        this.state={
            name:'小明',
            age:21
        }
    }
    // 组件将要被渲染到真实DOM节点中
    componentWillMount(){
        console.log('------组件将要被渲染到真实DOM节点中方法:componentWillMount');
    }
    // 组件渲染方法
    render(){
        console.log('------组件被渲染方法:render')
        return (
            <div>
                <p id="ptext">name:{this.state.name},age:{this.state.age}</p>
                <p>
                    {/*onClick={()=>this.changeclick('张三')} 为ES6调用方法的方式*/}
                    <button onClick={()=>this.changeclick('张三')}>点击</button>
                    {/*onClick={this.changeto.bind(this,'jack')} 为ES5调用方法的方式*/}
                    <button onClick={this.changeto.bind(this,'jack')}>change</button>
                </p>
            </div>
        )
    }
    // 组件已经渲染到DOM节点方法
    componentDidMount(){
        console.log('------组件已经渲染到DOM节点方法:componentDidMount')
    }
    // 以上方法除了render方法外在组件上的生命周期中只会被执行一次
    // 两种声明点击方法形式
    changeclick=(str,e)=>{
        console.log('------改变props和state属性')
        this.setState({
            age:Math.random(1,9),
            name:'zhangsan'+Math.random(1,9)
        })
        console.log(`${str}点击`)
        console.log(e)
        // this.props.page=266
        // this.props.pname='hello'+this.props.page;
    }
    changeto(str,e){
        console.log(`${str} changeto`);
        console.log(e);
    }
    // 组件将要接收到新属性
    componentWillReceiveProps(nextProps){
        console.log('------组件将要接收到新属性方法:componentWillReceiveProps');
        console.log(nextProps)
    }
    // 判断组件是否重新渲染
    shouldComponentUpdate(nextProps,nextState){
        console.log('------判断组件是否重新渲染方法:shouldComponentUpdate')
        console.log(nextProps);
        console.log(nextState);
        return true
    }
    // 组件将要重新被渲染
    componentWillUpdate(){
        console.log('------组件将要重新被渲染方法:componentWillUpdate')
    }
    // 组件已经被重新渲染
    componentDidUpdate(){
        console.log('------组件已经被重新渲染方法:componentDidUpdate')
    }
    // 当路由发生变化，组件将要被销毁时调用函数
    componentWillUnmount(){
        console.log('------当路由发生变化，组件将要被销毁时调用函数componentWillUnmount');
    }
}