import axios from "axios";
import { useState } from "react";
function Form() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    Mobile_number: "",
    Notice_Period: "",
    LinkedIn_URL: "",
    Your_Location: "",
    Current_Salary: "",
    Resume_Upload: "",
  });
  const handleFileChange = () => (e) => {
    setQuery((prevState) => ({
      ...prevState,
      files: e.target.files[0],
    }));
  };
  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
      // console.log(value);
    });

    axios
      .post("/api/apply", formData, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          First_Name: formData.First_Name,
          Last_Name: formData.Last_Name,
          email: formData.email,
          Mobile_number: formData.Mobile_number,
          Notice_Period: formData.Notice_Period,
          LinkedIn_URL: formData.LinkedIn_URL,
          Your_Location: formData.Your_Location,
          Current_Salary: formData.Current_Salary,
          Resume_Upload: formData.Resume_Upload,
        }),
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          First_Name: "",
          Last_Name: "",
          email: "",
          Mobile_number: "",
          Notice_Period: "",
          LinkedIn_URL: "",
          Your_Location: "",
          Current_Salary: "",
          Resume_Upload: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form
      acceptCharset='UTF-8'
      method='POST'
      enctype='multipart/form-data'
      id='ajaxForm'
      onSubmit={handleSubmit}
    >
      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
            <input
              type='text'
              name='First_Name'
              className='form-control'
              placeholder='First Name'
              required
              value={query.First_Name}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <input
              type='text'
              name='Last_Name'
              className='form-control'
              placeholder='Last Name'
              required
              value={query.Last_Name}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Email'
              required
              value={query.email}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <input
              type='tel'
              name='Mobile_number'
              className='form-control'
              placeholder='Mobile-number'
              required
              value={query.Mobile_number}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>

      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
            <input
              type='text'
              name='Notice_Period'
              className='form-control'
              placeholder='Notice_Period'
              required
              value={query.Notice_Period}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <input
              type='text'
              name='LinkedIn_URL'
              className='form-control'
              placeholder='LinkedIn URL'
              required
              value={query.LinkedIn_URL}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
            <input
              type='text'
              name='Your_Location'
              className='form-control'
              placeholder='Your Location'
              required
              value={query.Your_Location}
              onChange={handleChange()}
            />
          </div>
          <div className='col-sm-6'>
            <input
              type='text'
              name='Current_Salary'
              className='form-control'
              placeholder='Current-Salary'
              required
              value={query.Current_Salary}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>

      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-12'>
            <input
              type='file'
              className='w-file-upload-input form-control UploadImg'
              accept='.pdf, .doc, .docx, .txt'
              name='Resume_Upload'
              data-iconName='fa-solid fa-cloud-arrow-up'
              data-name='Upload Job Description, If Available'
              aria-hidden='true'
              placeholder='Upload Job Description, If Available'
              tabindex='-1'
              required
              // value={query.Resume_Upload}
              onChange={handleFileChange()}
              // alt='new'
              // width={1}
              // height={1}
            />
          </div>
        </div>
      </div>

      {/* <hr /> */}
      {/* $("form").hide(
        setMessage("Thank you! Your submission has been received!")
      ); */}
      {formStatus ? (
        <div className='thank'>
          Thank you! Your submission has been received!
        </div>
      ) : (
        ""
      )}
      <button type='submit' className='site-btn text-center '>
        Submit
      </button>
    </form>
    // </div>
  );
}
export default Form;
