import React, { useEffect, useState } from "react";
import "../css/customTable.css";

function CustomTable({ tableData, tableHeader }) {
  const [showData, setShowData] = useState(false);
  const colorCodedSection = ["productAvailablity", "status", "type"];

  useEffect(() => {
   if(tableData.length > 0 && tableHeader) setShowData(true);
   console.log("table data>>", tableData);
  }, [tableData]);

  return (
    <div>
      {showData ? (
        <table className="customTable-mainHolder">
          <thead>
            <tr>
              {tableHeader.map((item) => {
                return <th key={item.label}>{item.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr>
                {tableHeader.map((keyitem) => {
                  if(!colorCodedSection.includes(keyitem.value)) return <td key={keyitem.value}>{item[keyitem.value]}</td>
                  else return <td key={keyitem.value} className={item["colorCode"]}>{item[keyitem.value]}</td>
                })}
              </tr>
            ))}
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
          <tfoot className="customTable-footer">
            <tr>
              <td>
                <button>Previous</button>
              </td>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Page 1 of 10
              </td>
              <td>
                <button>Next</button>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="error-screen">Not enough data to Show</div>
      )}
    </div>
  );
}

export default CustomTable;


// explaining the Component logic:

// tableHeader prop: The tableHeader prop [contians the array of objects] is mapped over twice:
// In the header (<thead>): It generates the column headers (<th> elements) by using the label field.
// In the body (<tbody>): It determines which data to display in each cell (<td> elements) by using the value field to access the corresponding key in each tableData object.
