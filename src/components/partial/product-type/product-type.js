import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const ListItem = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    left: 0;
    top: 88%;
    z-index: 1;
    .scroll-bar{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      max-height: 500px;
      overflow-y: scroll;
      background-color: #f4f4f4;
      height: 300px;
      padding: 1rem;
      &>.item-product-type{
        width: 145px;
        height: 135px;
        padding: 16px;
        border-radius: 1rem;
        background-color: #f9f9f9;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        a{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #181818;
        transition: all 0.1s ease-in-out;
        }
        a:hover{
          color: #181818cc;
        }
      }
    }
    .scroll-bar::-webkit-scrollbar {
      width: 6px;
      background-color: #F5F5F5;
    }
    .scroll-bar::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 3px;
    }
    .scroll-bar::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
    }
    &.active{
      display: block;
    }
`
const ProductType = ({ isClickProductType, ...props }) => {
  return (
    <>
      <>
        <h4>Product Type</h4>
        {isClickProductType ? (<KeyboardArrowUpIcon />) : (<ExpandMoreIcon />)}
      </>
      {isClickProductType ? (<ListItem className="list-item">
        <div className="scroll-bar ">
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
          <div className="item-product-type">
            <Link>
              <img src="https://www.popsockets.com/on/demandware.static/-/Sites-amer-storefront-catalog/default/dwce7bba28/categories/thumbnails/grips.png" alt="" />
              <span className="item-text">PopGrip</span>
            </Link>
          </div>
        </div>
      </ListItem>) : ""}
    </>
  )
}
export default ProductType;