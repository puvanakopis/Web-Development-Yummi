const DeliveryFormPage = () => {

  // Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  alert("Your Delivery is confirmed");
};

return (
  <div className='DeliveryForm flex justify-center items-center'>
    <div className="DeliveryForm-container">
      <h2 className="DeliveryForm-title MainHeading">Delivery Information</h2>
      <div className="DeliveryForm-box">
        <form onSubmit={handleSubmit}>
          <div className='input_det grid grid-cols-2 gap-8'>
            <div className='FName input_field'>
              <input type="text" id="FName" placeholder="First Name" required />
            </div>

            <div className="LName input_field">
              <input type="text" id="LName" placeholder="Last Name" required />
            </div>

            <div className='Address input_field'>
              <input type="text" id="Address" placeholder="Address" required />
            </div>

            <div className="Postal_Code input_field">
              <input type="text" id="Postal_Code" placeholder="Postal Code" required />
            </div>

            <div className="Phone_Number input_field">
              <input type="text" id="Phone_Number" placeholder="Phone Number" required />
            </div>
          </div>

          <div className='DeliveryFormButton'>
            <button type="submit" className="mainButton">Delivery confirmed</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default DeliveryFormPage
