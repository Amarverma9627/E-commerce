import { useEffect, useState } from "react"
import "./Navbar.css"
import { MainData } from './GlobalData.jsx'
import Popup from "./Popup.jsx";
const Navbar = (props) => {
    let [show, sethide] = useState(false);
    let [font2, setfont2] = useState(false)
    let [font, setfont] = useState(true)
    let [input, setinput] = useState('');
    let [showHide, setshowHide] = useState(false)


    let click = () => {
        setfont(false)
        setfont2(true)
        sethide(true)

    }
    let click2 = () => {
        setfont(true)
        setfont2(false)
        sethide(false)
    }
    let cross1 = () => {
        setinput('')
        props.setdata(MainData)

    }
    let search=()=>{
        let res=MainData.filter((item)=>{
            if(item.category.includes(input)){
                return item;
            }
        });
        props.setdata(res);
        if(input!==MainData){
            setshowHide(true)
        }
    }
   
   
   
    return (
        <>
            <header>
                <div className="nav-bar">
                    {font && <i className="fa fa-bars" aria-hidden="true" onClick={click}></i>}
                    {font2 && <i className="fa fa-times" aria-hidden="true" onClick={click2}></i>}
                    <div className="brand">Lodhi<span className="shop"> Shopping</span></div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search Product" onChange={(e) => setinput(e.target.value)} value={input} />
                        {input.length <= 0 && <i className="fa fa-search" aria-hidden="true"></i>}
                        {input.length > 0 && <i className="fa fa-times" aria-hidden="true" onClick={cross1} id="cross"></i>}
                    </div>
                    <button onClick={search}>Search</button>

                    <div className="cart" >Cart</div>
                </div>
                

                {/* navbar-wrapper */}
                {show && <div className="nav-bar-wrapper">
                    <ul>
                        <li className="item">Home</li>
                        <li className="item">Flter By</li>
                        <li className="item">Mobiles</li>
                        <li className="item">Laptop</li>
                        <li className="item">Tablet</li>

                    </ul>
                </div>}

            </header>
            <Popup showHide={showHide} setshowHide={setshowHide} />
        </>
    )
}
export default Navbar;