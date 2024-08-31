import React, { useState } from "react";
import "./css/addProduct.css";
import profileIcon from "../../assets/profileIcon.svg";

import { Modal } from "react-bootstrap";
import { Card } from "../reusable/Card";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const AddNewOrderModal = ({showAddOrderModal, setShowAddOrderModal}) => {

    const placeOrderInitialValues ={
        newOrderProduct:"",
        newOrderProductId:"",
        productCategory:"",
        newOrderValue:"",
        newOrderUnit:"",
        newOrderBuyingPrice:"",
        newOrderDOD:"",
    };

    const newProductSubmitHandler = (value,resetForm) =>{
        const payload = {...value};
        console.log("[payload >>>>", payload);
        axios.post("http://localhost:2000/orders/add", payload)
        .then((result)=>{
            console.log("Result>>>>>>>>>", result);
        }).catch((error)=>{
            console.log("error >>>>>>",error);
        })

        setShowAddOrderModal(false);
        resetForm();
    }
    
  return (
    <Modal
      dialogClassName="addProductModal"
      show={showAddOrderModal}
    >
      <Card>
        <h3 className="cardHeader">New Order</h3>
        <div className="addNewModalFormHolder">
            <Formik
                initialValues={placeOrderInitialValues}
                onSubmit={(values,{resetForm})=>{console.log("contractorModal",values); newProductSubmitHandler(values,resetForm)}}
            >
                {()=>{
                    return <Form className="newProduct-form">
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderProduct">Product Name</label>
                            <Field
                                type="text"
                                name="newOrderProduct"
                                id="newOrderProduct"
                                placeHolder="Enter Product name"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderProductId">Product ID</label>
                            <Field
                                type="text"
                                name="newOrderProductId"
                                id="newOrderProductId"
                                placeHolder="Enter Contractor Email"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="productCategory">Category</label>
                            <Field
                                type="text"
                                name="productCategory"
                                id="productCategory"
                                placeHolder="Enter product category"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderValue">Order Value</label>
                            <Field
                                type="text"
                                name="newOrderValue"
                                id="newOrderValue"
                                placeHolder="Enter order value"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderUnit">Unit</label>
                            <Field
                                type="text"
                                name="newOrderUnit"
                                id="newOrderUnit"
                                placeHolder="Enter product Unit"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderBuyingPrice">Buying price</label>
                            <Field
                                type="text"
                                name="newOrderBuyingPrice"
                                id="newOrderBuyingPrice"
                                placeHolder="Enter buying price"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="newOrderDOD">Date of delivery</label>
                            <Field
                                type="text"
                                name="newOrderDOD"
                                id="newOrderDOD"
                                placeHolder="Enter DOD"
                            />
                        </div>
                        <div className="modalFooter">
                            <button onClick={(e)=>{e.preventDefault();setShowAddOrderModal(false)}}>Discard</button>
                            <button type="submit">Place Order</button>
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
        
      </Card>
    </Modal>
  );
};

export default AddNewOrderModal;
