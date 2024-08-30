import React from "react";
import "./css/customTable.css";

function CustomTable({tableData, tableHeader}){

    const colorCodedSection = ["productAvailablity","status","type"];

    return <table className="customTable-mainHolder">
    <thead>
        <tr>
            {tableHeader.map((item)=>{
                return <th key={item}>{item}</th>
            })}
        </tr>
    </thead>
    <tbody>
    {tableData.map((item, index) => {
    return (
        <tr key={index} className='customTable-table-row'>
            {Object.keys(item).map((key, keyIndex) => {
                if(key !== "colorCode") return <td key={keyIndex} className={colorCodedSection.includes(key) ? item.colorCode : ""}>
                    {item[key]}
                </td>
                })}
            </tr>
        );
    })}
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    </tbody>
    <tfoot className='customTable-footer'>
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
}

export default CustomTable;