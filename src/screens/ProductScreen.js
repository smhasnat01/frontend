import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Container } from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
  const id = useParams()
  const product = products.find((p) => p._id === id?.id)

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductScreen
