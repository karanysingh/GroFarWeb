import React, { useEffect, useState } from "react";
import {
  Table,
  DropdownButton,
  Dropdown,
  Form,
  Button,
  Col,
} from "react-bootstrap";
const formSerialize = (formElement) => {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  return values;
};
const axios = require("axios");
export default function AdminPanel() {
  var tempData = {
    id: 5,
    typeid: 2,
    unit: "kg",
    weight: 1,
    available: true,
    icon: " ",
    machine: 1,
    name: "Ginger",
    price: 19,
  };
  const products = [];
  const [ItemOnDropdown, setItemOnDropdown] = useState("Select Product");
  const [ItemOnDropdownDelete, setItemOnDropdownDelete] = useState(
    "Select Product"
  );
  const [Products, setProducts] = useState(products);
  // const [Temp,setTemp] = useState(tempData);
  const [formData, setformData] = useState(tempData);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/read"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        const data = response.data;
        setProducts(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const [validated, setValidated] = useState(false);
  //post request to the database
  const createItem = (event) => {
    const form = event.currentTarget;
    var tmp = {
      id: Products.length + 1,
      typeid: 2,
      available: true,
      icon: " ",
      machine: 1,
    };
    var Schema = JSON.stringify(tmp);
    var newData = JSON.stringify(formSerialize(form));
    var finalMerged = { ...tmp, ...formSerialize(form) };
    console.log(finalMerged);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log("called");
    setformData(formSerialize(form));

    axios
      .post(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/create",
        finalMerged
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  
  const handleDelete = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }}
  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    var tempIndex;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i] === ItemOnDropdown) {
        tempIndex = i;
      }
    }
    tempData = {
      id: tempIndex + 1,
      typeid: 2,
      unit: "kg",
      weight: 1,
      available: true,
      icon: " ",
      machine: 1,
      name: "Ginger",
      price: 19,
    };
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr key={-3}>
            <th>Sno.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                {product.weight} {product.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form>
        <Form.Row>
          <Col>
            <b>Modify Prices and Quantity</b>
          </Col>
          <Col>
            <DropdownButton id="dropdown-item-button" title={ItemOnDropdown}>
              <Dropdown.ItemText>Select Product</Dropdown.ItemText>
              {Products.map((product) => (
                <Dropdown.Item
                  key={product.id}
                  onClick={(e)=>{
                    setItemOnDropdown(product.name)
                    e.preventDefault()
                  }}
                  as="button"
                >
                  {product.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Enter New Price"
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Enter New Quantity"
            />
          </Col>
          
          <Col>
            <Form.Control
              type="number"
              placeholder="Enter New Unit"
            />
          </Col>
          <Col>
            <Button
              variant="primary"
              disabled={validated}
              onClick={() => handleUpdate}
              type="submit"
            >
              Update
            </Button>
            <Button
              variant="primary"
              onClick={() => handleDelete}
              type="submit"
            >
              Delete
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <br></br>
      <Form onSubmit={createItem}>
        <Form.Row>
          <Col>
            <b>Add New Product</b>
          </Col>
          <Col>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </Col>
          <Col>
            <Form.Control
              required
              type="number"
              name="price"
              placeholder="Enter Price"
            />
          </Col>
          <Col>
            <Form.Control
              required
              type="number"
              name="weight"
              placeholder="Enter Weight"
            />
          </Col>
          <Col>
            <Form.Control
              required
              name="unit"
              type="text"
              placeholder="Enter Unit"
            />
          </Col>
          <Col>
            <Button
              variant="primary"
              // disabled={validated}
              type="submit"
            >
              Add
            </Button>
            
          </Col>
        </Form.Row>
      </Form>
      <br></br>
    </div>
  );
}
