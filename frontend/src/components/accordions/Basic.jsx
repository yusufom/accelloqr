import React from 'react'
import { ImageInput, TextInput, SelectInput, TextAreaInput } from '../../customs/Input'


function Basic({ formik }) {

    const handleBasicInputChange = (key, value) => {
        formik.setValues((prevState) => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <div >

            <div >
                <ImageInput label={`Avatar`} require={false} onChange={(e) => (
                    e.target.files[0]?.size / 1024) / 1024 >= 1 ? alert('File too large') : handleBasicInputChange('avatar', e.target.files[0])
                }
                    image={formik.values.avatar} />



            </div>
            <div className='md:flex justify-between gap-4 my-4'>
                <TextInput label={`Surname`} require={false} value={formik.values.surname} onChange={(e) => handleBasicInputChange('surname', e.target.value)} placeHolder={`Enter surname`} error={formik.errors} helperText={formik.errors.surname} />
                <TextInput label={`First Name`} require={false} value={formik.values.firstName} onChange={(e) => handleBasicInputChange('firstName', e.target.value)} placeHolder={`Enter first name`} error={formik.errors} helperText={formik.errors.firstName} />
            </div>

            <div className='md:flex justify-between gap-4 my-4'>
                <SelectInput label={`Gender`} data={['Male', 'Female']} value={formik.values.gender} firstOption={`Choose gender`} onChange={(e) => handleBasicInputChange('gender', e.target.value)} error={formik.gender} helperText={formik.errors.gender}/>
                <TextInput label={`Company`} require={false} value={formik.values.company} onChange={(e) => handleBasicInputChange('company', e.target.value)} placeHolder={`Enter company`} error={formik.errors} helperText={formik.errors.company}/>
            </div>

            <div className='md:flex justify-between gap-4 my-4'>
                <TextInput label={`Company Address`} require={false} value={formik.values.address} onChange={(e) => handleBasicInputChange('address', e.target.value)} placeHolder={`Enter address`} name={`address`} error={formik.errors} helperText={formik.errors.address}/>
                <TextInput label={`Position`} require={false} value={formik.values.position} onChange={(e) => handleBasicInputChange('position', e.target.value)} placeHolder={`Enter position`} name={`position`} error={formik.errors} helperText={formik.errors.position} />
            </div>

            <div className='flex justify-between gap-4 my-4'>
                <TextAreaInput label={`Summary`} require={false} value={formik.values.summary} onChange={(e) => handleBasicInputChange('summary', e.target.value)} placeHolder={`Enter summary`} />
            </div>


        </div>
    )
}

export default Basic
