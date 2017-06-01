// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// 引入路由
import Routers from './routers.js'

ReactDOM.render(
    <div>
        <Routers />
    </div>,
    document.getElementById('app')
)