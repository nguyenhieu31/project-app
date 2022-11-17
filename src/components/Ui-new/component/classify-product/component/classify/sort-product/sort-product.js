import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
const ListOptions = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 1;
  top: 96%;
  background-color: #fff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 4rem;
  border-radius: 10px;
  padding: 0;
  li{
    color: #181818;
    width: 100%;
    text-align: center;
    transition: all 0.1s ease-in-out;
    margin: 0 1.5rem;
  }
  li:hover{
    background-color: #3091E7;
    color: #fff;

  }
`
const SortProduct = ({ isClickSortProduct, ...props }) => {
  return (
    <>
      <>
        <h4>Sort By:</h4>
        {isClickSortProduct ? (<div className="section active">
          <span>Best Sellers</span>
          <ExpandMoreIcon />
        </div>) : (<div className="section">
          <span>Best Sellers</span>
          <ExpandMoreIcon />
        </div>)}
      </>
      {isClickSortProduct ? (<ListOptions className="list-options">
        <li className="item" style={{ borderRadius: "10px 10px 0 0" }}>
          <span>Bests sellers</span>
        </li>
        <li className="item">
          <span>Featured</span>
        </li>
        <li className="item">
          <span>Price Low To High</span>
        </li>
        <li className="item">
          <span>Price High To Low</span>
        </li>
        <li className="item">
          <span>Recommended</span>
        </li>
        <li className="item" style={{ borderRadius: "0 0 10px 10px" }}>
          <span>Newest</span>
        </li>
      </ListOptions>) : ""}

    </>
  )
}
export default SortProduct;