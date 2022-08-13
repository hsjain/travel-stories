import "./home.scss"
// import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <div>
        <div className="header">
            <div className="headerContainer">
              <div className="brand">
                {/* <SearchIcon/>
                <input placeholder="Search by city..." className="searchinput" /> */}
                Travel Stories
              </div>
                <div className="elements">
                    <a href="/selection/city=none/country=none">
                      <button className="element">Share your experience now!</button>
                    </a>
                </div>
            </div>
        </div>
        <div className="body">
          <div className="imgdiv">
            <img src="https://images4.alphacoders.com/111/1111778.jpg" alt="" className="img" />          
            <div className="textdiv">
              {/* <div className="imgtext1">Are you</div> */}
              <div className="imgtext2">Travelling?</div>
              <div className="imgtext3">Find the best attractions for your next trip!</div>
            </div>
          </div>
        </div>
        {/* <div className="featured">
            <div className="feat">
            <div className="featureditem">
              <a href="/city/mumbai">
                <img src="https://rare-gallery.com/thumbs/710661-Mumbai-India.jpg" alt="" className="featuredimg" />
              </a>
              <div className="titles">
                <div className="ftitle">Mumbai</div>
                <div className="fcount">12306 Posts</div>
              </div>
            </div>
            <div className="featureditem">
              <a href="/city/newyorkcity">
                <img src="https://rare-gallery.com/thumbs/5317079-bridge-architecture-street-manhattan-new-york-urban-spring-summer-new-york-city-man-wallpaper-millennial-brooklyn-blog-city-city-street-street-view-city-break-new-york-city-street-architectura.jpg" alt="" className="featuredimg" /> 
              </a>
              <div className="titles">
                <div className="ftitle">New York City</div>
                <div className="fcount">9473 Posts</div>
              </div>
            </div>
            <div className="featureditem">
              <a href="/city/newyorkcity">  
                <img src="https://rare-gallery.com/thumbs/5373508-sunset-city-sunrise-eiffel-tower-paris-pari-france-cityscape-skyscraper-europe-skyline-building-eiffel-colour-aerial-view-aerial-sun-eifel-tower-scenery-european-png-images.jpg" alt="" className="featuredimg" />
              </a>
              <div className="titles">
                <div className="ftitle">Paris</div>
                <div className="fcount">8771 Posts</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
  )
}

export default Home