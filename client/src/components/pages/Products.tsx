import React, { useState, useEffect } from "react";
import LoadingModal from "../../layout/LoadingModal";
import Nav from "../../layout/Nav";
import { Table, Button } from "semantic-ui-react";
import "./pages.styles.css";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44368/ProductMicroservice")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoadingModal />
  ) : (
    <>
      <Nav />
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Product Name</Table.HeaderCell>
            <Table.HeaderCell>Product Price</Table.HeaderCell>
            <Table.HeaderCell>Available Stock</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((item: any) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.stockAvailable}</Table.Cell>
              <Table.Cell className="eighty-width" onClick={(e: any) => console.log(item)}>
                <Button primary size="tiny">
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell className="eighty-width" onClick={(e: any) => console.log(item.id)}>
                <Button secondary size="tiny">
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default Products;
