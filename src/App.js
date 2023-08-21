import React from 'react' 
import Home from './Components/HomeRoute'
import './App.css' 
import{BrowserRouter,Routes,Route} from 'react-router-dom' 
import CountriesDetails from './Components/CountriesDetails'


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}/> 
        <Route path='/countries/:countryCode' element = {<CountriesDetails/>}/> 
        <Route path='*' element = {<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App