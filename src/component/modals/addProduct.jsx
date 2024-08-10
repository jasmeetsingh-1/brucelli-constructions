import React, { useState } from "react";
import "./css/addProduct.css";
import { Modal } from "react-bootstrap";
import { Card } from "../reusable/Card";
import { Field, Form, Formik } from "formik";

const AddProductModal = ({showAddProductModal, setShowAddProductModal}) => {
  const newProductFormFields = [
    {label:"Product Name", placeHolder:"Enter Product name"},
    {label:"Product ID", placeHolder:"Enter Product ID"},
    {label:"Categroy", placeHolder:"Select Prodcut Category"},
    {label:"Buying Price", placeHolder:"Enter buying price"},
    {label:"Quantity", placeHolder:"Enter Product quantity"},
    {label:"Unit", placeHolder:"Enter product unit"},
    {label:"Expiry Date", placeHolder:"Enter Expiry Date"},
    {label:"Threshold Value", placeHolder:"Enter threshold value"}
  ]
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
            <Formik>
                {({})=>{
                    return <Form className="newProduct-form">
                        {newProductFormFields.map((item)=>{
                            return <div className="newProduct-form-row">
                                <label>{item.label}</label>
                                <Field
                                    type="text"
                                    name={item.label}
                                    placeHolder={item.placeHolder}
                                />
                            </div>
                        })}
                    </Form>
                }}
            </Formik>
        </div>
        <div className="modalFooter">
            <button onClick={()=>{setShowAddProductModal(false)}}>Discard</button>
            <button>Add Product</button>
        </div>
      </Card>
    </Modal>
  );
};

export default AddProductModal;
