import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users=>this.setState({robots: users}))
    }

    startSearch = (event) =>{

        this.setState({searchfield: event.target.value})

    }
    render(){
    	
        const filtera= this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className='tc f1'>LOADING</h1>
        }
        else{
        return (
            <div className='tc'>
                <h1 class='f1'>Robofriends</h1>
                <Searchbox search={this.startSearch}/>
            <Scroll>
                <CardList robots={filtera}/>  
            </Scroll>
            </div>
                );
            }

        }
    }
export default App;
