import React, {Component} from "react"
import SmChildComponent from "./SmChildComponent"
class  SmParentComponent extends Component{
    state={
        balance:0,
    };
  
    onProfit = () =>
    this.setState({
        balance:this.state.balance + 1 });
    render(){
        
        return <h1> smparent component balance:  
             {this.state.balance}
             <button onClick={this.onProfit}>family profit</button>
             <SmChildComponent name = {'fazil'} onProfit = {this.onProfit} />
             <SmChildComponent name = {'aamm'} onProfit = {this.onProfit} />
              </h1>

  
    }
}
export default SmParentComponent;
// export default SmParentComponent;