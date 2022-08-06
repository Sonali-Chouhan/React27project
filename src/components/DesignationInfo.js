import React from "react";

const DesignationInfo = ({ formData, setFormData }) => {
  return (
    <div  className="designations-info-container">
      <input
        type="text"
        placeholder="Company NAme..."
        value={formData.companyName}
        onChange={(e) => {
          setFormData({ ...formData, companyName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Designations....."
        value={formData.designations}
        onChange={(e) => {
          setFormData({ ...formData, designations: e.target.value });
        }}
      />
    </div>
  );
};

export default DesignationInfo;
