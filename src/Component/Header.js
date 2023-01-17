import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

    
    const linkStyle = { textDecoration:'none', color: '#ece39f', fontSize: 20, fontFamily: "Georgia, 'Times New Roman', Times, serif", marginRight : 20}
  


    return (
  
       <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            
            <div>
                <ul className='liStyle'>
                  <li><Link to="/" style={linkStyle}>Home</Link><i class="fa fa-home" aria-hidden="true"></i></li>
                  <li><Link to="/"  style={linkStyle}>A propos</Link><i class='fa fa-info-circle'></i></li>
                  <li><Link to="/" style={linkStyle}>Users</Link><i class="fa fa-users" aria-hidden="true"></i></li>
                  <li><Link to="/" style={linkStyle}>Contact</Link><i class="fa fa-phone" aria-hidden="true"></i> </li>
                </ul>
            </div> 
  
       </div>
  
    );

}

export default Header