import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import TitleLogo from "./components/TitleLogo";
import './App.css'

function App() {
    return (
    <div id="app">

      <Header />
      <TitleLogo />

      <TodoList />

      <br/> <br/>
      <Footer />
    </div>
  )
}

export default App
