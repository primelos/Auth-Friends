import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {

    return (
        <div>
              <Link to='/login'>Login</Link>

              <Link to='/protected'>Friends</Link>

              <Link to='/protected/list'>Friends List</Link>


        </div>
    )
}
export default Header;