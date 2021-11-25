import React ,{ Component } from "react";

class ConditionalComponent extends Component{
    state={
       showtext:true, //can check for false too
    };
onToggleShowText = () =>{
    this.setState({showtext : !this.state.showtext})
}
    render(){ 
        return(<div> 
            
      {this.state.showtext &&    <h1> from conditional component </h1>}           
        
            <button onClick ={this.onToggleShowText} >{this.state.showtext ? "hide":"showtext" }</button>

     
       </div> );
       
    }
}
export default ConditionalComponent;