import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
        monsters:[],
        searchField:''
   }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({monsters:json}))
  
  }

  onChangeSearch = (e) => {

    this.setState({searchField:e.target.value},() =>{
      console.log(this.state);
    })

  }



  render(){
    const filterMonster=this.state.monsters.filter((monster) =>{
          return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return(
          <div>
              <h1>Monsters World</h1>
              <SearchField placeholder="Search Monsters Here" handleChange={this.onChangeSearch}/>
              <CardList monsters={filterMonster} />
          </div> 
    )
  }

}

export default App;
