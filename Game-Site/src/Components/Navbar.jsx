import { FaBars, FaTimes } from "react-icons/fa";


function Navbar(){
    retrun(
        <header>
            <nav>
                <h1>Logo</h1>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <button>
                    <FaBars />
                </button>
            </nav>
            <button>
                <FaTimes />
            </button>
        </header>
    );
}