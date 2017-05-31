/**
 * 组合组件
 */
import React,{Component} from 'react'

// 子组件
class TodoList extends Component{
    render(){
        return <ul>
            {
                this.props.items.map((item)=>{
                    {/*key值必须要给并且唯一，为了检索以及加载DOM的效率*/}
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    }
}

// 主组件
class TodoApp extends Component{
    constructor(props,context){
        super(props,context)
        this.state={
            todolist:[]
        }
    }
    todo(e){
        if(this.refs.txtcontent.value){
            var _newlist=this.state.todolist.concat([{
                id:Math.random(9),
                name:this.refs.txtcontent.value
            }])
            this.setState({
                todolist:_newlist
            },()=>{
                this.refs.txtcontent.value='';
            })
        }
    }
    render(){
        return (
            <div>
                <TodoList items={this.state.todolist} />
                <p>当前共<strong>{this.state.todolist.length}</strong>项</p>
                <p>
                    <input type="text" value={this.state.content} ref='txtcontent'/>
                    <button onClick={this.todo.bind(this)}>提 交</button>
                </p>
            </div>
        )
    }
}

export default TodoApp