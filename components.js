class ListBlock extends React.Component{
  constructor(){
    super()
    this.state = {items:[]}
    this.addItem = this.addItem.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }
  render(){
    return(
      <div>
      {this.state.items.map(el => <Card cvalue={el} removeItem={this.removeCard}/>)}
      <InputForm addItem = {this.addItem} />
      </div>
    )
  }
  addItem (val){
    this.setState({items: this.state.items.concat([val])})
  }
  removeCard (val){
    let index = this.state.items.indexOf(val);
    this.setState(this.state.items.splice(index,1))
  }
}
class Card extends React.Component{
  constructor(props){
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  render(){
    return(
      <div className='card' onClick={this.removeItem}><h2>{this.props.cvalue}</h2></div>
    )
  }
  removeItem(){
    this.props.removeItem(this.props.cvalue)
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
