/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useProductOutstanding from '../../../hook/useProductOutstanding';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
const Products = styled.ul`
  list-style: none;
  display: -webkit-box;
  min-width: 100%;
  cursor: pointer;
  padding: 0 0 1rem 0;
  margin: 0;
  transition: all 0.1s ease-in-out;
  transition-duration: 0.3s;
  transform: translate3d(0%, 0px, 0px);
  &>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100%/6);
    gap: 1rem;
    img{
      width: 75px;
    }
    a{
      text-decoration: none;
      color: #181818;
      font-weight: 600;
      font-family: 'Open Sans', sans-serif;
    }
    a:hover{
      color: #181818b5;
    }
  }
`
const ProductsOutstanding = () => {
  const { productOutstanding } = useProductOutstanding();
  const [location, setLocation] = useState(0);
  let countItemHidden = 0;
  function getCountItemHidden() {
    for (let i = 6; i < productOutstanding.length; i++) {
      countItemHidden += 1;
    }
  }
  function handelClickNextProduct() {
    const productList = document.querySelector('.products');
    const x = location + (-16.6667);
    setLocation(x);
    productList.style.transform = `translate3d(${x}%,0px,0px)`
  }
  function handelClickPrevProduct() {
    const productList = document.querySelector('.products');
    const x = location - (-16.6667);
    setLocation(x);
    productList.style.transform = `translate3d(${x}%,0px,0px)`
  }
  return (
    <div style={{ minWidth: "100%", position: "relative", borderBottom: "1px solid #18181833" }}>
      <div style={{ overflow: 'hidden' }}>
        <Products className="products">
          {getCountItemHidden()}
          {productOutstanding.map((product, index) => {
            return (
              <li className="product-item" key={index}>
                <img src={product.image} alt='...' />
                <Link className="product-name">{product.name}</Link>
              </li>
            )
          })
          }
        </Products>
      </div>
      <>
        {location === 0 ? "" : (<IconButton style={{
          position: 'absolute',
          top: "50%",
          left: "0",
          transform: "translateY(-50%)"
        }}
          onClick={() => { handelClickPrevProduct() }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>)}
        {location === (countItemHidden * (-16.6667)) ? "" : (
          <IconButton style=
            {{
              position: 'absolute',
              top: "50%",
              right: "0",
              transform: "translateY(-50%)"
            }}
            onClick={() => { handelClickNextProduct() }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </>
    </div>
  );
}
export default ProductsOutstanding;