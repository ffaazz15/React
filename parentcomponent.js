import { Component } from "react";

import childComponentClass from './childcomponentclass'
class parentcomponent extends Component
{
    state =
    {
        balance:0,
    };
    balanceIncrement = (value) => {
        this.setState({
            balance:this.state.balance + value
        });
    };
  
        render(){ //state->something which is self made --where as props is getting property from parents 
            const{name,age,accountNo}=this.props;  
    
             return <>       
             
             <h1> hello my name is {name} .my age is {age} and acount no is { accountNo} my balance is 
                {this.state.balance}  {this.props.accountNo}
               
                </h1> 
                <button  onClick={this.onProfitClickHandler}>
                single profit </button>
                <button  onClick={this.onDoubleProfitClickHandler}>
                double profit</button>
                </>
                
         
          
         }
        }
        export default childComponentClass;
