import React from "react";

//INTERNAL IMPORT
import TableHead from "../Regular/Table/TableHead";
import TableList from "./TableList";

const Table = ({
  thead,
  tableData,
  name,
  setDoctorDetails,
  setOpenComponent,
  setPatientDetails,
  setMedicineDetails,
}) => {
  return (
    <table
      id="example5"
      className="table table-striped patient-list mb-4 dataTablesCard fs-14"
    >
      <TableHead thead={thead} />
      <tbody>
        {tableData?.map((item, index) => (
          <TableList
            item={item}
            index={index}
            name={name}
            setDoctorDetails={setDoctorDetails}
            setOpenComponent={setOpenComponent}
            setPatientDetails={setPatientDetails}
            setMedicineDetails={setMedicineDetails}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;