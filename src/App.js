import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"; 
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {netflix_orginals ,action,Horror,Romance,comdey} from './urls'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
    <Rowpost  urls={netflix_orginals} title='Netflix originals' />
    <Rowpost urls={action} title='Action' isSmall />
    <Rowpost urls={comdey} title='Comdey' isSmall />
    <Rowpost urls={Horror} title='Horror' isSmall />
    <Rowpost urls={Romance} title='Romance' isSmall />
    </div>
  )
}

export default App
