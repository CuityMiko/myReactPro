/**
 * Home容器文件
 */
import React,{Component} from 'react'

export default class HomeContainer extends Component{
    render(){
        console.log(`id:${this.props.params.id},name:${this.props.params.name}`)
        return (
            <div>HomeContainer</div>
        )
    }
}