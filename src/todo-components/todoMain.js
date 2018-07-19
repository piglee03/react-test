import React, { Component } from 'react';
import TodoList from './todoList';
import './todo.css';
class TodoMain extends Component {
    static defaultProps = {
        list: [],
        Add: () => {console.log("not defined add")},
        Remove: () => {console.log("not defined remove")},
        Done: () => {console.log("not defined done")}
    }
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
    const {Add} = this.props;
    e.preventDefault();
    Add(this.state.id, this.state.text, this.state.done);
    this.setState({ //초기화
      id: this.state.id + 1,
      text: '',
      done:false
    });
  }
  render() {
    const {list, Remove, Done} = this.props;
    
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
            list = {list} 
            handleDelete = {Remove} 
            handleDone = {Done}
          />
        </div>
      </div>
    );
  }
}
export default TodoMain;
