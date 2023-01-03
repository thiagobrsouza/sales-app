import { Col } from "react-bootstrap";
import { Layout } from "../../components/layout";
import { ProductForm } from "../../components/app/products/ProductForm";

function ProductAddUpdate() {
  return (
    <Layout>
      <Col xxl="5" xl="5" lg="5" md="7" sm="10" xs="12">
        <ProductForm />
      </Col>
    </Layout>
  )
}

export default ProductAddUpdate;