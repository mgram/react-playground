class ListBlock extends React.Component{
  constructor(){
    super()
    this.state = {items:[]}
  }
  render(){
    return(
      <div>
      {this.state.items.map(el => <li> {el} </li>)}
      <InputForm addItem = {this.addItem.bind(this)} />
      </div>
    )
  }
  addItem(val){
    this.setState({items: this.state.items.concat([val])})
  }
}
class InputForm extends React.Component{
  submitHandler(e){
    e.preventDefault()
    this.props.addItem(this.body_val.value)
  }
  render(){
    return(
      <form onSubmit = {this.submitHandler.bind(this)}>
      <textarea ref={el=>this.body_val = el}></textarea>
      <input type="submit" value="Add" />
      </form>
    )
  }
}

class TodoApp extends React.Component{
  render(){
    return(
      <div>
      <ListBlock />
      </div>
    )
  }
}
ReactDOM.render(<TodoApp />, document.getElementById('list'))
