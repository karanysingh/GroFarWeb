import React, { useEffect, useState } from "react";
import './admin.css';
import {
  Form,
  Button,
  Col,Row, Container
} from "react-bootstrap";
const formSerialize = (formElement) => {
  // console.log(formElement);
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    // if(inputs[i].value=""){
    // values[inputs[i].name] = inputs[i].placeholder;
    // }else{
    values[inputs[i].name] = inputs[i].value;
    // }
  }
  return values;
};
const axios = require("axios");
var x = window.matchMedia("(max-width: 576px)")
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
  const dblClickListener = ()=>{
    let formfields = document.getElementsByClassName('formfields');
    for(let i=0;i<formfields.length;i++){
      console.log('made');
      // formfields[i].style.boxShadow = '0px 20px 20px 0px red';
    document.getElementsByClassName('formfields')[i].addEventListener('dblclick', function(e){
      e.preventDefault()
      console.log(this);
      let x = this.readOnly?this.removeAttribute('readOnly'):this.setAttribute('readOnly',true);
    }, false);
  }
  }
  useEffect(()=>{
    fetchAndUpdate();
    // dblClickListener()
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
    console.log(Products.length!=0 ? (Products[Products.length-1].id + 1):1);
    var tmp = {
      id: (Products.length!=0 ? ( parseInt(Products[Products.length-1].id) +  parseInt(1)):1),
      typeid: 2,
      available: true,
      icon: "https://cdn.onlinewebfonts.com/svg/img_231353.png",
      machine: 1,
      purchasePrice: 20,
      purchaseQuantity:6,
      imageLink:'https://i.cbc.ca/1.3328214.1497027575!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/potatoes.jpg',

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
    
    delete finalMerged[""][""];
    console.log(finalMerged);
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
  
  const handleDelete = (id) => {
    // console.log('delete')
    // event.preventDefault();
    const form = document.getElementById(id);
    if (form.checkValidity() === false) {
      // event.preventDefault();
      // event.stopPropagation();
    }
    var tempIndex = id;
    // for (var i = 0; i < Products.length; i++) {
    //   if (Products[i].name === ItemOnDropdown) {
    //     tempIndex = Products[i].id;
    //   } 
    // }
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
  
  var READ = false
  const handleUpdate = (id) => {
    // console.log(this);
    console.log('update')
    const form = document.getElementById(id);
    console.log(form,id);
    
    var tempIndex;
    tempIndex = id;
      var tmp = {
        id: Number(tempIndex),
        typeid: 2,
        available: true,
        ico: "https://i.cbc.ca/1.3328214.1497027575!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/potatoes.jpg",
        machine: 1,
      purchasePrice: 20,
      purchaseQuantity:6,
      imageLink:'https://i.cbc.ca/1.3328214.1497027575!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/potatoes.jpg',
      };
      console.log(formSerialize(form));
      var Schema = JSON.stringify(tmp);
      var newData = JSON.stringify(formSerialize(form));
      var finalMerged = { ...tmp, ...formSerialize(form) };
      delete finalMerged[""][""];
    // }
    console.log(finalMerged)
    axios
    .put(
      "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/update/"+tempIndex,finalMerged
    )
    .then(
      (response) => {
        console.log(response);
        console.log(
          "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/update/"+tempIndex);
      },
      (error) => {
        console.log(error);
      }
    );


  };
  return (
    <Container>
    <div>
      <Row className="adminHeadings">
        <Col md={8} lg={1}>Sno.</Col>
        <Col md={8} lg={1}>Name</Col>
        <Col md={8} lg={1}>Price</Col>
        <Col md={8} lg={1}>Weight/Quantity</Col>
        <Col md={8} lg={1}>Purchase Price</Col>
        <Col md={8} lg={1}>Purchase Quantity</Col>
        <Col md={8} lg={1}>Net Purchase</Col>
        <Col md={8} lg={1}>Unit</Col>
        <Col md={8} lg={1}>Availablity</Col>
        <Col md={8} lg={1}>Image Link</Col>
        <Col md={8} lg={1}>Modify</Col>
        <Col md={8} lg={1}>Delete</Col>
      </Row>
          {Products.map((product,index) => (
          <Form id={product.id}>
              <Form.Row className="productsForm" key={product.id}>
              <Col md={8} lg={1}><Form.Control type="number" placeholder={index+1} readOnly /></Col>
              <Col  lg={1} md={8}><Form.Control className="formfields" name="name" type="text" defaultValue={product.name} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control className="formfields" name="price" type="number" defaultValue={product.price} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control className="formfields" name="weight"type="number" defaultValue={product.weight} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control type="text" placeholder={product.purchasePrice} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control type="text" placeholder={product.purchaseQuantity} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control type="text" placeholder={product.purchaseQuantity*product.purchasePrice} readOnly={READ} /></Col>
              {/* <Col><Form.Control className="formfields" name="unit" type="text" defaultValue={product.unit} readOnly={true} /></Col> */}
              <Col  lg={1} md={8}><Form.Control className="formfields" name="unit" type="text" defaultValue={product.unit} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control className="formfields" name="available" type="text" defaultValue={product.available} readOnly={READ} /></Col>
              <Col  lg={1} md={8}><Form.Control className="formfields" name="imageLink" type="text" defaultValue={product.imageLink} readOnly={READ} /></Col>
              
              <Col lg={1} md={4}>
              <Button
              variant="primary"
              onClick={(e)=>{e.preventDefault()
                handleUpdate(product.id)}}
              type="submit"
            >
              Update
            </Button>
                </Col>
              <Col lg={1} md={4}>
              
            <Button
              variant="danger"
              color="red"
              onClick={(e)=>{e.preventDefault()
                handleDelete(product.id)}}
              type="submit" >
                <i className="fa fa-times"></i>
            </Button>
              </Col>
            </Form.Row>
              </Form>
          ))}
<br></br>
     
      <br></br>
      <Form onSubmit={createItem}>
        <Form.Row  className="productsForm">
          <Col lg={1} md={4}>
            <b>Add New Product</b>
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="number"
              name="price"
              placeholder="Enter Price"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="number"
              name="weight"
              placeholder="Enter Quantity/Weight"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="number"
              name="purchasePrice"
              placeholder="Enter Purchase Price"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="number"
              name="purchaseQuantity"
              placeholder="Enter Purchase Quantity"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              type="text"
              name="imageLink"
              placeholder="Enter Image Link"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              name="unit"
              type="text"
              placeholder="Enter Unit"
            />
          </Col>
          <Col lg={1} md={4}>
            <Form.Control
              required
              name="available"
              type="text"
              placeholder="Enter Availablity"
            />
          </Col>
          <Col lg={1} md={4}>
            <Button
              variant="primary"
              type="submit"
            >
              Add
            </Button>
            
          </Col>
        </Form.Row>
      </Form>
      <br></br>
    </div>
    </Container>
  );
}
