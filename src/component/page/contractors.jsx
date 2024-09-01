import React,{useEffect, useState} from 'react';
import "./css/contractors.css";
import { Card } from '../reusable/Card';
import AddNewContractorModal from '../modals/addContractor';
import CustomTable from '../reusable/customTags/customTable';
import axios from "axios";
import CustomButton from '../reusable/customTags/CustomButton';


const ContractorsPage = () => {
  const [tableData,setTableData]=useState([]);
  const [showAddContractorModal,setShowAddContractorModal]=useState(false);
  
  const tableHeader = [
    { label: "Supplier Name", value: "supplierName" },
    { label: "Product", value: "product" },
    { label: "Contact Name", value: "contractorNumber" },
    { label: "Email", value: "email" },
    { label: "Type", value: "type" },
    { label: "On the way", value: "onTheWay" }
];


  useEffect(()=>{
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.get("http://localhost:2000/contractors/")
        .then((result)=>{
            console.log("api resposne >>>>>", result.data);
            formatTableData(result.data);
        }).catch((error)=>{
            console.log("some error in product api", error);
        })
  },[showAddContractorModal]);

  function formatTableData(data){
    const newSampleTableData = data.map((item)=>{
        return{
          ...item,
          onTheWay: item.onTheWay === "" ? "-" : item.onTheWay, 
          colorCode:`${item.type === "Taking return" ? " greenTextColor":" redTextColor"}`
        }
    })
    setTableData(newSampleTableData);
  }


  return (
    <div style={{padding:"12px"}}>
      <Card className="inventory-tableSection">
          <div className='inventory-productTable-header'>
              <h3 className='cardHeader'>Suppliers</h3>
              <div className='productTable-header-buttons'>
                  <CustomButton onClick={()=>setShowAddContractorModal(true)}>Add Contractor</CustomButton>
                  <CustomButton> 
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#5D6679" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Filters
                  </CustomButton>
                  <CustomButton>Download all</CustomButton>
              </div>
          </div>

          <CustomTable tableData={tableData} tableHeader={tableHeader}/>
      </Card>
      <AddNewContractorModal showAddContractorModal={showAddContractorModal} setShowAddContractorModal={setShowAddContractorModal} setTableData={setTableData}/>
      </div>
  )
}

export default ContractorsPage
