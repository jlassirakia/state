import React from "react";
import './App.css';

class App extends React.Component {
state ={
  fullName:"béji caid sebssi",
  bio:"né le 29 novembre 1926 à Sidi Bou Saïd et mort le 25 juillet 2019 à Tunis, est un homme d'État tunisien. Il est président de la République du 31 décembre 2014 à sa mort.",
  imgSrc:  <img src="/beji.jpg"/>,
  profession:" président",
  show :"faux"
 
}

handleClick=()=>{
  this.state.show==="faux"?this.setState({show:'vrai'}):this.setState({show:'faux'})}
  render(){
   
  return (
    <div>
  <button onClick={this.handleClick}> ClickMe</button>
  
     { this.state.show==="vrai"?(
       <h1> {this.state.fullName}  <br></br>{this.state.imgSrc}<br></br>
       {this.state.bio}<br></br> {this.state.profession}
       </h1>
     ):''}


   
   </div> 
  );
   
}
}
export default App;
