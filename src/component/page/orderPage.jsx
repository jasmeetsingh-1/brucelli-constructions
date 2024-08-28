import React,{useState,useEffect} from "react";
import "./css/orderPage.css";
import { Card } from "../reusable/Card";

function OrderPage(){
    let sampleTableData = [
        {
            product: "Product 1",
            orderValue: "£4306",
            quantity: "43 units",
            orderID: "7535",
            expectedDeliveryDate: "11/12/22",
            status: "Delayed",
        },
        {
            product: "Product 2",
            orderValue: "£2890",
            quantity: "22 units",
            orderID: "7536",
            expectedDeliveryDate: "12/01/23",
            status: "Confirmed",
        },
        {
            product: "Product 3",
            orderValue: "£1575",
            quantity: "15 units",
            orderID: "7537",
            expectedDeliveryDate: "15/01/23",
            status: "Returned",
        },
        {
            product: "Product 4",
            orderValue: "£2100",
            quantity: "30 units",
            orderID: "7538",
            expectedDeliveryDate: "20/01/23",
            status: "Confirmed",
        },
        {
            product: "Product 5",
            orderValue: "£1234",
            quantity: "12 units",
            orderID: "7539",
            expectedDeliveryDate: "25/01/23",
            status: "Delayed",
        },
        {
            product: "Product 6",
            orderValue: "£4500",
            quantity: "50 units",
            orderID: "7540",
            expectedDeliveryDate: "30/01/23",
            status: "Returned",
        },
        {
            product: "Product 7",
            orderValue: "£1890",
            quantity: "18 units",
            orderID: "7541",
            expectedDeliveryDate: "05/02/23",
            status: "Confirmed",
        },
        {
            product: "Product 8",
            orderValue: "£3120",
            quantity: "25 units",
            orderID: "7542",
            expectedDeliveryDate: "10/02/23",
            status: "Delayed",
        },
        {
            product: "Product 9",
            orderValue: "£2785",
            quantity: "20 units",
            orderID: "7543",
            expectedDeliveryDate: "15/02/23",
            status: "Returned",
        },
        {
            product: "Product 10",
            orderValue: "£3550",
            quantity: "35 units",
            orderID: "7544",
            expectedDeliveryDate: "20/02/23",
            status: "Confirmed",
        },
    ];
    


    useEffect(()=>{
        const newSampleTableData = tableData.map((item)=>{
            return {
                ...item,
                colorCode:`${item.status === "Delayed" ? "#F79009": item.status === "Confirmed" ? "#1570EF": item.status === "Returned" ? "#667085":""}`,
            }
        })
        console.log("useeffect");
        setTableData(newSampleTableData);
    },[]);


    const [tableData, setTableData] = useState(sampleTableData);
    return (
        <div className='inventory-mainHolder'>
          <Card className="inventory-headerSection">
            <h3 className='cardHeader'>Overall Orders</h3>
            <div className='overall-inventory-cardHolder'>
                <div className='overall-inventory-card'>
                    <h5 style={{color:"#1570EF"}}>Total Orders</h5>
                    <section className='overall-inventory-cardBody'>
                        <div>
                            <span>14</span>
                            <span className='inventory-cardMetaData'>Last 7 days</span>
                        </div>
                    </section>
                </div>
                <div className='overall-inventory-card'>
                    <h5 style={{color:"#E19133"}}>Total Received</h5>
                    <section className='overall-inventory-cardBody'>
                        <div>
                            <span>32</span>
                            <span className='inventory-cardMetaData'>Last 7 days</span>
                        </div>
                        <div>
                            <span>£25000</span>
                            <span className='inventory-cardMetaData'>Revenue</span>
                        </div>
                    </section>
                </div>
                <div className='overall-inventory-card'>
                    <h5 style={{color:"#845EBC"}}>Top Returned</h5>
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
                    <h5 style={{color:"#F36960"}}>On the way</h5>
                    <section className='overall-inventory-cardBody'>
                        <div>
                            <span>12</span>
                            <span className='inventory-cardMetaData'>Ordered</span>
                        </div>
                        <div>
                            <span>2</span>
                            <span className='inventory-cardMetaData'>Not In Stock</span>
                        </div>
                    </section>
                </div>
            </div>
          </Card>
    
          <Card className="inventory-tableSection">
            <div className='inventory-productTable-header'>
                <h3 className='cardHeader'>Orders</h3>
                <div className='productTable-header-buttons'>
                    {/* <button onClick={()=>setShowAddProductModal(true)}>Add Product</button> */}
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
                        <th>Order Value</th>
                        <th>Quantity</th>
                        <th>Order ID</th>
                        <th>Expected Delivery</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.orderValue}</td>
                            <td>{item.quantity}</td>
                            <td>{item.orderID}</td>
                            <td>{item.expectedDeliveryDate}</td>
                            <td style={{color:item.colorCode}}>{item.status}</td>
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
          {/* <AddProductModal setTableData={setTableData} showAddProductModal={showAddProductModal} setShowAddProductModal={setShowAddProductModal}/> */}
        </div>
      )
}

export default OrderPage;