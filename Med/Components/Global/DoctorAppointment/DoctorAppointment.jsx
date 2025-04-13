import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "../Regular/Table/Header";
import Table from "./Table";

import {
  GET_DOCTOR_APPOINTMENTS_HISTORYS,
  GET_DOCTOR_DETAILS,
  GET_ALL_REGISTERED_DOCTORS,
  GET_DOCTOR_ID,
} from "../../../Context/constants";
import { useStateContext } from "../../../Context/index";

const DoctorAppointment = ({ setOpenComponent, setPatientDetails }) => {
  const { CHECKI_IF_CONNECTED_LOAD, address, setAddress, SEND_MESSAGE } =
    useStateContext();

  const tableHead = [
    {
      name: "PATIENT",
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
      name: "APPOINTMENT",
    },
    {
      name: "PROFILE",
    },
    {
      name: "STATUS",
    },
  ];

  const [doctorAppointments, setDoctorAppointments] = useState();
  const [doctorAppointmentsCopy, setDoctorAppointmentsCopy] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        const _doctorID = await GET_DOCTOR_ID(address);

        GET_DOCTOR_APPOINTMENTS_HISTORYS(_doctorID).then((appointment) => {
          console.log(appointment);
          setDoctorAppointmentsCopy(appointment);
          setDoctorAppointments(appointment);
        });
      }
    };

    fetchData();
  }, [address]);

  const appointment = [
    {
      image: "images/doctors/1.jpg", //DUMY DATA
      date: "28 March 2025",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
  ];

  //FILTER
  const onHandleSearch = (value) => {
    const filteredNFTS = doctorAppointments.filter(({ firstName }) =>
      firstName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setDoctorAppointments(doctorAppointmentsCopy);
    } else {
      setDoctorAppointments(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (doctorAppointments?.length && doctorAppointmentsCopy.length) {
      setDoctorAppointments(doctorAppointmentsCopy);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Header
          name={"Your Appointment"}
          onHandleSearch={onHandleSearch}
          onClearSearch={onClearSearch}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table
                    thead={tableHead}
                    tableData={doctorAppointments}
                    name={"appointment"}
                    setOpenComponent={setOpenComponent}
                    setPatientDetails={setPatientDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppointment;
