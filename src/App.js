import React, { Component } from 'react';
import TodoMain from './todo-components/todoMain';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
class App extends Component {

  render() {
    return (
      <div className="App">
      <TodoMain 
        list = {this.props.todolist} 
        Add = {this.props.add}
        Remove = {this.props.remove} 
        Done = {this.props.done}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist
  };
} 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
