import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { Container, Card } from "react-bootstrap";
import Skleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "../../assets/styles/index.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGetAllProducts = async () => {
    setLoading(true);
    await getAllProducts()
      .then((response) => setData(response.data.data))
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchGetAllProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skleton heaight={350} />
        </div>
        <div className="col-md-3">
          <Skleton heaight={350} />
        </div>
        <div className="col-md-3">
          <Skleton heaight={350} />
        </div>
        <div className="col-md-3">
          <Skleton heaight={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Link to={`/detail-product/${product.id}`} className="text-decoration-none">
                  <Card className="card-component h-100 text-center p4" key={product.id}>
                    <Card.Img variant="top" src={product.image} alt={product.name} height="250px" />
                    <Card.Body>
                      <Card.Title className="mb-0">{product.name.substring(0, 12)}...</Card.Title>
                      <Card.Text className="lead fw-bold">Rp{product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Container className="my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
      </Container>
    </div>
  );
};

export default Products;
