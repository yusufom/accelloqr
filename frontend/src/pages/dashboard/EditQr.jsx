import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import NavSide from '../../constants/NavSide'
import Phone from '../../components/Phone'
import Accordions from '../../customs/Accordions'
import initialData from '../../constants/InitialData'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router'



import axios from "axios";
// import initialData from '../../constants/InitialData'
import { Basic, Contact, Email, Website, Socials } from '../../components/accordions/Index'
import { ValidationSchema } from '../../constants/ValidationSchema';

import { useFormik } from 'formik';
import EditSkeleton from '../../components/EditSkeleton';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));



function EditQr() {
    const { ref } = useParams();

    const [isLoading, setisLoading] = useState(true)

    const [expanded, setExpanded] = useState('panel0');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };




    // setNewFormData(data)

    const formik = useFormik(
        {
            initialValues: initialData,
            validationSchema: ValidationSchema,
            enableReinitialize: true,
            onSubmit: async (values) => {
                // console.log(values)
                enqueueSnackbar('Updating...', { variant: 'info' })

                try {
                    const response = await axios.put(`${process.env.REACT_APP_HOST_NAME}/employees/update/${ref}/`, values,

                    );
                    console.log(response.data)

                    await sleep(1000);

                    if (values.avatar instanceof File) {
                        try {
                            const res = await axios.put(`${process.env.REACT_APP_HOST_NAME}/upload-image/${ref}/`, { 'avatar': values.avatar }, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                            );
                            console.log(res.data)
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    enqueueSnackbar('Qr updated', { variant: 'success' })
                    await sleep(1000)
                    navigate(0)
                } catch (error) {
                    enqueueSnackbar('Something went wrong', { variant: 'error' })
                    console.error(error);
                }


            }
        }
    )
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST_NAME}/employees/${ref}/`)
            .then(response => {
                formik.setValues(response.data);
                setisLoading(false)
            })
            .catch(error => {
                console.error(error);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    if (isLoading) {

        return <EditSkeleton />
    }


    return (
        <div>
            <NavSide >
                <div className='space-y-4 h-full min-h-screen'>
                    <div className='md:mt-10 flex justify-between items-center w-full bg-white'>
                        <div className='fixed z-[10] bg-white w-full h-28 md:mt-0 -mt-20 pt-10 shadow-lg'>
                            <h1 className='text-3xl font-extrabold text-black px-4'>Edit {formik.values.surname} {formik.values.firstName}'s Qr</h1>
                        </div>
                        <div className='fixed right-10 z-[10] md: md:mt-0 -mt-14'>
                            <button className='xl:h-16 xl:w-44 w-32 h-12 bg-primary rounded-3xl text-white hover:bg-secondary hover:-translate-y-1 transition-all text-center max-w-sm mx-auto flex justify-center items-center disabled:opacity-50' type='submit' onClick={formik.handleSubmit} disabled={formik.isSubmitting} >
                                {formik.isSubmitting ? (<svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>) : <p>Save</p>}
                            </button>
                        </div>
                    </div>

                    <div className='md:pt-[100px] pt-[50px] flex md:flex-row flex-col gap-6'>

                        <div className='md:w-9/12'>

                            <div className='p-7'>

                                <Accordions panelName={`panel0`} Title={`Basic Information`} handleChange={handleChange} expanded={expanded}>
                                    <Basic formik={formik} />
                                </Accordions>

                                <Accordions panelName={`panel1`} Title={`Contact Information`} handleChange={handleChange} expanded={expanded}>
                                    <Contact formik={formik} />
                                </Accordions>

                                <Accordions panelName={`panel3`} Title={`Emails`} handleChange={handleChange} expanded={expanded}>
                                    <Email formik={formik} />
                                </Accordions>

                                <Accordions panelName={`panel4`} Title={`Website`} handleChange={handleChange} expanded={expanded}>
                                    <Website formik={formik} />
                                </Accordions>

                                <Accordions panelName={`panel5`} Title={`Socials`} handleChange={handleChange} expanded={expanded}>
                                    <Socials formik={formik} />
                                </Accordions>



                            </div>

                        </div>

                        <div className='flex justify-center md:fixed md:right-8'>
                            <Phone data={formik.values} edit={true} />


                        </div>




                    </div>

                </div>

            </NavSide>
        </div>
    )
}

export default EditQr