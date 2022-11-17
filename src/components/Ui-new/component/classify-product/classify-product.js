import NumberProduct from './component/number-product/number-product'
import Classify from './component/classify/classify'
const ClassifyProducts = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: "0 2rem", alignItems: 'center', marginTop: "4rem" }}>
      <NumberProduct />
      <Classify />
    </div>
  )
}
export default ClassifyProducts;