import '../styles//navBar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function NavBar() {
  return (
      <div>
          <div id="home-background"></div>
      
        <div className="nav-wrapper">

          <div className="left-side">
            <div className="nav-link-wrapper">
              <div><Link to="/">home</Link></div>
            </div>
            <div className="nav-link-wrapper">
              <div><Link to="/search">search</Link></div>
            </div>
            <div className="nav-link-wrapper">
              <div><Link to="/favourites">Favourites</Link></div>
            </div>
          </div>

          <div className="right-side">
            <div class="nav-link-wrapper">
              <p><img id='nasaImg' src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" /></p>
            </div>
          </div>
        </div>
</div>
 
  );
}

export default NavBar;
