import useProductList from '../../../hook/useProductList'
import styled from 'styled-components';
const PagingStyle = styled.button`
  width: max-content;
  border: none;
  background-color: #000;
  cursor: pointer;
  padding: 15px;
  border-radius: 2rem;
  transform: scale(1);
  opacity: 1;
  transition: all 0.1s ease-in-out;
  &>span{
    font-size: 1.1rem;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
  }
  &:hover{
    transform: scale(1.05);
    opacity: 0.8;
  }
`
const Paging = () => {
  const { products } = useProductList();
  return (
    <>
      <span className="view-numbers" style={{ fontSize: "1.1rem", fontFamily: "'Open Sans', sans-serif", color: "#181818" }}>Viewing {products.length} of {products.length}</span>
      <PagingStyle className="view-text" >
        <span >View More Products</span>
      </PagingStyle>
    </>
  )
}
export default Paging;