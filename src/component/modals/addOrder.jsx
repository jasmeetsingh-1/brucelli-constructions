import React, { useState } from "react";
import "./css/addProduct.css";
import profileIcon from "../../assets/profileIcon.svg";

import { Modal } from "react-bootstrap";
import { Card } from "../reusable/Card";
import { Field, Form, Formik } from "formik";

const AddNewOrderModal = ({showAddOrderModal, setShowAddOrderModal, setTableData}) => {

    const addProductInititalValues ={
        contractorName:"",
        contractorProductId:"",
        contractorCategory:"",
        contractorEmail:"",
        contractorContactNumber:"",
        contractorType:"",
    };

    const newProductSubmitHandler = (value,resetForm) =>{
        const payload = {
            supplierName: value.contractorName,
            product: value.contractorProductId,
            supplierContactNumber: value.contractorContactNumber,
            supplierEmail: value.contractorEmail,
            type: value.contractorType,
            onTheWay: 34,
        }

        setTableData((prev)=>[payload, ...prev]);
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
                initialValues={addProductInititalValues}
                onSubmit={(values,{resetForm})=>{console.log("contractorModal",values); newProductSubmitHandler(values,resetForm)}}
            >
                {()=>{
                    return <Form className="newProduct-form">
                        <div className="newProduct-form-row">
                            <label htmlFor="contractorname">Name</label>
                            <Field
                                type="text"
                                name="contractorName"
                                id="contractorname"
                                placeHolder="Enter Supplier name"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="contractoEmail">Email</label>
                            <Field
                                type="text"
                                name="contractorEmail"
                                id="contractoEmail"
                                placeHolder="Enter Contractor Email"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="contractoProduct">Product</label>
                            <Field
                                type="text"
                                name="contractorProductId"
                                id="contractoProduct"
                                placeHolder="Enter Product"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="contractorCategory">Category</label>
                            <Field
                                type="text"
                                name="contractorCategory"
                                id="contractorCategory"
                                placeHolder="Select Product Category"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label htmlFor="contractorContactNumber">Contact Number</label>
                            <Field
                                type="text"
                                name="contractorContactNumber"
                                id="contractorContactNumber"
                                placeHolder="Enter supplier contact number"
                            />
                        </div>
                        <div className="newProduct-form-row">
                            <label>Type</label>
                            <div className="specialTypeRowContractorModal">
                                <div>
                                <Field
                                    type="radio"
                                    name="contractorType"
                                    id="notTakingReturn"
                                    value="Not taking return"
                                    placeHolder="Enter threshold value"
                                /> 
                                <label htmlFor="notTakingReturn"> Not Taking return</label>
                                </div>
                                <div>
                                    <Field
                                        type="radio"
                                        name="contractorType"
                                        value="Taking return"
                                        id="takingReturn"
                                        placeHolder="Enter threshold value"
                                        /> 
                                        <label htmlFor="takingReturn">Taking return</label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="modalFooter">
                            <button onClick={(e)=>{e.preventDefault();setShowAddOrderModal(false)}}>Discard</button>
                            <button type="submit">Add Supplier</button>
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
