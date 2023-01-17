import React from 'react'
import UserList from './UserList';
import Header from './Header';
import Footer from './Footer';


function Home() {


  return (
    <div>
        <div className="App">
            <header className="App-header">
              <Header/>
              <UserList/>
            </header>
        </div>
        <Footer/>
    </div>
  )
}

export default Home