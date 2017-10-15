class ListBlock extends React.Component{
  constructor(){
    super()
    this.state = {items:[]}
    this.addItem = this.addItem.bind(this);
  }
  render(){
    return(
      <div>
      {this.state.items.map(el => <div className='card'> <h2> {el} </h2> </div>)}
      <InputForm addItem = {this.addItem} />
      </div>
    )
  }
  addItem (val){
    this.setState({items: this.state.items.concat([val])})
  }
}
class InputForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''}
    this.submitHandler = this.submitHandler.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  submitHandler(e){
    //console.log(e.key)
    if (e.key =='Enter'){
      if(this.state.value)
      {
        this.props.addItem(this.state.value);
      }
        this.setState({value:''});
    }
  }
  updateValue(e){
    this.setState({value: e.target.value});
  }
  render(){
    return(
      <input type="text" value={this.state.value} onChange={this.updateValue} onKeyPress={this.submitHandler}/>
    );
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
