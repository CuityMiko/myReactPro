/**
 * 第三方Loading
 */
// halogen
/*import React,{Component} from 'react'
import halogen from 'halogen'

export default class MyLoading extends Component{
    render(){
        let FadeLoader=halogen.FadeLoader;
        return (
            <div>
                <FadeLoader color="#26A65B" size="16px" margin="4px"/>
            </div>
        );
    }
}*/

// react-loading
import React,{Component} from 'react'
import Loading from 'react-loading';

/**
 * type: loading类型
 * blank
 *  balls
 *  bars
 *  bubbles
 *  cubes
 *  cylon
 *  spin
 *  spinningBubbles
 *  spokes
 *  delay：延迟几秒以后加载
 */
export default class Loader extends Component{
    render(){
        console.log(Loading)
        return <Loading type={this.props.type} color={this.props.color} height={this.props.height} width={this.props.width} delay={this.props.delay} />
    }
}
