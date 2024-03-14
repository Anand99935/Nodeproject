
import { Link } from 'react-router-dom';

function Header() {
  return (
   
     <div>
         <ul>
          <li><Link to="/">Getapi</Link></li>
          <li><Link to="/post">Postapi</Link></li>
          <li><Link to="/put">Putapi</Link></li>
          <li><Link to="/delete">Deleteapi</Link></li>
         </ul>
     </div>
      
    
  );
}

export default Header;