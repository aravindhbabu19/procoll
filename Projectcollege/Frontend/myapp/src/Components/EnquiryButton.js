import React from "react";
import { useNavigate } from "react-router-dom";

function EnquiryButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button className="enquiry-btn" onClick={handleClick}>
      Enquiry Now
    </button>
  );
}

export default EnquiryButton;