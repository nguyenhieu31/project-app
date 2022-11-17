import NumberProduct from '../../partial/number-product/number-product'
import Classify from '../classify/classify'
const ClassifyProducts = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: "0 2rem", alignItems: 'center', marginTop: "4rem" }}>
      <NumberProduct />
      <Classify />
    </div>
  )
}
export default ClassifyProducts;