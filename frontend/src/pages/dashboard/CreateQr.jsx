import React, { useState } from 'react'
import NavSide from '../../constants/NavSide'
import Phone from '../../components/Phone'
import Accordions from '../../customs/Accordions'
import axios from "axios";
import initialData from '../../constants/InitialData'
import { Basic, Contact, Email, Website, Socials } from '../../components/accordions/Index'

import { useFormik } from 'formik';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));





function CreateQr() {
  const [expanded, setExpanded] = useState('panel0');
  // const [collectRef, setCollectRef] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [newFormData, setNewFormData] = useState(initialData)

  const formik = useFormik(
    {
      initialValues: initialData,
      enableReinitialize: true,
      onSubmit: async (values) => {
        // console.log(values)
        try {
          const response = await axios.post(`http://127.0.0.1:8000/create/`, values,

          );
          console.log(response.data)
          // setCollectRef(prevState => response.data['ref'])

          await sleep(1000);

          try {
            const res = await axios.put(`http://127.0.0.1:8000/upload-image/${response.data['ref']}/`, { 'avatar': values.avatar }, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            );
            console.log(res.data)
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } catch (error) {
          // Handle the error
          console.error(error);
        }

        
      }
    }
  )

  const handleBasicInputChange = (key, value) => {
    setNewFormData((prevState) => ({
      ...prevState,
      [key]: value
    }));
    formik.setValues((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };


  const handleTelephoneChange = (e, index, field) => {
    const { value } = e.target;
    setNewFormData((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee];
      updatedTelephoneEmployee[index][field] = value;
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };
    });
    formik.setValues((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee];
      updatedTelephoneEmployee[index][field] = value;
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };
    });
  };

  const handleEmailChange = (e, index, field) => {
    const { value } = e.target;
    setNewFormData((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee];
      updatedEmailEmployee[index][field] = value;
      return { ...prevState, email_employee: updatedEmailEmployee };
    });
    formik.setValues((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee];
      updatedEmailEmployee[index][field] = value;
      return { ...prevState, email_employee: updatedEmailEmployee };
    });
  };

  const handleWebsiteChange = (e, index, field) => {
    const { value } = e.target;
    setNewFormData((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee];
      updatedWebsiteEmployee[index][field] = value;
      return { ...prevState, website_employee: updatedWebsiteEmployee };
    });
    formik.setValues((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee];
      updatedWebsiteEmployee[index][field] = value;
      return { ...prevState, website_employee: updatedWebsiteEmployee };
    });
  };

  const handleSocialChange = (e, index, field) => {
    const { value } = e.target;
    setNewFormData((prevState) => {
      const updatedSocialsEmployee = [...prevState.socials_employee];
      updatedSocialsEmployee[index][field] = value;
      return { ...prevState, socials_employee: updatedSocialsEmployee };
    });
    formik.setValues((prevState) => {
      const updatedSocialsEmployee = [...prevState.socials_employee];
      updatedSocialsEmployee[index][field] = value;
      return { ...prevState, socials_employee: updatedSocialsEmployee };
    });
  };

  const addTelephoneInput = () => {
    setNewFormData((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee, { type: '', name: '', phone: '' }];
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };
    });
    formik.setValues((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee, { type: '', name: '', phone: '' }];
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };
    });
  };
  const removeTelephoneInput = () => {
    setNewFormData((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee];
      updatedTelephoneEmployee.pop()
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };

    });
    formik.setValues((prevState) => {
      const updatedTelephoneEmployee = [...prevState.telephone_employee];
      updatedTelephoneEmployee.pop()
      return { ...prevState, telephone_employee: updatedTelephoneEmployee };

    });
  };

  const addEmailInput = () => {
    setNewFormData((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee, { name: '', email: '' }];
      return { ...prevState, email_employee: updatedEmailEmployee };

    });
    formik.setValues((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee, { name: '', email: '' }];
      return { ...prevState, email_employee: updatedEmailEmployee };

    });
  };
  const removeEmailInput = () => {
    setNewFormData((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee];
      updatedEmailEmployee.pop()
      return { ...prevState, email_employee: updatedEmailEmployee };

    });
    formik.setValues((prevState) => {
      const updatedEmailEmployee = [...prevState.email_employee];
      updatedEmailEmployee.pop()
      return { ...prevState, email_employee: updatedEmailEmployee };

    });
  };

  const addWebsiteInput = () => {
    setNewFormData((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee, { name: '', url: '' }];
      return { ...prevState, website_employee: updatedWebsiteEmployee };

    });
    formik.setValues((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee, { name: '', url: '' }];
      return { ...prevState, website_employee: updatedWebsiteEmployee };

    });
  };
  const removeWebsiteInput = () => {
    setNewFormData((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee];
      updatedWebsiteEmployee.pop()
      return { ...prevState, website_employee: updatedWebsiteEmployee };

    });
    formik.setValues((prevState) => {
      const updatedWebsiteEmployee = [...prevState.website_employee];
      updatedWebsiteEmployee.pop()
      return { ...prevState, website_employee: updatedWebsiteEmployee };

    });
  };

  const addSocialInput = () => {
    formik.setValues((prevState) => {
      const updatedSocialsEmployee = [...prevState.socials_employee, { type: '', name: '', url: '' }];
      return { ...prevState, socials_employee: updatedSocialsEmployee };

    });
  };
  const removeSocialInput = () => {
    formik.setValues((prevState) => {
      const updatedSocialsEmployee = [...prevState.socials_employee];
      updatedSocialsEmployee.pop()
      return { ...prevState, socials_employee: updatedSocialsEmployee };

    });
  };






  return (
    <div>
      <NavSide >
        <div className='space-y-4 h-full min-h-screen'>
          <div className='md:mt-10 flex justify-between items-center w-full bg-white'>
            <div className='fixed z-[10] bg-white w-full h-28 md:mt-0 -mt-20 pt-10 shadow-lg'>
              <h1 className='text-3xl font-extrabold text-black px-4'>New Employee Qr</h1>
            </div>
            <div className='fixed right-10 z-[10] md: md:mt-0 -mt-14'>


              <button className='py-4 md:px-16 px-6  bg-primary rounded-3xl text-white hover:bg-secondary hover:-translate-y-1 transition-all' onClick={formik.handleSubmit}>Create magic</button>

            </div>


          </div>

          <div className='md:pt-[100px] pt-[50px] flex md:flex-row flex-col gap-6'>

            <div className='md:w-9/12'>

              <div className='p-7'>

                <Accordions panelName={`panel0`} Title={`Basic Information`} handleChange={handleChange} expanded={expanded}>
                  <Basic newFormData={newFormData} handleBasicInputChange={handleBasicInputChange} />
                </Accordions>

                <Accordions panelName={`panel1`} Title={`Contact Information`} handleChange={handleChange} expanded={expanded}>
                  <Contact data={newFormData} handleTelephoneChange={handleTelephoneChange} onClickAdd={addTelephoneInput} onCLickRemove={removeTelephoneInput} />
                </Accordions>

                <Accordions panelName={`panel3`} Title={`Emails`} handleChange={handleChange} expanded={expanded}>
                  <Email newFormData={newFormData} handleEmailChange={handleEmailChange} addEmailInput={addEmailInput} removeEmailInput={removeEmailInput} />
                </Accordions>

                <Accordions panelName={`panel4`} Title={`Website`} handleChange={handleChange} expanded={expanded}>
                  <Website newFormData={newFormData} handleWebsiteChange={handleWebsiteChange} addWebsiteInput={addWebsiteInput} removeWebsiteInput={removeWebsiteInput} />
                </Accordions>

                <Accordions panelName={`panel5`} Title={`Socials`} handleChange={handleChange} expanded={expanded}>
                  <Socials newFormData={newFormData} handleSocialChange={handleSocialChange} addSocialInput={addSocialInput} removeSocialInput={removeSocialInput} />
                </Accordions>



              </div>

            </div>

            <div className='flex justify-center md:fixed md:right-8'>
              <Phone data={formik.values} />

            </div>




          </div>

        </div>

      </NavSide>
    </div>
  )
}

export default CreateQr