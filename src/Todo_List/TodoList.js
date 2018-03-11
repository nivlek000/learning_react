import React from 'react';

class Todo_List extends React.Component {
  render() {
    return <TodoEntry>
      <Item />
    </TodoEntry>
  }
}

class Item extends React.Component {
  render() {
    return <div>
      <div className="TodoItem" onDoubleClick={this.props.onClick} ><div className="TodoItem-sn">{this.props.sn}</div>{this.props.textt}</div>
    </div>
  }
}

class TodoEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0, item: [], inputVal: "" }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handledelTodoItem = this.handledelTodoItem.bind(this)
  }

  //this.handleChange = this.handleChange.bind(this)

  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleAddTodoItem() {
    if (this.state.inputVal !== "") {
      console.log(this.state.inputVal)
      let newItem = this.state.item.slice()
      newItem.push(this.state.inputVal)
      this.setState(
        {
          item: newItem,
          inputVal: ""
        })
      // this.state
    }
  }

  handledelTodoItem(e) {
    console.log(this)
    console.log(this.state.item)
    for (var i = 0; i < this.state.item.length; i++) {
      if (this.state.item[i] === e) {
        console.log(this.state.item[i] + " is being deleted.")
        this.setState({
          item: [...this.state.item.slice(0, i), ...this.state.item.slice(i + 1)]
        })
      }
    }

  }

  render() {
    return <div bgcolor="green" id="list">
      <input placeholder="Input Todo Item" type="text" name="entry" onChange={this.handleChange} value={this.state.inputVal} />
      <input type="button" onClick={this.handleAddTodoItem} value="Add" />

      {this.state.item.map((v, i) => (
        <Item key={v + i} onClick={this.handledelTodoItem.bind(this, v)} textt={v} sn={i} />
      ))}
      <h6> Double Tap to remove an item from the list </h6>
    </div>
  }

}

export default Todo_List;
