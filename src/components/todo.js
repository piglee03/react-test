import React, { Component } from 'react';
import './todo.css'
class Todo extends Component {
    static defaultProps = {
        info:{},
        onDone: ()=> {console.log("not defined onDone")},
        onDelete: ()=> {console.log("not defined onDelete")}
    }
    handleDelete = (e)=> {
        e.preventDefault();
        const {info, onDelete} = this.props;
        onDelete(info.id);
    } 
    handleDone = (e) => {
        e.preventDefault();
        const {info, onDone} = this.props;
        onDone(info.id);
    }
    render() {
        const {info} = this.props;

        return (
            <div onClick = {this.handleDone}> 
                <table>
                    <tbody>
                        <tr>
                            {
                                info.done
                                ?(<th className="done">{info.text}</th>)
                                :<th>{info.text}</th>}
                            <th className = "delBtn">
                                <button onClick={this.handleDelete}> 삭제 </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}


export default Todo;