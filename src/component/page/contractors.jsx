import React,{useEffect, useState} from 'react';
import "./css/contractors.css";
import { Card } from '../reusable/Card';
import AddNewContractorModal from '../modals/addContractor';


const contractorData = [
  {
      supplierName: "Richard Martin",
      product: "Product 1",
      supplierContactNumber: "7687764556",
      supplierEmail: "richard@gmail.com",
      type: "Taking Return",
      onTheWay: 13,
  },
  {
      supplierName: "Emily Clark",
      product: "Product 2",
      supplierContactNumber: "3456789012",
      supplierEmail: "emily.clark@example.com",
      type: "Not Taking Return",
      onTheWay: 8,
  },
  {
      supplierName: "John Doe",
      product: "Product 3",
      supplierContactNumber: "9876543210",
      supplierEmail: "john.doe@example.com",
      type: "Taking Return",
      onTheWay: "",
  },
  {
      supplierName: "Jane Smith",
      product: "Product 4",
      supplierContactNumber: "1234567890",
      supplierEmail: "jane.smith@example.com",
      type: "Not Taking Return",
      onTheWay: "",
  },
  {
      supplierName: "Michael Brown",
      product: "Product 5",
      supplierContactNumber: "2345678901",
      supplierEmail: "michael.brown@example.com",
      type: "Taking Return",
      onTheWay: 5,
  },
  {
      supplierName: "Sarah Johnson",
      product: "Product 6",
      supplierContactNumber: "3456789012",
      supplierEmail: "sarah.johnson@example.com",
      type: "Not Taking Return",
      onTheWay: 10,
  },
  {
      supplierName: "Chris Davis",
      product: "Product 7",
      supplierContactNumber: "4567890123",
      supplierEmail: "chris.davis@example.com",
      type: "Taking Return",
      onTheWay: "",
  },
  {
      supplierName: "Patricia Miller",
      product: "Product 8",
      supplierContactNumber: "5678901234",
      supplierEmail: "patricia.miller@example.com",
      type: "Not Taking Return",
      onTheWay: 7,
  },
  {
      supplierName: "David Wilson",
      product: "Product 9",
      supplierContactNumber: "6789012345",
      supplierEmail: "david.wilson@example.com",
      type: "Taking Return",
      onTheWay: "",
  },
  {
      supplierName: "Laura White",
      product: "Product 10",
      supplierContactNumber: "7890123456",
      supplierEmail: "laura.white@example.com",
      type: "Not Taking Return",
      onTheWay: 12,
  }
];

const ContractorsPage = () => {
  const [tableData,setTableData]=useState(contractorData);
  const [showAddContractorModal,setShowAddContractorModal]=useState(false);

  useEffect(()=>{
    const newSampleTableData = tableData.map((item)=>{
        return{
          ...item,
          onTheWay: item.onTheWay === "" ? "-" : item.onTheWay, 
          colorCode:`${item.type === "Taking Return" ? "#36C045":"#F36F7C"}`
        }
    })
    console.log("useeffect");
    setTableData(newSampleTableData);
  },[setShowAddContractorModal]);


  return (
    <div style={{padding:"12px"}}>
      <Card className="inventory-tableSection">
          <div className='inventory-productTable-header'>
              <h3 className='cardHeader'>Suppliers</h3>
              <div className='productTable-header-buttons'>
                  <button onClick={()=>setShowAddContractorModal(true)}>Add Contractor</button>
                  <button> 
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#5D6679" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Filters
                  </button>
                  <button>Download all</button>
              </div>
          </div>

          <table className="inventory-productTable">
              <thead>
                  <tr>
                      <th>Supplier Name</th>
                      <th>Product</th>
                      <th>Contact Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>On the way</th>
                  </tr>
              </thead>
              <tbody>
                  {tableData.map((item,index)=>{
                      return <tr key={index}>
                          <td>{item.supplierName}</td>
                          <td>{item.product}</td>
                          <td>{item.supplierContactNumber}</td>
                          <td>{item.supplierEmail}</td>
                          <td style={{color:item.colorCode}}>{item.type}</td>
                          <td>{item.onTheWay}</td>
                      </tr>
                  })}
                  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr> {/*to get the empty same before the footer */}
              </tbody>
              <tfoot className='productTable-footer'>
                  <tr>
                      <td>
                          <button>
                              Previous
                          </button>
                      </td>
                      <td colSpan="4" style={{textAlign:"center"}}> Page 1 of 10 </td>
                      <td>
                          <button>
                              Next
                          </button>
                      </td>
                  </tr>
              </tfoot>
          </table>
      </Card>
      <AddNewContractorModal showAddContractorModal={showAddContractorModal} setShowAddContractorModal={setShowAddContractorModal} setTableData={setTableData}/>
      </div>
  )
}

export default ContractorsPage
