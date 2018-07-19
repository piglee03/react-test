import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import TodoMain from './todo-components/todoMain';
import FindIDMain from './findID/FindIDMain'
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Menu from './Menu'
class App extends Component {

  render() {
    return (
      
      <Router>
        <div className="App">
          <Menu/>
            <Route exact path = "/" render={() => <TodoMain list = {this.props.todolist} 
              Add = {this.props.add}
              Remove = {this.props.remove} 
              Done = {this.props.done}/>}
             />
            <Route path = "/github" component={FindIDMain} />
        </div>
      </Router>
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
