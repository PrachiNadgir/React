import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "./Header";
import Table from "./Table";
import Booking from "./Booking";

import {
  GET_PATIENT_APPOINTMENT_HISTORYS,
  GET_DOCTOR_DETAILS,
  GET_ALL_REGISTERED_DOCTORS,
  GET_PATIENT_ID,
} from "../../../Context/constants";
import { useStateContext } from "../../../Context/index";

const Appointment = ({ setOpenComponent, setDoctorDetails }) => {
  const { CHECKI_IF_CONNECTED_LOAD, address, setAddress, SEND_MESSAGE } =
    useStateContext();

  const tableHead = [
    {
      name: "DOCTOR",
    },
    {
      name: "EMAIL",
    },
    {
      name: "BOOKING DATE",
    },
    {
      name: "DATE",
    },
    {
      name: "FROM",
    },
    {
      name: "TO",
    },
    {
      name: "MOBILE",
    },
    {
      name: "SEPCIALIZATION",
    },
    {
      name: "APPOINTMENT",
    },
    {
      name: "PROFILE",
    },
    {
      name: "STATUS",
    },
  ];

  const [patientAppointment, setPatientAppointment] = useState();
  const [registerDoctors, setRegisterDoctors] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = await CHECKI_IF_CONNECTED_LOAD();
        if (address) {
          const _patientID = await GET_PATIENT_ID();
          const appointments = await GET_PATIENT_APPOINTMENT_HISTORYS(
            _patientID
          );

          setPatientAppointment(appointments);

          //DOCTORS
          GET_ALL_REGISTERED_DOCTORS().then((doctors) => {
            setRegisterDoctors(doctors);
          });
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [address]);

  const appointment = [
    {
      image: "images/doctors/1.jpg", //DUMY DATA
      date: "26 March 2025",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table
                    thead={tableHead}
                    tableData={patientAppointment}
                    name={"appointment"}
                    setOpenComponent={setOpenComponent}
                    setDoctorDetails={setDoctorDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Booking registerDoctors={registerDoctors} />
    </>
  );
};

export default Appointment;
