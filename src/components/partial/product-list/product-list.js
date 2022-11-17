// import useProductList from '../../../../hook/useProductList';
import ProductCard from '../product-card/product-card';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/products/productSlice'
const StyleProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
  margin-top: 5rem;
`
const ProductList = () => {
  // const { products } = useProductList();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { products } = useSelector((state) => { return state.products });
  return (
    <StyleProducts>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </StyleProducts>
  )
}
export default ProductList;