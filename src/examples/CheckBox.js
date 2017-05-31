/**
 * react操作checkbox标签
 */
import React,{Component} from 'react'

export default class DoCheckBox extends Component{
    //初始化props属性,props属性一般为不可变属性
    // static defaultProps={
    //     hobbys:[
    //         {id:1,name:'篮球'},
    //         {id:2,name:'足球'},
    //         {id:3,name:'排球'},
    //         {id:4,name:'羽毛球'},
    //         {id:5,name:'乒乓球'}
    //     ]
    // }
    constructor(props,context){
        super(props,context);
        //初始化state属性,state属性一般为可变属性
        this.state={
            hobbys:[
                {id:1,name:'篮球',selected:false},
                {id:2,name:'足球',selected:false},
                {id:3,name:'排球',selected:false},
                {id:4,name:'羽毛球',selected:false},
                {id:5,name:'乒乓球',selected:false}
            ],
             myhobbys:[],
             isall:false
        }
    }
    //全选/反选
    isselectall(e){
        var _hobbys=this.state.hobbys;
        var result=e.target.checked;
        _hobbys.forEach(function(item) {
            item.selected=result;
        });
        var _myhobbys=result?_hobbys:[];
        this.setState({
            isall:e.target.checked,
            myhobbys:_myhobbys,
            hobbys:_hobbys
        })
    }
    //选择
    toselect(e){
        var result=e.target.checked;
        var _id=parseInt(e.target.value);
        var _name=e.target.getAttribute('data-hobby');
        var _hobbys=this.state.hobbys;
        var _myhobbys=this.state.myhobbys;
        for(var j=0;j<_hobbys.length;j++){
            if(_hobbys[j].id==_id){
                _hobbys[j].selected=result;
                break;
            }
        }
        if(_myhobbys.length>0){
            var _flag=false;
            for(var i=0;i<_myhobbys.length;i++){
                if(parseInt(_myhobbys[i].id)==_id){
                    if(!result)
                        _myhobbys.splice(i,1);
                    _flag=true;
                    break;
                }
            }
            if(!_flag && result){
                 _myhobbys.push({
                    id:_id,
                    name:_name
                })
            }
        }else{
            _myhobbys.push({
                id:_id,
                name:_name
            })
        }
        this.setState({
            hobbys:_hobbys,
            myhobbys:_myhobbys,
            isall:_myhobbys.length==_hobbys.length?true:false
        })
    }
    render(){
        return (
            <div>
                <p><input type="checkbox" onClick={this.isselectall.bind(this)} checked={this.state.isall}/>全选/反选</p>
                <div>
                    {
                        this.state.hobbys.map((item)=>{
                            return (
                                <div key={item.id}>
                                    <input type="checkbox" name='hobby' onChange={this.toselect.bind(this)} checked={item.selected} value={item.id} data-hobby={item.name}/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        }) 
                    }
                </div>
                <div>
                    您选择的爱好是:
                    {
                        this.state.myhobbys.map((item)=>{
                            if(item)
                                return <span key={item.id}>{item.name+' '}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}