import React, {Component} from "react";
export default class FormComponent extends Component{

    state={
        Name:"",
        Age:0,
        InputValue: "",
    };



 
        // onNameChangeHandler = (event)=>{
         
        //     this.setState({Name : event.target.value});
        // };
        // onAgeChangeHandler = (event)=>{
            
        //     this.setState({Age : event.target.value});
        // };
        //onvaluechangehandlers does all job ..no need to write twice
        onFormSubmitHandler =(event)=> {
            event.preventDefault();
            console.log("in submit");
            console.log(this.state);
        };
        onValueChangeHandler = (event) =>{
            console.log(event.target.name);
            this.setState({[event.target.name]: event.target.value });
        };
    render(){
        return(
<>
<h1>Person form</h1>
<form onSubmit = {this.onFormSubmitHandler}>
<label>Name :</label>
<input 
name={"Name"}
value ={this.state.Name} 
onChange={this.onValueChangeHandler} />

<br/>

<label>Age :</label>
<input 
name={"Age"}  ///name is a inbuilt property
value ={this.state.Age} 
onChange={this.onValueChangeHandler} />

<br/>
<br/>
<button type ="submit">Submit</button>
</form>
</>

       );
    }
}
