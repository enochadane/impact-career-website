import axios from 'axios';
import { useState } from 'react';
const GETFORM_FORM_ENDPOINT =
  'https://getform.io/f/022b177a-59f5-4697-9c3c-6b6b4d4cf7ba';
function Form() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    First_Name: '',
    Last_Name: '',
    email: '',
    Phone: '',
    Title: '',
    Organization: '',
    Website: '',
    Position_Location: '',
    Title_of_Position: '',
    How_Did_You_Hear_About_Us: '',
    Resume_Upload: '',
    message: '',
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
    });
    axios
      .post(GETFORM_FORM_ENDPOINT, formData, {
        headers: { Accept: 'application/json' },
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          First_Name: '',
          Last_Name: '',
          email: '',
          Phone: '',
          Title: '',
          Organization: '',
          Website: '',
          Position_Location: '',
          Title_of_Position: '',
          How_Did_You_Hear_About_Us: '',
          message: '',
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    // <div class="container-md">
    <form
      acceptCharset="UTF-8"
      method="POST"
      enctype="multipart/form-data"
      id="ajaxForm"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              name="First_Name"
              className="form-control"
              placeholder="First Name"
              required
              value={query.First_Name}
              onChange={handleChange()}
            />
          </div>

          <div className="col-sm-6">
            <input
              type="text"
              name="Last_Name"
              className="form-control"
              placeholder="Last Name"
              required
              value={query.Last_Name}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              value={query.email}
              onChange={handleChange()}
            />
          </div>

          <div className="col-sm-6">
            <input
              type="tel"
              name="Phone"
              className="form-control"
              placeholder="Phone"
              required
              value={query.Phone}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              name="Title"
              className="form-control"
              placeholder="Title"
              required
              value={query.Title}
              onChange={handleChange()}
            />
          </div>

          <div className="col-sm-6">
            <input
              type="text"
              name="Organization"
              className="form-control"
              placeholder="Organization"
              required
              value={query.Organization}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              name="Website"
              className="form-control"
              placeholder="Website"
              required
              value={query.Website}
              onChange={handleChange()}
            />
          </div>

          <div className="col-sm-6">
            <select
              className="form-select form-control"
              name="Position_Type"
              required
              value={query.Position_Type}
              onChange={handleChange()}
            >
              <option value="Temporary / Contract">Temporary / Contract</option>
              <option value="Direct Hire / Permanent">
                Direct Hire / Permanent
              </option>
              <option value="Executive / Search">Executive / Search</option>
              <option value="Payrolling">Payrolling</option>
              <option value="Apply With Us As A Candidate">
                Apply With Us As A Candidate
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              name="Position_Location"
              className="form-control"
              placeholder="Position Location"
              required
              value={query.Position_Location}
              onChange={handleChange()}
            />
          </div>

          <div className="col-sm-6">
            <input
              type="text"
              name="Title_of_Position"
              className="form-control"
              placeholder="Title of Position"
              required
              value={query.Title_of_Position}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="file"
              className="w-file-upload-input form-control UploadImg"
              accept=".pdf, .doc, .docx, .txt"
              name="Resume_Upload"
              data-iconName="fa-solid fa-cloud-arrow-up"
              data-name="Upload Job Description, If Available"
              aria-hidden="true"
              placeholder="Upload Job Description, If Available"
              tabindex="-1"
              required
              onChange={handleFileChange()}
            />
          </div>

          <div className="col-sm-6">
            <input
              type="text"
              name="How_Did_You_Hear_About_Us"
              className="form-control"
              placeholder="How Did You Hear About Us?"
              required
              value={query.How_Did_You_Hear_About_Us}
              onChange={handleChange()}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          className="form-control"
          placeholder="Or Alternately, Describe Position:"
          required
          value={query.message}
          onChange={handleChange()}
        />
      </div>
      {/* <hr /> */}
      {/* $("form").hide(
        setMessage("Thank you! Your submission has been received!")
      ); */}
      {formStatus ? (
        <div className="thank">
          Thank you! Your submission has been received!
        </div>
      ) : (
        ''
      )}
      <button type="submit" className="site-btn text-center ">
        Submit
      </button>
    </form>
    // </div>
  );
}
export default Form;
