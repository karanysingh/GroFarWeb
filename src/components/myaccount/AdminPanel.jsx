import React from 'react';
import { Table } from 'react-bootstrap';

var products = [{
    name:'Seeds',
    price:'$2',
},{
    name:'Orange',
    price:'$3',
},{
    name:'Wheat',
    price:'$10',
},
]

export default function AdminPanel(){
return(
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
      products.forEach((product)=>{
          console.log(product.name)
          return(
            <tr>
                         <td>
                            product.name
                         </td>
             </tr>
            //   <tr>
            //       <td>
            //           Hi{product.name}
            //       </td>
            //   </tr>
          )})

    // <tr>
    //     <td>Test</td>
    //   {/* <td>{i}</td>
    //   <td>{product.name}</td>
    //   <td>{product.price}</td>
    //   <td></td> */}
    // </tr>
    // )})
      }
    
  </tbody>
</Table>

    </div>
);
};