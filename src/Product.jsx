import { useEffect, useState } from "react";
import "./Product.css";
import { MainData } from './GlobalData.jsx';
import Navbar from "./Navbar.jsx";

const Product = () => {
  let [data, setdata] = useState([])
  useEffect(() => {
    setdata(MainData)
  }, [])
  return (

    <div className="product-item-N">
      {data.map((item, index) =>
        <div key={index} className="product-item">
          <p className="ctgry">{item.category}</p>
          <img src={item.imgSrc} alt="" />
          <p className="descptn">{item.description}</p>
          <button className="btn-primary">{item.price}<i className="fa fa-inr" aria-hidden="true"></i></button>
          <button className="btn-warning">Add to Cart</button>
        </div>
      )
      }
       <Navbar setdata={setdata}/>
    </div>

  )
}
export default Product;