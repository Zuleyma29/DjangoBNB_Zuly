import Image from "next/image";
import Link from "next/link";

import SearchFilters from "./SearchFilters";

 const Navbar = () => {
    return(
        <nav className="w-full fidex top-0 left-0 py-3 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="DjangoBnb logo"
                            width ={120}
                            height={38}
                        />
                    </Link>

                    <div className="flex space-x-9">
                        <SearchFilters/>
                    </div>

                    <div className="flex items-center space">
                        Add property -  User nav

                    </div>
                </div>
            </div>
        </nav>
    )
 }

 export default Navbar;