import CountryCards from "../CountryCards";
import "./index.css";
import { GetCounters } from "../../Services";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import {BsSearch} from 'react-icons/bs' 
import LOGO from '../images/logo.png'

// import ResponsiveAppBar from "../Header";

function Home() {

  const [CountriesList, setCountryList] = useState([]);
  const [SearchName, setSearchName] = useState("");
  const [Loading, setLoading] = useState(false)

  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    setLoading(true)
    GetCounters().then((response) => {
      setLoading(false)
      const countries = response.data;
      setCountryList(countries);
      
    });
  }, []);

  

  useEffect(() => {
    const filterNameDataList = CountriesList.filter(data => data.name.toLowerCase().includes(SearchName.toLocaleLowerCase()))
    setFilterData(filterNameDataList)
  },[CountriesList, SearchName])



  return (
    <>

      
        < nav >
        <div className="headerContainer">
          <Link to={'/'} className="navbar-bran">
            <img src={LOGO}
              alt="Bootstrap" className='logo' />
          </Link>
          <h1 className="world">The Worlds</h1>
          <input className="searchInput" type="text" name="search" id="name" value={SearchName}
            onChange={e => setSearchName(e.target.value)}
            onKeyUpCapture={e => setSearchName(e.target.value)}
          placeholder="Search Country Name"


          />

          <h3 className="searchLogo"><BsSearch/></h3>


        </div>
      </nav >

      {Loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) :

    (<div className="country-card-style">

      {filterData.map((eachCountry) => (
        <Link to={`/countries/${eachCountry.alpha2Code}`} className="link">
          <CountryCards
            country={eachCountry.name}
            capital={eachCountry.capital}
            population={eachCountry.population}
            url={eachCountry.flags.png}
            key={eachCountry.alpha2Code}
          />
        </Link>





      ))}
    </div>
        )
      }
    </>
  );
}

export default Home;




