class Board extends React.Component{

  constructor(props){
    super(props);
    this.state = {items:[['','',''],['','',''],['','','']],
    nextVal:'X'
    }
    this.displayRow = this.displayRow.bind(this)
  }

  displayRow(){
    var llist=[]
    var i,j
    for (i=0; i<3; i++){
      for(j=0; j<3;j++){
      llist.push(<Unit unitvalue={this.state.items[i][j]} urow={i} ucol={j} handleClick ={this.updateTurn.bind(this)} checkStatus ={this.checkStatus.bind(this)}/>)
    }
  }
    return llist
  }

  updateTurn(row,column){
    if(this.state.items[row][column] == ''){
      var prevState, newval
      prevState = this.state.items
      prevState[row][column] = this.state.nextVal
      this.setState({items: prevState})
      newval = this.state.nextVal == 'X'? 'O': 'X'
      this.setState({nextVal: newval})
    }
  }

  checkStatus(){
    var status = 'In Progress'
    var i,j,statevar

    for(i=0;i<3;i++){
    statevar = this.state.items[i];
    if(statevar[0]==statevar[1] && statevar[1]==statevar[2] && statevar[0]!=''){
      status = statevar[0] + ' Won'
      return status
      }
    }

    for(j=0;j<3;j++){
    statevar = this.state.items.map(x => x[j])
    if(statevar[0]==statevar[1] && statevar[1]==statevar[2] && statevar[0]!=''){
      status = statevar[0] + ' Won'
      return status
      }
    }

    statevar = this.state.items;
    if((statevar[0][0]==statevar[1][1])&&(statevar[0][0]==statevar[2][2])&&(statevar[0][0]!='')){
      status = statevar[0][0] + ' Won'
      return status
    }

    if((statevar[0][2]==statevar[1][1])&&(statevar[0][2]==statevar[2][0])&&(statevar[0][2]!='')){
      status = statevar[0][2] + ' Won'
      return status
    }

    var temp = 0
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        if(statevar[i][j] == ''){
          temp = 1;
          break;
        }
      }
    }
    if (temp ==0){
          status = 'Game Drawn'
          return status
    }
    return status
  }

  displayNextTurn(){
    var llist = []
    if(this.checkStatus() == "In Progress"){
      llist.push(<h2> Next turn: {this.state.nextVal} </h2>)
    }
    return llist
  }
  render(){
    return(
      <div>
      <h1> Simple Tic Tac Toe </h1>
      <div className='container'>
      {this.displayRow()}
      </div>
      {this.displayNextTurn()}
      <h2> Game status: {this.checkStatus()} </h2>
      </div>

    );
  }
}

class Unit extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    if(this.props.checkStatus() == 'In Progress'){
      this.props.handleClick(this.props.urow,this.props.ucol)
    }
  }
  render(){
    return(
      <input type="button" value={this.props.unitvalue} className={'unit'} onClick={this.handleClick}/>
    )
  }
}

ReactDOM.render(<Board />, document.getElementById('root'))
