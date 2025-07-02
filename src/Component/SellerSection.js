import React, { useState } from "react";
import "../Css/SellerSection.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SellerSection() {
  const [formData, setFormData] = useState({
    productName: "",
    manufacturingProcess: "",
    transportationMethod: "",
    materialsUsed: "",
    productLifespan: "",
    recyclability: "",
    ecoCertifications: "",
    packagingUsed: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (isFormValid(formData)) {
      // Show toast notification
      toast.success("Your request is under review!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Delay redirect to allow toast to be seen
      setTimeout(() => {
        window.location.href = "/submitted";
      }, 3000);
    } else {
      // Show an error message
      toast.error("Please fill in all the mandatory fields.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to check if all fields are filled
  const isFormValid = (formData) => {
    for (const key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="seller-section">
      <ToastContainer />
      <img
        src="../images/seller_banner.jpg"
        alt=""
        className="seller-image"
      />
      <div className="seller-info">
        <h2>Sell Eco-Friendly Products on Amazon</h2>
        <p>
          Help us create a sustainable shopping experience by providing details
          about your eco-friendly products.
        </p>
      </div>

      <div className="seller-form-container">
        <div className="seller-form">
          <div className="form-header">
            <div className="leaf-icon">🍃</div>
            <h3>Manufacturing Information</h3>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">📋</i> Product ID:
                  </div>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product ID"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">🏭</i> Manufacturing Process:
                  </div>
                  <input
                    type="text"
                    name="manufacturingProcess"
                    value={formData.manufacturingProcess}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your manufacturing process"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">🚚</i> Transportation Method:
                  </div>
                  <input
                    type="text"
                    name="transportationMethod"
                    value={formData.transportationMethod}
                    onChange={handleInputChange}
                    required
                    placeholder="How is your product transported?"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">🧪</i> Materials Used:
                  </div>
                  <input
                    type="text"
                    name="materialsUsed"
                    value={formData.materialsUsed}
                    onChange={handleInputChange}
                    required
                    placeholder="List materials used in your product"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">⏱️</i> Product Lifespan:
                  </div>
                  <input
                    type="text"
                    name="productLifespan"
                    value={formData.productLifespan}
                    onChange={handleInputChange}
                    required
                    placeholder="Expected lifespan of your product"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">♻️</i> Recyclability:
                  </div>
                  <select
                    name="recyclability"
                    value={formData.recyclability}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">🏆</i> Eco Certifications (if any):
                  </div>
                  <input
                    type="text"
                    name="ecoCertifications"
                    value={formData.ecoCertifications}
                    onChange={handleInputChange}
                    required
                    placeholder="List any eco certifications"
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  <div className="form_question">
                    <i className="eco-icon">📦</i> Packaging Used:
                  </div>
                  <input
                    type="text"
                    name="packagingUsed"
                    value={formData.packagingUsed}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your product packaging"
                  />
                </label>
              </div>
            </div>

            <div className="submit-container">
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        src="../images/amazon_seller.jpg"
        alt=""
        className="seller-image2"
      />
    </div>
  );
}

export default SellerSection;