import React, { useEffect, useState } from "react";
import {
  Table,
  DropdownButton,
  Dropdown,
  Form,
  Button,
  Col,Row
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
    // for (var i = 0; i < Products.length; i++) {
    //   if (Products[i].name === ItemOnDropdown) {
    //     tempIndex = Products[i].id;
    //     name = Products[i].name;
    //   }
    // name = Products[id === id].name;
    tempIndex = id;
      var tmp = {
        id: Number(tempIndex),
        typeid: 2,
        available: true,
        icon: " ",
        machine: 1,
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
    <div>
      <Row>
        <Col>Sno.</Col>
        <Col>Name</Col>
        <Col>Price</Col>
        <Col>Weight/Quantity</Col>
        <Col>Unit</Col>
        <Col>Availablity</Col>
        <Col>Modify</Col>
        <Col>Delete</Col>
      </Row>
          {Products.map((product,index) => (
          <Form id={product.id}>
              <Form.Row key={product.id}>
              <Col><Form.Control type="number" placeholder={index+1} readOnly /></Col>
              <Col><Form.Control className="formfields" name="name" type="text" defaultValue={product.name} readOnly={READ} /></Col>
              <Col><Form.Control className="formfields" name="price" type="number" defaultValue={product.price} readOnly={READ} /></Col>
              <Col><Form.Control className="formfields" name="weight"type="number" defaultValue={product.weight} readOnly={READ} /></Col>
              {/* <Col><Form.Control type="text" placeholder={product.purchaseprice} readOnly /></Col> */}
              {/* <Col><Form.Control type="text" placeholder={product.sellprice} readOnly /></Col> */}
              {/* <Col><Form.Control className="formfields" name="unit" type="text" defaultValue={product.unit} readOnly={true} /></Col> */}
              <Col><Form.Control className="formfields" name="unit" type="text" defaultValue={product.unit} readOnly={READ} /></Col>
              <Col><Form.Control className="formfields" name="available" type="text" defaultValue={product.available} readOnly={READ} /></Col>
              
              <Col>
              <Button
              variant="primary"
              onClick={(e)=>{e.preventDefault()
                handleUpdate(product.id)}}
              type="submit"
            >
              Update
            </Button>
                </Col>
              <Col>
              
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
        {/* </tbody> */}
<br></br>
      {/* <Form id="item"> */}
        {/* <Form.Row>
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
      </Form> */}
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
            <Form.Control
              required
              name="available"
              type="text"
              placeholder="Enter Availablity"
            />
          </Col>
          <Col>
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
  );
}
