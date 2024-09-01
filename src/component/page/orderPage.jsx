import React,{useState,useEffect} from "react";
import "./css/orderPage.css";
import { Card } from "../reusable/Card";
import AddNewOrderModal from "../modals/addOrder";
import CustomTable from "../reusable/customTags/customTable";
import axios from "axios";
import CustomButton from "../reusable/customTags/CustomButton";

function OrderPage(){

    const [isLoading, setIsLoading] = useState(false);

    const tableHeader = [
        { label: "Products", value: "newOrderProduct" },
        { label: "Order Value", value: "newOrderValue" },
        { label: "Quantity", value: "newOrderValue" },
        { label: "Order ID", value: "_id" },
        { label: "Expected Delivery", value: "newOrderDOD" },
        { label: "Status", value: "orderStatus" }
    ];
        
    
    useEffect(()=>{
        setIsLoading(true);
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.get("http://localhost:2000/orders/")
        .then((result)=>{
            setIsLoading(false);
            formatTableData(result.data);
        }).catch((error)=>{
            console.log("some error in product api", error);
        })
    },[]);


    function formatTableData(data){
        const newSampleTableData = data.map((item)=>{
            return {
                ...item,
                colorCode:`${item.status === "Delayed" ? " orangeTextColor": item.status === "Confirmed" ? " blueTextColor": item.status === "Returned" ? " grayTextColor":""}`,
            }
        })
        setTableData(newSampleTableData);
    }


    const [tableData, setTableData] = useState([]);
    const [showAddOrderModal,setShowAddOrderModal] = useState(false);
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
                    <CustomButton onClick={()=>setShowAddOrderModal(true)}>Place New Order</CustomButton>
                    <CustomButton> 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#5D6679" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Filters
                    </CustomButton>
                    <CustomButton>Download all</CustomButton>
                </div>
            </div>
    
            <CustomTable isLoading={isLoading} tableData={tableData} tableHeader={tableHeader}/>
          </Card>
          <AddNewOrderModal showAddOrderModal={showAddOrderModal} setShowAddOrderModal={setShowAddOrderModal}/>
        </div>
      )
}

export default OrderPage;