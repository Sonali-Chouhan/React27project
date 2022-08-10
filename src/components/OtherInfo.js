import React from 'react'

function OtherInfo({ formData, setFormData }) {
    return (
      <div className="other-info-container">
        <input
          type="text"
          placeholder="Nationality..."
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Other..."
          value={formData.other}
          onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
          }}
        />
      </div>
    );
  }
  
  export default OtherInfo;
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   const {
  //     email,
  //     password,
  //     confirmPassword,
  //     firstName,
  //     lastName,
  //     username,
  //     nationality,
  //     other,
  //     companyName,
  //     designations,
  //   } = formData;
  //   if (email === "") {
  //     toast.error("Email is required", {
  //       position: "top-right",
  //     });
  //   } else if (!email.includes("@")) {
  //     toast.error("Plz Enter a Valid Email Address!", {
  //       position: "top-right",
  //     });
  //   } else if(password.length < 6){
  //     toast.error("Password must be greater then 6", {
  //       position: "top-left",
  //     });
  //   }else if(confirmPassword.length < 6){
  //     toast.error("Confirm Password is must be a greater then 6",{
  //       position : "top-right"
  //     })
  //   }else if(password !== confirmPassword){
  //     toast.error("Password And ConfirmPassword Dose Not match ",{
  //       position:"bottom-left"
  //     })
  //   }
  //   else {
  //     if (page === FormTitles.length - 1) {
  //       alert("FORM SUBMITTED");
  //       console.log(formData);
  //     } else {
  //       setPage((currPage) => currPage + 1);
  //     }
  //   }
  // };
  
