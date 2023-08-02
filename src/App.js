import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-lists/card-lists.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))}, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  };

  return(
    <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'/>

        <CardList monsters={filteredMonsters}/>
      </div>
  )
}



// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       monsters : [],
//       searchField: ''
//     };
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState({searchField});
//   };

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => 
//       response.json())
//     .then(users => this.setState(
//       () => {
//       return {monsters : users}
//     }
//     ));
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filtererdMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder='search monsters'
//         className='monsters-search-box'/>
//         <CardList monsters={filtererdMonsters}/>
//       </div>
//     );
//   }
// }


export default App;
