import './selection.scss'
// import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Selection = () => {
    const [posts, setPosts] = useState([]);
    const [cities, setCities] = useState([]);
    const [getCountry, setCountry] = useState("");
    const [getCity, setCity] = useState("");
    // const queryString = window.location.href;
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");

    // setcity(queryString.split("=")[1].split("/")[0])
    // setcountry(queryString.split("=")[2])
    // console.log(city)
    // console.log(country)

    const url = "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"

    useEffect(() => {
        const queryString = window.location.href;
        setcity(queryString.split("=")[1].split("/")[0])
        setcountry(queryString.split("=")[2])
        axios.get(url)
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
      }, [])
    const countries = [...new Set(posts.map(item => item.country))];
    countries.sort();
    const handleCountry = (e) =>{
        let cities = posts.filter(city => city.country === e.target.value)    
        cities = [...new Set(cities.map(item => item.name))];
        let updated_cities = []
        cities.forEach(element => {
            let result = element.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            if (result === element){
                updated_cities.push(result)
            }
        });
        updated_cities.sort()
        let countryy = e.target.value
        setCountry(countryy.replace(/\s+/g, '-'));
        setCities(updated_cities)
    }

    const handleCity = (e) => {
        let cityy = e.target.value
        setCity(cityy.replace(/\s+/g, '-'));
    }

    const populate = () => {
      var selectCity = document.getElementById('city');
      var selectCountry = document.getElementById('country');
      var whatCountry = ""
      if (selectCountry !== null){
        var selectCountryOp = selectCountry.options
        for (let i = 0; i < selectCountryOp.length; i++){
          console.log(selectCountryOp[i].value)
          if (selectCountryOp[i].value === country){
            whatCountry = country
            selectCountryOp[i].setAttribute('selected', 'selected');
          }
        }
      }
    }

  return (
    <div>
        <div className="header">
            <div className="headerContainer">
              <div className="brand">
                Travel Stories
              </div>
                <div className="elements">
                    <a href="/selection/city=none/country=none">
                      <button className="element">Share your experience now!</button>
                    </a>
                </div>
            </div>
        </div>

        <div className="featured">
            <div className="texts">
                <h3 className="select">Select Country and City</h3>
                <label>Country:</label>
                <select id="country" onChange={(e) => handleCountry(e)}>
                    <option value="">Select Country</option>
                    {countries.map(
                      items => <option value={items}>{items}</option>
                    )}
                </select>
                <label>City:</label>
                <select id="city" onChange={(e) => handleCity(e)}>
                    <option value="">Select City</option>
                    {cities.map(
                      items => <option value={items}>{items}</option>
                    )}
                </select>
                <div>
                  {populate()}
                </div>
            </div>
            <div className="feat">
            <div className="featureditem">
              <a href={"/attraction/country=" + getCountry + "/city=" + getCity}>
                <img src="https://rare-gallery.com/thumbs/380344-4k-wallpaper.jpg" alt="" className="featuredimg" />
              </a>
              <div className="titles">
                <div className="ftitle">Attractions</div>
              </div>
            </div>
            <div className="featureditem">
            <a href={"/restaurant/country=" + getCountry + "/city=" + getCity}>
                <img src="https://rare-gallery.com/thumbs/5303765-dumpling-food-food-photography-food-styling-calming-healthy-steamy-oriental-continental-authentic-soulfood-dimsum-hot-hot-food-eating-dinner-lunch-restaurant-food-food-and-drink-food-presentat.jpg" alt="" className="featuredimg" /> 
              </a>
              <div className="titles">
                <div className="ftitle">Restaurants</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Selection