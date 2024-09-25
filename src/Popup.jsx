
import "./popup.css"
import { useNavigate } from "react-router-dom";

const Popup = (props) => {
    let Navigate = useNavigate('');
    
    const back = () => {
        Navigate('/product')
    
    }
    return (
        <div className="main-box">
            {props.showHide && <div className="popup">
                <p>No Data found !</p>
                <button  onClick={back}><i className="fa fa-times" aria-hidden="true" ></i></button>
            </div>}
           
        </div>
    )
}
// className={`popup ${props.showHide ? 'show' : 'hide'}`}
export default Popup;

