import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import classes from './categories.module.css'
import { addToCart } from "../slices/Cart.js";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading ,setloading]=  useState(true)
  const { cart } = useSelector((state) => state.cart);
  const [Product, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'all',
    'cloth',
    'laptop',
    'phone',
    'books'
  ]
  useEffect(() => {
    loadusser();
  }, []);
  const loadusser = async () => {
    var response = await axios.get("https://backend-ecommerce-1uy3.onrender.com/api/product/getall", {
      // headers: { accesstoken: token },
    });
    setFilteredProduct(response.data);
    setProducts(response.data);
    setloading(false)
    console.log(response.data)
  };
  useEffect(() => {
    if(activeCategory === 'all'){
      setFilteredProduct(Product)
    } else {
      setFilteredProduct((prev) => {
        const filteredProduct = Product.filter((items) => items.category.toLowerCase() === activeCategory.toLowerCase())

        return filteredProduct
      })
    }
  }, [activeCategory])





  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  
  return (
    <>
      <div className={classes.categories}>
            {categories.map((category) => (
              <span
                key={crypto.randomUUID()}
                className={`${classes.category} ${activeCategory === category && classes.active}`}
                onClick={() => setActiveCategory(prev => category)}
              >
                {category}
              </span>
            ))}
      </div>
      <div className="home-container">
        <>
          <h2 className="header">New Arrivals</h2>
          {loading && <div className={classes.loading}>Loading.....</div>}
        
          <div className="products">
            {
            filteredProduct.map((product) => (
                <div key={product._id} className="product">
                       <h3><b>{product.name}</b></h3>
                  <Link to={`/post/${product._id}`} className="postlink">
             
                  </Link>
                  <Link to={`/product/${product._id}`} className="postlink">
                  <img src={product.avatar} alt={product.name} />
                  </Link>
                  <span className="price">$ {product.price}</span>
                  <div className="details">
                    <span>{product.desc}</span>
                   
                  </div>
                 
                  <button 
                  onClick={() =>  addToCartHandler(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      {/* ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )} */}
    </div>
    </>
  );
}

export default Home;
// import React from 'react'

// function HomeScreen() {
//   return (
//     <div>HomeScreen</div>
//   )
// }

// export default HomeScreen
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// function HomeScreen() {
//   const [productList, setProductList] = useState([]);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     loadusser();
//   }, []);
//   const loadusser = async () => {
//     var response = await axios.get("http://localhost:7000/api/product/getall", {
//       // headers: { accesstoken: token },
//     });
//     // setProductList(response.data);
//     console.log(response.data)
//   };
//   // const logout = async () => {
//   //   await localStorage.removeItem("token")
//   //   navigate("/");
//   // };
//   return (
//     <div>HomeScreen</div>
//   )
// }

// export default HomeScreen