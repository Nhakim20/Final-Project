import React, { useEffect, useState } from "react";
import ProtectedComponent from "../../layout/protected-component";
import { Table, Button } from "react-bootstrap";
import { getAllProducts, deleteProduct } from "../../services/api";
import ReactLoading from "react-loading";
import swal from "sweetalert";
import AddModalProduct from "../../components/modal/add-product-modal";
import EditModalProduct from "../../components/modal/edit-product-modal";

const DashboardAdmin = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [editDataProduct, setEditDataProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const fetchAllProducts = async () => {
    await setLoading(true);
    await getAllProducts()
      .then((response) => setDataProduct(response.data.data))
      .catch((error) => console.log(error));
    await setLoading(false);
  };

  const deleteProductById = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteProduct(id)
          .then((response) => console.log(response.data.data))
          .catch((error) => console.log(error));
        setRefresh(!refresh);
      }
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, [refresh]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <ProtectedComponent>
      <div>
        <AddModalProduct show={show} handleClose={handleClose} setRefresh={setRefresh} refresh={refresh} />
        <EditModalProduct showEdit={showEdit} handleCloseEdit={handleCloseEdit} setRefresh={setRefresh} refresh={refresh} editDataProduct={editDataProduct} />
        <h1>Dashboard Admin</h1>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="my-3" onClick={handleShow}>
            Add Product
          </Button>
        </div>
        {loading ? (
          <ReactLoading type="spinningBubbles" color="#0D6EFD" className="m-auto mt-5" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataProduct.map((product) => (
                <>
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.deskription}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-3"
                        onClick={() => {
                          handleShowEdit();
                          setEditDataProduct(product);
                        }}
                      >
                        Edit
                      </Button>
                      <Button variant="danger" className="me-3 mt-3" onClick={() => deleteProductById(product.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </ProtectedComponent>
  );
};

export default DashboardAdmin;
