import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const ListPriceProduct = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  padding: 0 0 1rem 0;
  background-color: #f4f4f4;
  flex-wrap: wrap;
  z-index: 99;
  .price{
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #e0cfcf9e;
    &>a{
      text-decoration: none;
      color: #181818;
    }
  }
`
const ProductPrice = ({ isClickProductPrice, ...props }) => {
  return (
    <>
      <>
        <h4>Price</h4>
        {isClickProductPrice ? (<KeyboardArrowUpIcon />) : (<ExpandMoreIcon />)}
      </>
      {isClickProductPrice ? (<ListPriceProduct>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
        <li className="price">
          <Link><span>$0.00-$9.99</span></Link>
        </li>
      </ListPriceProduct>) : ""}

    </>
  );
}
export default ProductPrice;