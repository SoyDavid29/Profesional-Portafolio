import { useState } from "react";

export default function Sidebar(){

         const [menuOpen, setMenuOpen] = useState(false);

         const toggleMenu = () => {
         setMenuOpen(!menuOpen);
        };
    
    return(
        

            <div className="bar" >
               <h1 className="logo">DR</h1>
              <button className={`btn-menu ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              > 
                
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    
             </button>
            </div>

    )
}