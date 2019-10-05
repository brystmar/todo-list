import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import TitleLogo from './components/TitleLogo'
import './App.css'

class App extends React.Component {
     constructor() {
         super();
         this.state = {
             myData: "test"
         }
     }

     render() {
         return (
             <div id="app">

                 <Header/>
                 <TitleLogo/>

                 <TodoList/>

                 <br/> <br/>
                 <Footer/>
             </div>
         )
     }
}

export default App
