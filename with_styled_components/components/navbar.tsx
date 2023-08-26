import Image from "next/image"
import closeImg from "../images/close.svg"
import menuImg from "../images/menu.svg"
import { Hamburgermenu, NavBarStyle, NavLinks } from "./sharedstyles"
import Link from "next/link"
import { useState } from "react"

function NavBar (){
  const [navbar, setNavbar] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const handleMenu = () => {
    setNavbar(prevState => !prevState);
    setToggle(!toggle);
    }

                        {/* hamburgermeny ä osynlig för stora skärmar*/}


  return <div>
    <nav>
      <div>
        <NavBarStyle>
          {/* logo*/}
          <Link href={"/"}>
            <h2>linnea ajger</h2>
          </Link>
            <NavLinks className={ toggle ? '' : 'hamburger-inactive' }>
                <ul className={ toggle ? 'hamburger-active' : '' }>
                  <li>
                    <Link href="projects" onClick={()=> setNavbar(prevState => !prevState)}>projects</Link>
                  </li>
                  <li>
                    <Link href="about" onClick={()=> setNavbar(prevState => !prevState)}>about me</Link>
                  </li>
                  <li>
                    <Link href="contact" onClick={()=> setNavbar(prevState => !prevState)}>contact</Link>
                  </li>
                </ul>
              </NavLinks>
                    <Hamburgermenu>
                      <button
                      onClick={handleMenu}>
                        {navbar ?
                        (<Image src={closeImg} width={30} height={30} alt="logo"/>) :
                        (<Image src={menuImg} width={30}  height={30} alt="logo"/>)}
                        
                      </button>
                    </Hamburgermenu>
        </NavBarStyle>
      </div>


    </nav>
  </div>
  }
  export default NavBar