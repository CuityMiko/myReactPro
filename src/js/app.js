// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello.js'
import Life from '../examples/Life.js'
import ODom from '../examples/Dom.js'
import DoForm from '../examples/Form.js'
import DoCheckBox from '../examples/CheckBox.js'
import TodoApp from '../examples/Combination.js' 


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

ReactDOM.render(
    <div>
        <TodoApp />
    </div>,
    document.getElementById('app')
)