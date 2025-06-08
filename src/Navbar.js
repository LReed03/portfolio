import react, { useEffect, useState } from "react";
import './Navbar.css';
const menus = ["Home", "About", "Projects", "Contact"];

function Navbar(){
    const [activeSection, setActiveSection] = useState(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id);
                }
            });
        }, options)
        menus.forEach((menu) => {
            const element = document.getElementById(menu);
            if(element) observer.observe(element) 
        });
    return() => observer.disconnect();
    }, [menus]);
    return(
        <header className="container">
            <nav>
                {
                    menus.map((menu, i) => {
                        return(
                            <a
                            key={i}
                            href={`#${menu}`}
                            className={activeSection === menu ? "active" : ""}
                            >
                                {menu}
                            </a>
                        )
                    })
                }
            </nav>
        </header>
    )
}

export default Navbar;