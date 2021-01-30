import React, { Component } from 'react';
//  import Radium from 'radium'
import AppCss from './App.css';
import Userinput from './userInput/userInput.js';
import Useroutput from './userOutput/userOutput.js';


  // Using styled-components we can declare a html element with inline css
// const Heading1 = styled.h1`
//                         color : ${colorab};
//                         &:hover {
//                           color : red;
//                         }
//                       `;
class App extends Component {
  c='green';
  i=4;
  state = {
    person : [
      {id:'1',name : 'Ram'},
      {id:'4',name : 'Aman'},
      {id:'3',name : 'rajat'}
    ],
    showPerson : false
  }
  


  change1 =(event , id)=>
  {
  
    const personIndex  = this.state.person.findIndex(p=>{
      return p.id === id;
    });      // find the index of the id
    const person = {        
      ...this.state.person[personIndex]
    }
    person.name = event.target.value;    // change the value in temporary array
    const persons = [...this.state.person];   // make new temporary array of original array
    persons[personIndex]  = person;  // update the temporary array at given index

     this.setState(  // Copy th temporary array to original array
      {
        person : persons
      }
    )
  }


  

  add=()=>
  {
    let n = prompt("Enter name of person:")
    console.log(n);

    let temp = {id:this.i,name:n};this.i++;
    let tempObj = this.state.person;
    tempObj.push(temp);
    
    this.setState({
      person : tempObj
    })
    console.log(this.state.person.length);
    if(this.state.person.length>2)this.c='green';
  }

  deletePerson =(personIndex)=>
  {
   // console.log(personIndex);
   
   const temp = this.state.person[personIndex].name;
    const a  = this.state.person;
    a.splice(personIndex,1);
    this.setState({person : a});
    
    alert(temp +' deleted successfully.')
    this.myFunction();
  }
  myFunction =()=> 
  {
    const temp = this.state.showPerson;
    this.setState({showPerson : !temp })
  }
  static   componentDidMount(){
    const person = {        
      ...this.state.person
    }
    person.name = 'Mayank';    // change the value in temporary array
    const persons = [...this.state.person];   // make new temporary array of original array
    persons[0]  = person;  // update the temporary array at given index
    console.log('hello');
    
  }
  
  
 
  render() {
    const style=
    {
      color : 'white',
      backgroundColor: 'skyblue',
      padding : '5px',
      borderRadius : '3px',
      marginTop :'15px',
      textAlign :'center', 
      ':hover':{
        backgroundColor : 'lightgreen',
        color :'white'
      }
    }
    // const style1 ={
    //   border: '2px solid black',
    //   borderRadius : '5px',
    //   padding : '10px',
    //   boxShadow : '0 5px 5px #eee',
    //   margin : '10px auto',
    //   width : '100px'
    // }
    let len = this.state.person.length
    let person = null;
    if(this.state.showPerson)
    {
      if(this.state.person.length<=2)
      {
        this.c = 'red';
      }
      else if(this.state.person.length>2)
      {
        this.c = 'green';
      }
      person = (
        
        <div className={AppCss.App}>
        {
          
          <div>
            {
              this.state.person.map((p,index)=>{
                return(
                <div key={p.id}> 
                  <Useroutput name = {p.name}  click = {()=>this.deletePerson(index)} />
                  
                  <Userinput  changed = {(event)=>this.change1(event,p.id)}/>
                </div>)
              })
            }
           
          </div>
          
            
        }
        
        {/* //   return <Useroutput name = {p.name}/>
        // })
        // }
        // div
         */}
        
   
          <p className={AppCss.One}>Click on Button to hide.</p>
        </div>
      )
      style.backgroundColor ='red';
    }
    else
    {
      person = (
        <div>
         <h1 className={this.c}>Click on Button to show names</h1>
        </div>
      )
    }
    
    return (
      <div>
        <div  className={AppCss.Box}>
          Count : {len}
        </div>
      <div className={AppCss.App}>
         
        <button type='button' key='one' onClick={this.add} style={style}>Add more People</button>
        <button type='button' key='two' onClick={this.myFunction} style={style}>click Here</button>
        {
          person
        }
        
      </div></div>
    );
  }
}

export default App;
