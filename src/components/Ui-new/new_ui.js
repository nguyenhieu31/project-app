import TitleRender from './component/title/title';
import ProductsOutstanding from "../partial/product-outstanding/product-outstanding"
import ClassifyProducts from './component/classify-product/classify-product'
import ProductList from '../partial/product-list/product-list'
import Paging from './component/paging/paging'
import Footer from '../UI/footer/footer'
const NewUi = () => {
  return (
    <div className="main" style={{ padding: "10px 2rem", marginTop: "7rem" }}>
      <TitleRender />
      <div className="body">
        <div className="productsOutstanding-and-classifyOfProducts" style={{ backgroundColor: "#f4f4f4", padding: "10px", position: "relative" }}>
          <ProductsOutstanding />
          <ClassifyProducts />
        </div>
        <div id="ProductsList">
          <ProductList />
        </div>
        <div className="paging" style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <Paging />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default NewUi;