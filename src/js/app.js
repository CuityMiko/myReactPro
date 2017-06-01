// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// import Hello from '../components/Hello.js'
// import Life from '../examples/Life.js'
// import ODom from '../examples/Dom.js'
// import DoForm from '../examples/Form.js'
// import DoCheckBox from '../examples/CheckBox.js'
// import TodoApp from '../examples/Combination.js' 
// import PropTypes from '../examples/PropTypes.js'
// import BtnList from '../examples/Context.js'
// import Animate from '../examples/Animate.js'
import Loader from '../examples/Loading.js'


//属性扩散
// const obj={
//     age:12,
//     sex:'man',
//     prop1:'sdsda',
//     prop2:'e3r3333'
// }

/*ReactDOM.render(
    <div>
        {/*
          * React注释方式
          * obj使用方式“...”
          * 在后面重新赋值的属性可以覆盖掉原来的值
          */ /*}
       <Hello name='zhangsanfeng' {...obj} age={1000}/>
    </div>,
    document.getElementById('app')
)*/

/*var obj={
    autoPlay:true,
    maxnum:12344
}
ReactDOM.render(
    <div>
        <PropTypes {...obj}/>
    </div>,
    document.getElementById('app')
)*/

/*var btnobj={
    btns:[
        {id:1,color:'red',name:'按钮1'},
        {id:2,color:'#FFEC8B',name:'按钮2'},
        {id:3,color:'blue',name:'按钮3'},
        {id:4,color:'#EE00EE',name:'按钮4'},
        {id:5,color:'#90EE90',name:'按钮5'}
    ],
    infos:[
        {id:1,text:'绚烂'},
        {id:2,text:'缤纷'},
        {id:3,text:'多彩'}
    ],
    info:'按钮组列表'
}
ReactDOM.render(
    <div>
        <BtnList {...btnobj} />
    </div>,
    document.getElementById('app')
)*/

var loadingobj={
    type:'spokes',
    color:'blue',
    height:100,
    width:100,
    delay:5000
}

ReactDOM.render(
    <div>
        <Loader {...loadingobj} />
    </div>,
    document.getElementById('app')
)