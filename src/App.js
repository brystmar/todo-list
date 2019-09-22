import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
    return (
    <div className="App">
      <img src={logo} alt="logo" height="150" width="150"  />

      <Header />

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <br/> <br/>
      <Footer />
    </div>
  )
}

export default App
