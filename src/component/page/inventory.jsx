import React, { useEffect, useState } from 'react';
import "./css/inventory.css";
import { Card } from '../reusable/Card';
import AddProductModal from '../modals/addProduct';
import InventoryProductComponent from './inventoryProductComponent/inventoryProductComponent';
import CustomTable from '../reusable/customTags/customTable';
import axios from 'axios';

const Inventory = () => {

    const [tableData, setTableData] = useState([]);
    const [showAddProductModal,setShowAddProductModal] = useState(false);

    const tableHeader = [
        { label: "Product", value: "productName" },
        { label: "Buying Price", value: "buyingPrice" },
        { label: "Quantity", value: "quantity" },
        { label: "Unit", value: "unit" },
        { label: "Last Ordered", value: "lastOrderedDate" },
        { label: "Availability", value: "productAvailablity" }
    ];
    

    useEffect(()=>{
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.get("http://localhost:2000/products/")
        .then((result)=>{
            console.log("api resposne >>>>>", result.data);
            formatTableData(result.data);
        }).catch((error)=>{
            console.log("some error in product api", error);
        })
    },[showAddProductModal]);

    function formatTableData(data){
        const newSampleTableData = data.map((item) => {
            const productAvailablity = 
                item.quantity > item.threshOldValue ? "In-stock" :
                item.quantity == 0 ? "Out of stock":
                item.quantity <= item.threshOldValue ? "Low stock" : "";
        
            const colorCode = 
                productAvailablity === "Low stock" ? "orangeTextColor" : 
                productAvailablity === "In-stock" ? "greenTextColor" : 
                productAvailablity === "Out of stock" ? "redTextColor" : "";
        
            return {
                ...item,
                productAvailablity,
                colorCode
            };
        });
        
        setTableData(newSampleTableData);
    }


  return (
    <div className='inventory-mainHolder'>
      <Card className="inventory-headerSection">
        <h3 className='cardHeader'>Overall Inventory</h3>
        <div className='overall-inventory-cardHolder'>
            <div className='overall-inventory-card'>
                <h5 style={{color:"#1570EF"}}>Categories</h5>
                <section className='overall-inventory-cardBody'>
                    <div>
                        <span>14</span>
                        <span className='inventory-cardMetaData'>Last 7 days</span>
                    </div>
                </section>
            </div>
            <div className='overall-inventory-card'>
                <h5 style={{color:"#E19133"}}>Total Products</h5>
                <section className='overall-inventory-cardBody'>
                    <div>
                        <span>868</span>
                        <span className='inventory-cardMetaData'>Last 7 days</span>
                    </div>
                    <div>
                        <span>£25000</span>
                        <span className='inventory-cardMetaData'>Revenue</span>
                    </div>
                </section>
            </div>
            <div className='overall-inventory-card'>
                <h5 style={{color:"#845EBC"}}>Top Selling</h5>
                <section className='overall-inventory-cardBody'>
                    <div>
                        <span>5</span>
                        <span className='inventory-cardMetaData'>Last 7 days</span>
                    </div>
                    <div>
                        <span>£2500</span>
                        <span className='inventory-cardMetaData'>Cost</span>
                    </div>
                </section>
            </div>
            <div className='overall-inventory-card'>
                <h5 style={{color:"#F36960"}}>Low Stocks</h5>
                <section className='overall-inventory-cardBody'>
                    <div>
                        <span>12</span>
                        <span className='inventory-cardMetaData'>Ordered</span>
                    </div>
                    <div>
                        <span>2</span>
                        <span className='inventory-cardMetaData'>Not in stock</span>
                    </div>
                </section>
            </div>
        </div>
      </Card>

      <Card className="inventory-tableSection">
        <div className='inventory-productTable-header'>
            <h3 className='cardHeader'>Products</h3>
            <div className='productTable-header-buttons'>
                <button onClick={()=>setShowAddProductModal(true)}>Add Product</button>
                <button> 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#5D6679" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Filters
                </button>
                <button>Download all</button>
            </div>
        </div>

        <CustomTable tableHeader={tableHeader} tableData={tableData}/>
      </Card>
      <AddProductModal setTableData={setTableData} showAddProductModal={showAddProductModal} setShowAddProductModal={setShowAddProductModal}/> 
      {/* <InventoryProductComponent/> */}
    </div>
  )
}

export default Inventory
