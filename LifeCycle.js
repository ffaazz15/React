import React,{Component, Componet} from "react";

export default class LifeCycle extends Component
{
  constructor()
  {
      super();
      console.log("In Costructor")
  }

  render()
  {
      console.log("In Render")
      return<h1>In Life Cycle</h1>
  }

  componentDidMount()
  {
      console.log("In component")
  }
}