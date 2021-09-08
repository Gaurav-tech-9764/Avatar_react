
import './App.css';
import { Component } from 'react';
import Cardlist from './components/card/Cardlist';
import SearchComponent from './components/search/SearchComponent';

class App extends Component{

  constructor(){
    super()

    this.state={

      avatar:[],
      searchField:''

    };

    // this.handelChange =  this.handelChange.bind(this)
}
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')

.then(responce => responce.json())
.then(users => this.setState({avatar:users}));
};
handelChange =(e) => {
   this.setState({ searchField: e.target.value})

}


  render()
  {
    const {avatar, searchField} = this.state;
    const filteravatar = avatar.filter( avatar =>
      avatar.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

 
    return (

      <div className="App">
      <h1>Avatar Roles</h1>
      <SearchComponent 
      placeHolder="Search Avatar"
      handelChange={this.handelChange}/>
    
      <Cardlist avatar={filteravatar}> </Cardlist>
     </div>
    );
  }

}

export default App;
