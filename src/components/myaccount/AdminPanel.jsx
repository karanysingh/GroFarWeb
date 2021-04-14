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
  // console.log(formElement);
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
  const [Products, setProducts] = useState(products);
  // const [Temp,setTemp] = useState(tempData);
  const [formData, setformData] = useState(tempData);
  const fetchAndUpdate = () =>{
    axios
      .get(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/read"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        const data = response.data;
        setProducts(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      
  }
  useEffect(()=>{
    fetchAndUpdate();
    const interval=setInterval(()=>{
      fetchAndUpdate()
     },2000)
       
       
     return()=>clearInterval(interval)}, []
     );

  const [validated, setValidated] = useState(false);
  //post request to the database
  const createItem = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    var tmp = {
      id: Products[Products.length-1].id + 1,
      typeid: 2,
      available: true,
      icon: " ",
      machine: 1,
    };
    var Schema = JSON.stringify(tmp);
    var newData = JSON.stringify(formSerialize(form));
    var finalMerged = { ...tmp, ...formSerialize(form) };
    // console.log(finalMerged);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // console.log("called");
    setformData(formSerialize(form));

    axios
      .post(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/create",
        finalMerged
      )
      .then(
        (response) => {
          // console.log(response);
        },
        (error) => {
          console.log(error);
        },
      )
  };
  
  const handleDelete = (event) => {
    // console.log('delete')
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    var tempIndex;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name === ItemOnDropdown) {
        tempIndex = Products[i].id;
      } 
    }
    axios
    .delete(
      "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/delete/"+tempIndex
    )
    .then(
      (response) => {
        // console.log(response);
        console.log(
          "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/delete/"+tempIndex);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  const handleUpdate = (event) => {
    // console.log('update')
    event.preventDefault()
    const form = document.getElementById("item");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    var tempIndex,name;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name === ItemOnDropdown) {
        tempIndex = Products[i].id;
        name = Products[i].name;
      }
      var tmp = {
        id: Number(tempIndex),
        typeid: 2,
        available: true,
        icon: " ",
        machine: 1,
        name:name,
      };
      // console.log(formSerialize(form));
      var Schema = JSON.stringify(tmp);
      var newData = JSON.stringify(formSerialize(form));
      var finalMerged = { ...tmp, ...formSerialize(form) };
      delete finalMerged[""][""];
    }
    // console.log(finalMerged)
    axios
    .put(
      "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/update/"+tempIndex,finalMerged
    )
    .then(
      (response) => {
        // console.log(response);
        console.log(
          "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/update/"+tempIndex);
      },
      (error) => {
        console.log(error);
      }
    );


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
          {Products.map((product,index) => (
            <tr key={product.id}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                {product.weight} {product.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form id="item">
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
              name="price"
              type="number"
              placeholder="Enter New Price"
            />
          </Col>
          <Col>
            <Form.Control
              name="weight"
              type="number"
              placeholder="Enter New Quantity/Weight"
            />
          </Col>
          
          <Col>
            <Form.Control
              name="unit"
              type="text"
              placeholder="Enter New Unit"
            />
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={handleUpdate}
              type="submit"
            >
              Update
            </Button>
            <Button
              variant="primary"
              onClick={handleDelete}
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
              placeholder="Enter Quantity/Weight"
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
