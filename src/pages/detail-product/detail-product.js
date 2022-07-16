import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/api";
import ReactLoading from "react-loading";
import { Container } from "react-bootstrap";
import FigureProduct from "../../components/figure-product/figure-product";

const DetailProduct = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchProductById = async () => {
    await setLoading(true);
    await getProductsById(id)
      .then((response) => setDataProduct(response.data.data))
      .catch((error) => console.log(error));
    await setLoading(false);
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <ReactLoading type="spinningBubbles" color="#0D6EFD" className="m-auto mt-5" />
        ) : (
          <Container>
            <FigureProduct dataProduct={dataProduct} />
          </Container>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
