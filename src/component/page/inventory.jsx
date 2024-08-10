import React, { useEffect, useState } from 'react';
import "./css/inventory.css";
import { Card } from '../reusable/Card';
import AddProductModal from '../modals/addProduct';

const Inventory = () => {
    let sampleTableData = [
        {
            product: "Concrete Frames",
            buyingPrice: "£43",
            quantity: "43",
            productUnit: "10m x 5m x 12m",
            lastOrderedDate: "11/12/22",
            productAvailablity: "In-stock",
        },
        {
            product: "Glass Panels",
            buyingPrice: "£75",
            quantity: "50",
            productUnit: "2m x 3m",
            lastOrderedDate: "12/11/22",
            productAvailablity: "In-stock",
        },
        {
            product: "Aluminum Sheets",
            buyingPrice: "£35",
            quantity: "70",
            productUnit: "3m x 4m",
            lastOrderedDate: "01/01/23",
            productAvailablity: "Out of stock",
        },
        {
            product: "Cement Bags",
            buyingPrice: "£7",
            quantity: "500",
            productUnit: "50kg",
            lastOrderedDate: "15/01/23",
            productAvailablity: "Low stock",
        },
        {
            product: "Bricks",
            buyingPrice: "£1",
            quantity: "1000",
            productUnit: "Standard",
            lastOrderedDate: "05/02/23",
            productAvailablity: "In-stock",
        },
        {
            product: "Paint Cans",
            buyingPrice: "£15",
            quantity: "200",
            productUnit: "5L",
            lastOrderedDate: "25/02/23",
            productAvailablity: "Low stock",
        },
        {
            product: "PVC Pipes",
            buyingPrice: "£10",
            quantity: "150",
            productUnit: "2m",
            lastOrderedDate: "10/03/23",
            productAvailablity: "Out of stock",
        }
    ];
    const [tableData, setTableData] = useState(sampleTableData);
    const [showAddProductModal,setShowAddProductModal] = useState(false);
    
    
    useEffect(()=>{
        const newSampleTableData = tableData.map((item)=>{
            return {
                ...item,
                colorCode:`${item.productAvailablity === "Low stock" ? "#E19133": item.productAvailablity === "In-stock" ? "#10A760": item.productAvailablity === "Out of stock" ? "#DA3E33":""}`,
            }
        })
        console.log("useeffect");
        setTableData(newSampleTableData);
    },[]);

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

        <table className="inventory-productTable">
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Buying Price</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Last Ordered</th>
                    <th>Availablity</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.buyingPrice}</td>
                        <td>{item.quantity}</td>
                        <td>{item.productUnit}</td>
                        <td>{item.lastOrderedDate}</td>
                        <td style={{color:item.colorCode}}>{item.productAvailablity}</td>
                    </tr>
                })}
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
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
      <AddProductModal showAddProductModal={showAddProductModal} setShowAddProductModal={setShowAddProductModal}/>
    </div>
  )
}

export default Inventory
