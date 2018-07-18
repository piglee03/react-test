import React, { Component } from 'react';
import TodoList from './components/todoList';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
class App extends Component {
  state = {
   //input 요소에서 텍스트를 입력하여 리듀서로 보내줄 임시 값
    id: 0,
    text: '',
    done: false

  }

  handleChange = (e) => {
    //input요소에 텍스트를 입력할 때 마다 state의 todo값을 업데이트 해주는 함수
    const {value} = e.target;
    this.setState({
      ...this.state,
      text: value
    });
  }

  handleSubmit = (e) => {
    //추가 버튼을 눌렀을 때 state의 업데이트
    e.preventDefault();
    this.props.add(this.state.id, this.state.text, this.state.done);
    this.setState({ //초기화
      id: this.state.id + 1,
      text: '',
      done:false
    });
  }
  render() {
    return (
      <div className="App">
        <div className="top"> 
          <h1>TODO LIST</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input name="text" placeholder="할 일" value = {this.state.text} onChange = {this.handleChange}/>
          <button type="submit" onClick={this.handleSubmit}> 추가 </button>
        </form>

        <div className = "list">
          <TodoList 
            list = {this.props.todolist} 
            handleDelete = {this.props.remove} 
            handleDone = {this.props.done}
          />
        </div>
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
