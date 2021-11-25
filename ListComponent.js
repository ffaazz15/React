
import React ,{Component} from "react";

export default class ListComponent extends Component{
    state ={
         myList : [], // thus is a form of arr where all data will go
         inputValue: "",
    };
  
    onAdd = () => {
        const myListCopy = this.state.myList; // code is written so evry time u click on add button a is added
        myListCopy.push(this.state.inputValue);
        this.setState({myList:myListCopy,inputValue: ""});
        // console.log("on Add");
    };
        onInputTextChange = (event)=>{
            console.log(event.target.value);
            this.setState({inputValue : event.target.value});
        };
  
    render(){
        // const myList = ["fazil","ram","rahim","lakhan"];
        return(
            <>
            {/* <h1>from ListComponent</h1> */}
            <h1>a to-do list app</h1>
         <input 
         value={this.state.inputValue}
         onChange={this.onInputTextChange}
         />
            <button onClick ={this.onAdd}>add</button>

            {this.state.myList.map((element,index)=>(
            <div key={index}>
                {/* <h2>inside the ListItem</h2> */}
                <div>{element}</div>
            </div>
            ))}
            </>
        )
    }
}