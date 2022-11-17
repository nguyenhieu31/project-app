import axios from "axios";
import { useEffect, useState } from "react";
const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const url = "http://localhost:3004/products";
      try {
        const res = await axios.get(url);
        if (res && res.data) {
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return { products, loading };
}
export default useProductList;