import axios from "axios";
import { result } from "lodash";
import { useState } from "react";

export default function Form() {
  const [formStatus, setFormStatus] = useState();
  const [selectedFile, setSelectedFile] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [query, setQuery] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    Mobile_Number: "",
    Your_Location: "",
    Current_Salary: "",
    Notice_Period: "",
    LinkedIn_URL: "",
    Resume_Upload: "",
    Resume_title: "",
  });
  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = () => (e) => {
    let file = e.target.files[0];
    console.log("banu-file", file);
    if (e.target.files[0].name.split(".").pop() != "pdf") {
      alert("file should be pdf only");
      return false;
    } else {
      alert("file uploaded successful");
      setIsFilePicked(true);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        setQuery((prevState) => ({
          ...prevState,
          Resume_Upload: reader.result,
          Resume_title: e.target.files[0].name,
          Resume_ext: e.target.files[0].name.split(".").pop(),
        }));
      };
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
      console.log(value);
      e.target.reset();
    });
    isFilePicked
      ? axios
          .post("/api/apply", formData, {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: formData,
          })
          .then(function (response) {
            setFormStatus(true);
            setQuery({
              First_Name: "",
              Last_Name: "",
              email: "",
              Mobile_Number: "",
              Your_Location: "",
              Current_Salary: "",
              Notice_Period: "",
              LinkedIn_URL: "",
            });
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
      : setSelectedFile(true);
    //alert('pls select only pdf');
  };

  return (
    <form
      acceptCharset='UTF-8'
      method='POST'
      encType='multipart/form-data'
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
              name='Mobile_Number'
              className='form-control'
              placeholder='Mobile-Number'
              required
              value={query.Mobile_Number}
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
              placeholder='Your-Location'
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
          <div className='col-sm-6'>
            <input
              type='text'
              name='Notice_Period'
              className='form-control'
              placeholder='Notice Period'
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
          <div className='col-sm-12'>
            <input
              id='file'
              type='file'
              className='w-file-upload-input form-control UploadImg'
              accept='application/pdf'
              name='Resume_Upload'
              data-iconName='fa-solid fa-cloud-arrow-up'
              data-name='Upload Job Description, If Available'
              aria-hidden='true'
              placeholder='Upload Job Description, If Available'
              tabindex='-1'
              required
              onChange={handleFileChange()}
            />
          </div>
        </div>
      </div>
      {formStatus && (
        <div className='thank'>
          Thank you! Your submission has been received!
        </div>
      )}
      {selectedFile && (
        <div className='thank'>Form submission failed!!! Upload pdf only.</div>
      )}
      <button type='submit' className='submit-btn text-center '>
        Submit
      </button>
    </form>
  );
}
