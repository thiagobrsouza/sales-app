import { Col } from "react-bootstrap";
import { ProductList } from "../../components/app/products/ProductList";
import { Layout } from "../../components/layout";

function Products() {
  return (
    <Layout>
      <Col>
        <ProductList />
      </Col>
    </Layout>
  )
}

export default Products;