import React from "react";
import "./inventoryProductComponent.css";
import { Card } from "react-bootstrap";

function InventoryProductComponent(){
    const productPrimaryDetails = {
        productName: "Stell Beam",
        productId:456567,
        productCategory:"Beams",
        expiryDate:"14/4/23",
        thresholdValue:"12",
    }

    const supplierDetails={
        supplierName:"Ronald Martin",
        contactNumber:987654321,
    }

    const stockLocations = [
        {
            storeName:"Sulur Branch",
            stockInHand:12,
        },
        {
            storeName:"Singanallur Branch",
            stockInHand:18,
        }
    ];
    return <Card>
        <div className="main-header-product">
            <h3 className='cardHeader'>Cement</h3>
            <section className="headerButton-holder">
                <button>Edit</button>
                <button>Download</button>
            </section>
        </div>
        <div className="subHeading-product">
            <button>Overview</button>
            <button>Purchases</button>
            <button>Adjustments</button>
            <button>History</button>
        </div>
        <div className="contentHolder-product">
            <div className="leftSide-contentProduct">
                <div className="leftSide-tableContainer">
                    {/* product Table */}
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Primary Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Product Name</td>
                                <td>{productPrimaryDetails.productName}</td>
                            </tr>
                            <tr>
                                <td>Product ID</td>
                                <td>{productPrimaryDetails.productId}</td>
                            </tr>
                            <tr>
                                <td>Product Category</td>
                                <td>{productPrimaryDetails.productCategory}</td>
                            </tr>
                            <tr>
                                <td>Expiry Date</td>
                                <td>{productPrimaryDetails.expiryDate}</td>
                            </tr>
                            <tr>
                                <td>Threshold Value</td>
                                <td>{productPrimaryDetails.thresholdValue}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* supplier table */}
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Supplier Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supplier name</td>
                                <td>{supplierDetails.supplierName}</td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>{supplierDetails.contactNumber}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* stock table */}

                    <table>
                        <thead>
                            <tr>
                                <td colSpan={2}>Stock Locations</td>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
            </div>
            <div className="rightSide-contentProduct"></div>
        </div>
    </Card>
}

export default InventoryProductComponent;