/**
 * React操作Form表单
 */
import React,{Component} from 'react'

export default class DoForm extends Component{
    constructor(props,context){
        super(props,context);
        // 初始化state属性
        this.state={
            areas:[
                {id:1,name:'北京'},
                {id:2,name:'上海'},
                {id:3,name:'广州'},
                {id:4,name:'深圳'},
                {id:5,name:'杭州'},
            ],
            selected:0,
            sex:1,
        }
    }
    selectChange(e){ // e.target当前元素的DOM
        // console.log(e.target.value); //获取选中值的value属性
        // console.log(e.target.selectedIndex) //获取选中值的索引值
        // console.log(e.target.options[e.target.selectedIndex].text); //获取选中值的文本
        this.setState({
            selected:e.target.value
        })
        this.refs.ptext.innerHTML=`您选择的城市为：${e.target.options[e.target.selectedIndex].text}`
    }
    selectsex(e){
        console.log(parseInt(e.target.value))
        this.setState({
            sex:parseInt(e.target.value)
        })
    }
    render(){
        return (
            <div>
                <select value={this.state.selected} onChange={this.selectChange.bind(this)}>
                    <option value="0">---请选择---</option>
                    {
                        this.state.areas.map((item)=>{
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })
                    }
                </select>
                <p ref="ptext"></p>
                <p>
                    <input type="radio" name='sex' onChange={this.selectsex.bind(this)} checked={this.state.sex==0} value='0'/>男
                    <input type="radio" name='sex' onChange={this.selectsex.bind(this)} checked={this.state.sex==1} value='1'/>女
                    <input type="radio" name='sex' onChange={this.selectsex.bind(this)} checked={this.state.sex==-1} value='-1'/>保密 
                </p>
                <p>您选择的性别是<strong>{this.state.sex>-1?(this.state.sex==0?'男':'女'):'保密'}</strong></p>
            </div>
        )
    }
}