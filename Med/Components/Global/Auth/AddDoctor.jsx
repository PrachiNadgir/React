import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { UPLOAD_IPFS_IMAGE } from "../../../Context/constants";
import Input from "./../Regular/Input";

import { useStateContext } from "../../../Context/index";

const AddDoctor = ({ setAddDocotr }) => {
  const { ADD_DOCTOR, setLoader, notifySuccess, notifyError } =
    useStateContext();

    const handleAddDoctor = () => {
      const {
        firstName,
        lastName,
        gender,
        degree,
        yourAddress,
        designation,
        lastWork,
        mobile,
        emailID,
        collegeName,
        collegeID,
        joiningYear,
        endYear,
        specialization,
        registrationID,
        collegeAddress,
        walletAddress,
        image,
        biography,
      } = doctor;
    
      // Regex for validation
      const phoneRegex = /^[6-9]\d{9}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const walletRegex = /^0x[a-fA-F0-9]{40}$/; // Basic Ethereum wallet format
    
      // Check for required fields
      const requiredFields = {
        firstName,
        lastName,
        gender,
        degree,
        yourAddress,
        designation,
        lastWork,
        mobile,
        emailID,
        collegeName,
        collegeID,
        joiningYear,
        endYear,
        specialization,
        registrationID,
        collegeAddress,
        walletAddress,
        image,
        biography,
      };
    
      for (const [key, value] of Object.entries(requiredFields)) {
        if (!value || value.trim() === "") {
          notifyError(`${key.replace(/([A-Z])/g, ' $1')} is required.`);
          return;
        }
      }
    
      if (!phoneRegex.test(mobile)) {
        notifyError("Invalid mobile number. It should be a 10-digit Indian number starting with 6-9.");
        return;
      }
    
      if (!emailRegex.test(emailID)) {
        notifyError("Invalid email address format.");
        return;
      }
    
      if (!walletRegex.test(walletAddress)) {
        notifyError("Invalid Ethereum wallet address.");
        return;
      }
    
      ADD_DOCTOR(doctor);
    };
    

  const [doctor, setDoctor] = useState({
    title: "Miss",
    firstName: "",
    lastName: "",
    gender: "",
    degree: "",
    yourAddress: "",
    designation: "",
    lastWork: "",
    mobile: "",
    emailID: "",
    collegeName: "",
    collegeID: "",
    joiningYear: "",
    endYear: "",
    specialization: "",
    registrationID: "",
    collegeAddress: "",
    walletAddress: "",
    image: "",
    biography: "",
  });

  const handleImageChange = async (event) => {
    try {
      setLoader(true);
      const file = event.target.files[0];
      if (file) {
        const imgUrl = await UPLOAD_IPFS_IMAGE(file);
        setDoctor({ ...doctor, image: imgUrl });
        setLoader(false);
        notifySuccess("Image uploaded successfully");
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      notifyError("Failed, check your Pinata API Keys");
    }
  };

  return (
    <div
      className="modal "
      style={{
        display: "block",
      }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Doctor</h5>
            <button className="btn-close" onClick={() => setAddDocotr(false)} />
          </div>
          <div className="modal-body">
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Title:</label>
                    <select
                      className="form-control"
                      onChange={(e) =>
                        setDoctor({ ...doctor, title: e.target.value })
                      }
                    >
                      <option value="Miss">Miss</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>
                </div>
                <Input
                  name={"First Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, firstName: e.target.value })
                  }
                />
                <Input
                  name={"Last Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, lastName: e.target.value })
                  }
                />
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="col-form-label">Gender:</label>
                    <select
                      className="form-control"
                      value={doctor.gender}
                      onChange={(e) =>
                        setDoctor({ ...doctor, gender: e.target.value })
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <Input
                  name={"Degree"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, degree: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Address :</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setDoctor({ ...doctor, yourAddress: e.target.value })
                      }
                    />
                  </div>
                </div>{" "}
                <Input
                  name={"Designation"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, designation: e.target.value })
                  }
                />
                <Input
                  name={"Last Work"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, lastWork: e.target.value })
                  }
                />
                <Input
                  name={"Mobile"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, mobile: e.target.value })
                  }
                />
                <Input
                  name={"Email ID"}
                  type={"email"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, emailID: e.target.value })
                  }
                />
                <Input
                  name={"College Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, collegeName: e.target.value })
                  }
                />
                <Input
                  name={"College ID"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, collegeID: e.target.value })
                  }
                />
                <Input
                  name={"Joining Year"}
                  type={"date"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, joiningYear: e.target.value })
                  }
                />
                <Input
                  name={"End Year"}
                  type={"date"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, endYear: e.target.value })
                  }
                />
                <Input
                  name={"Specialization"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, specialization: e.target.value })
                  }
                />
                <Input
                  name={"Registration ID"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, registrationID: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">College Address :</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setDoctor({ ...doctor, collegeAddress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Wallet Address</label>
                    <input
                      size={16}
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setDoctor({ ...doctor, walletAddress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Upload Profile</label>
                    <input
                      className="form-control"
                      id="file"
                      onChange={handleImageChange}
                      type="file"
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Biography:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      onChange={(e) =>
                        setDoctor({ ...doctor, biography: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={handleAddDoctor} className="btn btn-primary">
                                        Add Doctor
                                      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;