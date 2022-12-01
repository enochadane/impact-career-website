import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendContactForm } from "../../lib/api";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  FormControl,
  Container,
  Heading,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
  ChakraProvider,
} from "@chakra-ui/react";

const initValues = {
  Firstname: "",
  Lastname: "",
  email: "",
  Phone: Number,
  Title: "",
  Organization: "",
  Website: "",
  Position_Type: "",
  Position_Location: "",
  Title_of_Position: "",
  How_Did_You_Hear_About_Us: "",
  Resume_Upload: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Thank you. Your submission has been received.",
        status: "success",
        // duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <ChakraProvider>
        {/* <Container> */}
        {error && (
          <Text color='red.300' my={4} fontSize='xl'>
            {error}
          </Text>
        )}
        <div>
          <div>
            <div>
              <div className='mb-3'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Firstname && !values.Firstname}
                    >
                      <Input
                        type='text'
                        name='Firstname'
                        className='form-control p-4'
                        placeholder='First Name'
                        errorbordercolor='red.300'
                        value={values.Firstname}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Firstname is Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Lastname && !values.Lastname}
                      mb={5}
                    >
                      <Input
                        type='text'
                        name='Lastname'
                        className='form-control p-4'
                        placeholder='Last Name'
                        errorbordercolor='red.300'
                        value={values.Lastname}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Lastname is Required</FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* <FormLabel>Lastname</FormLabel> */}

              <div className='mb-3'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.email && !values.email}
                      mb={5}
                    >
                      <Input
                        type='email'
                        name='email'
                        className='form-control p-4'
                        placeholder='Email'
                        errorbordercolor='red.300'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Email is Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Phone && !values.Phone}
                      mb={5}
                    >
                      <Input
                        type='tel'
                        name='Phone'
                        className='form-control p-4'
                        placeholder='Phone'
                        errorbordercolor='red.300'
                        value={values.Phone}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>
                        Phone number is Required
                      </FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className='mb-3'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Title && !values.Title}
                      mb={5}
                    >
                      <Input
                        type='text'
                        name='Title'
                        className='form-control p-4'
                        placeholder='Title'
                        errorbordercolor='red.300'
                        value={values.Title}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Title is Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Organization && !values.Organization}
                      mb={5}
                    >
                      <Input
                        type='text'
                        name='Organization'
                        className='form-control p-4'
                        placeholder='Organization'
                        errorbordercolor='red.300'
                        value={values.Organization}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>
                        Organization is Required
                      </FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className='mb-3'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Website && !values.Website}
                      mb={5}
                    >
                      <Input
                        type='text'
                        name='Website'
                        className='form-control p-4'
                        placeholder='Website'
                        errorbordercolor='red.300'
                        value={values.Website}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Website is Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={touched.Position_Type && !values.Position_Type}
                      mb={5}
                    >
                      <select
                        className='form-control'
                        type='text'
                        placeholder='Website'
                        name='Position_Type'
                        value={values.Position_Type}
                        onChange={handleChange}
                        onBlur={onBlur}
                      >
                        <option value='Temporary / Contract'>
                          Temporary / Contract
                        </option>
                        <option value='Direct Hire / Permanent'>
                          Direct Hire / Permanent
                        </option>
                        <option value='Executive / Search'>
                          Executive / Search
                        </option>
                        <option value='Payrolling'>Payrolling</option>
                        <option value='Apply With Us As A Candidate'>
                          Apply With Us As A Candidate
                        </option>
                      </select>
                      <FormErrorMessage>
                        Position type is Required
                      </FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className='mb-3'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <FormControl
                      isRequired
                      isInvalid={
                        touched.Position_Location && !values.Position_Location
                      }
                      mb={5}
                    >
                      <Input
                        type='email'
                        className='form-control p-4'
                        placeholder='Position Location'
                        name='Position_Location'
                        errorbordercolor='red.300'
                        value={values.Position_Location}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>
                        Position Location is Required
                      </FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='col-sm-6'>
                    <FormControl
                      mb={5}
                      isRequired
                      isInvalid={
                        touched.Title_of_Position && !values.Title_of_Position
                      }
                    >
                      <Input
                        type='text'
                        className='form-control p-4'
                        placeholder='Title of Position'
                        name='Title_of_Position'
                        errorbordercolor='red.300'
                        value={values.Title_of_Position}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>
                        Title of position is Required
                      </FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
              </div>

              <FormControl
                mb={5}
                isRequired
                isInvalid={touched.Resume_Upload && !values.Resume_Upload}
              >
                <div className='mb-3'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <Input
                        type='file'
                        className='w-file-upload-input form-control UploadImg p-4'
                        name='Resume_Upload'
                        accept='.pdf, .doc, .docx, .txt'
                        data-name='Upload Job Description, If Available'
                        aria-hidden='true'
                        placeholder='Upload Job Description, If Available'
                        tabIndex='-1'
                        errorbordercolor='red.300'
                        value={values.Resume_Upload}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                    </div>
                    <div className='col-sm-6'>
                      <FormControl
                        mb={5}
                        isRequired
                        isInvalid={
                          touched.How_Did_You_Hear_About_Us &&
                          !values.How_Did_You_Hear_About_Us
                        }
                      >
                        <Input
                          type='text'
                          className='form-control p-4'
                          placeholder='How Did You Hear About Us?'
                          name='How_Did_You_Hear_About_Us'
                          errorbordercolor='red.300'
                          value={values.How_Did_You_Hear_About_Us}
                          onChange={handleChange}
                          onBlur={onBlur}
                        />
                        <FormErrorMessage>
                          Hear About us is Required
                        </FormErrorMessage>
                      </FormControl>
                    </div>
                  </div>
                </div>

                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={5}
                isRequired
                isInvalid={touched.message && !values.message}
              >
                <textarea
                  type='text'
                  name='message'
                  className='form-control p-4'
                  placeholder='Or Alternately, Describe Position:'
                  errorbordercolor='red.300'
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>Message is Required</FormErrorMessage>
              </FormControl>
            </div>
            <div className='form-group text-center'>
              <Button
                id='formButton'
                type='submit'
                value='Submit'
                data-wait='Please wait...'
                className='site-btn'
                variant='outline'
                colorScheme='blue'
                isLoading={isLoading}
                disabled={
                  !values.Firstname ||
                  !values.Lastname ||
                  !values.email ||
                  !values.Phone ||
                  !values.Title ||
                  !values.Organization ||
                  !values.Website ||
                  !values.Position_Type ||
                  !values.Position_Location ||
                  !values.Title_of_Position ||
                  !values.How_Did_You_Hear_About_Us ||
                  !values.Resume_Upload ||
                  !values.message
                }
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </ChakraProvider>
    </>
  );
}
