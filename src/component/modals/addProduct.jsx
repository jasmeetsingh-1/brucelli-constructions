import React, { useState } from "react";
import "./css/addProduct.css";
import { Modal } from "react-bootstrap";
import { Card } from "../reusable/Card";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const AddProductModal = ({showAddProductModal, setShowAddProductModal, setTableData}) => {


    const addProductInititalValues ={
        productName:"",
        productID:"",
        productCategory:"",
        buyingPrice:"",
        productQuantity:"",
        productUnit:"",
        productExpireDate:"",
        productThresholdValue:"",
    };

    const newProductSubmitHandler = (value,resetForm) =>{
        const payload = {
            productName:value.productName,
            buyingPrice: value.buyingPrice,
            productCategory:value.productCategory,
            quantity: value.productQuantity,
            unit: value.productUnit,
            lastOrderedDate: value.productExpireDate,
            expiryDate:"11/12/2023",
            threshOldValue:value.productThresholdValue,
            productAvailablity: "In-stock",
        }

        axios.post("http://localhost:2000/products/add", payload)
        .then((result)=>{
            console.log("Result>>>>>>>>>", result);
        }).catch((error)=>{
            console.log("error >>>>>>",error);
        })

        // setTableData((prev)=>[payload, ...prev]);
        setShowAddProductModal(false);
        resetForm();
    }
    
  return (
    <Modal
      dialogClassName="addProductModal"
      show={showAddProductModal}
    >
      <Card>
        <h3 className="cardHeader">New Product</h3>
        <div className="modalImageDragArea">
            <div className="dragArea"></div>
            <section className="dragAreaContent">
                <p>Drag Images here <br></br>or
                </p>
                <span>Browse image</span>
            </section>
        </div>
        <div className="addNewModalFormHolder">
            <Formik
                initialValues={addProductInititalValues}
                onSubmit={(values,{resetForm})=>{newProductSubmitHandler(values,resetForm)}}
            >
                {()=>{
                    return <Form className="newProduct-form">
                        <div className="newProduct-form-row">
                            <label>Product Name</label>
                            <Field
                                type="text"
                                name="productName"
                                placeHolder="Enter Product name"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Product ID</label>
                            <Field
                                type="text"
                                name="productID"
                                placeHolder="Enter Product ID"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Category</label>
                            <Field
                                type="text"
                                name="productCategory"
                                placeHolder="Select Product Category"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Buying Price</label>
                            <Field
                                type="text"
                                name="buyingPrice"
                                placeHolder="Enter buying price"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Quantity</label>
                            <Field
                                type="text"
                                name="productQuantity"
                                placeHolder="Enter Product quantity"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Unit</label>
                            <Field
                                type="text"
                                name="productUnit"
                                placeHolder="Enter product unit"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Expiry Date</label>
                            <Field
                                type="text"
                                name="productExpireDate"
                                placeHolder="Enter Expiry Date"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Threshold Value</label>
                            <Field
                                type="text"
                                name="productThresholdValue"
                                placeHolder="Enter threshold value"
                            />
                        </div>
                        <div className="modalFooter">
                            <button onClick={(e)=>{e.preventDefault();setShowAddProductModal(false)}}>Discard</button>
                            <button type="submit">Add Product</button>
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
      </Card>
    </Modal>
  );
};

export default AddProductModal;
