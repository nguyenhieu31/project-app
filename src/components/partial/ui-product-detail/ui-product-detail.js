/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ExperienceRegion from '../../UI/experience-region/experience-region';
import ExperienceCommerce from '../../UI/experience-commerce/experience-commerce';
import InformationProductAndPaysMethod from '../information-product-&&-pays-method/informationProduct-&&-paysMethod';
import Feedback from '../../UI/feedback/feedback';
import ProductRecommend from '../../UI/product-recommend/product-recommend'
const NavigateStyle = styled.a`
  font-family: 'Open Sans', sans-serif;
  &>a{
    text-decoration: none;
    font-size: 0.8rem;
    color: #181818;
  }
  &>a:hover{
    text-decoration: underline;
  }
`
const ProductDetailUi = () => {
  const { productDetail, loading } = useSelector((state) => { return state.productDetail });
  console.log(productDetail);
  const key = "productDetail";
  return (
    <>
      <NavigateStyle>
        <Link to='/new'>
          <span className="text">New</span>
        </Link>
      </NavigateStyle>
      <InformationProductAndPaysMethod productDetail={productDetail} loading={loading} keyValue={key} />
      <ExperienceRegion />
      <ExperienceCommerce />
      <Feedback />
      <ProductRecommend />
    </>
  )
}
export default ProductDetailUi;