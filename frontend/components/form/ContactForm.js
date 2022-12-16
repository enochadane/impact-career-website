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
    Phone: "",
    Title: "",
    Organization: "",
    Website: "",
    Position_Type: "Temporary / Contract",
    Position_Location: "",
    Title_of_Position: "",
    How_Did_You_Hear_About_Us: "",
    Resume_Upload: "",
    Resume_title: "",
    Resume_ext: "",
    message: "",
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
          .post("/api/contact", formData, {
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
              Phone: "",
              Title: "",
              Organization: "",
              Website: "",
              Position_Type: "",
              Position_Location: "",
              Title_of_Position: "",
              How_Did_You_Hear_About_Us: "",
              message: "",
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
              pattern='[A-Za-z]+'
              title='First Name sould be in alphabets only'
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
              pattern='[A-Za-z]+'
              title='First Name sould be in alphabets only'
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
              name='Phone'
              className='form-control'
              placeholder='Phone'
              pattern='[0-9]{10}'
              title='Phone no should be digits (0 to 9) and also 10 digits'
              required
              value={query.Phone}
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
              name='Title'
              className='form-control'
              placeholder='Title'
              required
              value={query.Title}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <input
              type='text'
              name='Organization'
              className='form-control'
              placeholder='Organization'
              required
              value={query.Organization}
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
              name='Website'
              className='form-control'
              placeholder='Website'
              required
              value={query.Website}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <select
              className='form-select form-control'
              name='Position_Type'
              required
              value={query.Position_Type}
              onChange={handleChange()}
            >
              <option value='Temporary / Contract'>Temporary / Contract</option>
              <option value='Direct Hire / Permanent'>
                Direct Hire / Permanent
              </option>
              <option value='Executive / Search'>Executive / Search</option>
              <option value='Payrolling'>Payrolling</option>
              <option value='Apply With Us As A Candidate'>
                Apply With Us As A Candidate
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
            <input
              type='text'
              name='Position_Location'
              className='form-control'
              placeholder='Position Location'
              required
              value={query.Position_Location}
              onChange={handleChange()}
            />
          </div>

          <div className='col-sm-6'>
            <input
              type='text'
              name='Title_of_Position'
              className='form-control'
              placeholder='Title of Position'
              required
              value={query.Title_of_Position}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className='row'>
          <div className='col-sm-6'>
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

          <div className='col-sm-6'>
            <input
              type='text'
              name='How_Did_You_Hear_About_Us'
              className='form-control'
              placeholder='How Did You Hear About Us?'
              required
              value={query.How_Did_You_Hear_About_Us}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>

      <div className='mb-3'>
        <textarea
          name='message'
          className='form-control'
          placeholder='Or Alternately, Describe Position:'
          required
          value={query.message}
          onChange={handleChange()}
        />
      </div>
      {formStatus && (
        <div className='thank'>
          Thank you! Your submission has been received!
        </div>
      )}
      {selectedFile && (
        <div className='thank'>Form submission failed!!! Upload pdf only.</div>
      )}
      <button type='submit' className='site-btn text-center '>
        Submit
      </button>
    </form>
  );
}
