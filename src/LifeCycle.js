import { Component } from "react";

class LifeCycle extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'toto',
            step:1
        }
        console.log(`etape ${this.state.step}: je suis dans le constructor()`);
    }


    componentDidMount(){
        console.log( `etape ${this.state.step}: je suis dans componentDidMount()`)
    }

render(){
    console.log(`etape ${this.state.step}: je suis dans le render()`)

  return(
    
 <div>
     {console.log(`etape ${this.state.step}: mise a jour DOM`)}
     <p>chargement:{this.state.step}</p>
 </div>

  )

  }

}


export default LifeCycle;









