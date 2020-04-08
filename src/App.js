import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'CRUD',
      act:0,
      index:'',
      datas:[]
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){
      let data={
        name, address
      }
      datas.push(data);
    }else{
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas : datas ,
      act:0  
    });

    /*this.refs.myForm.reset();*/
    this.refs.name.focus();
  }

  fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
  } 

  fEdit = (i) =>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index:i
    });

    this.refs.name.focus();
  }

 


  render(){
    let datas=this.state.datas;
    return(
      <div className="App">
        <h2>{this.state.title}</h2>
        <form>
          <input type="text" ref="name" placeholder="Ingrese nombre" className="formField"/>
          <input type="text" ref="address" placeholder="Ingrese direccion" className="formField"/>
          <button className="myButton" onClick={(e)=> this.fSubmit(e)}>Enviar</button>
        </form>
        <pre>
          {datas.map((data, i)=>
          <li key={i} className="mylist">
            {i+1}.{data.name},{data.address}
            <button className="myButton" onClick={(e)=> this.fRemove(i)}>Eliminar</button>
            <button className="myButton" onClick={(e)=> this.fEdit(i)}>Editar</button>
          </li>
          )}
        </pre>
      </div>
    );
  }
}
export default App;
