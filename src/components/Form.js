import React, { useState } from "react";
import SignUpInfo from "./SingUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import DesignationInfo from "./DesignationInfo";
import { toast, ToastContainer } from "react-toastify";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    companyName: "",
    designations: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      username,
      nationality,
      other,
      companyName,
      designations,
    } = formData;
    if (email === "") {
      toast.error("Email is required", {
        position: "top-right",
      });
    } else if (!email.includes("@")) {
      toast.error("Plz Enter a Valid Email Address!", {
        position: "top-right",
      });
    } else if (password.length < 6) {
      toast.error("Password must be greater then 6", {
        position: "top-left",
      });
    } else if (confirmPassword.length < 6) {
      toast.error("Confirm Password is must be a greater then 6", {
        position: "top-right",
      });
    } else if (password !== confirmPassword) {
      toast.error("Password And ConfirmPassword Dose Not match ", {
        position: "bottom-left",
      });
    } else {
   
        setPage((currPage) => currPage + 1);
   }

    if (firstName === "") {
      toast.error("Plz Fill The Name!", {
        position: "bottom-right",
      });
    } else if (lastName === "") {
      toast.error("LastName Required :-)", {
        position: "bottom-left",
      });
    } else {
      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
  };
  const FormTitles = ["Sign Up", "Personal Info", "Designation Info", "others"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <DesignationInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button onClick={(e) => onSubmit(e)}>
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
