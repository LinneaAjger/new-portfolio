import Image from "next/image"
import closeImg from "../images/close.svg"
import menuImg from "../images/menu.svg"
import Link from "next/link"
import { useState } from "react"

function NavBar (){
  const [navbar, setNavbar] = useState<boolean>(false);
  return <div>
    <nav>
      <div>
      <div>
        <div>
          {/* logo*/}
          <Link href={"/"}>
            <h2>LOGO</h2>
          </Link>
                    {/* hamburgermeny ä osynlig för stora skärmar*/}
                    <div>
                      <button
                      onClick={()=> setNavbar(prevState => !prevState)}>
                        {navbar ?
                        (<Image src={closeImg} width={30} height={30} alt="logo"/>) :
                        (<Image src={menuImg} width={30}  height={30} alt="logo"/>)}
                        
                      </button>
                    </div>
        </div>

      </div>

      </div>
    </nav>
  </div>
  }
  export default NavBar