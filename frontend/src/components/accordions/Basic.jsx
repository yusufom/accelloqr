import React from 'react'
import { ImageInput, TextInput, SelectInput, TextAreaInput } from '../../customs/Input'


function Basic({ newFormData, handleBasicInputChange }) {
    
    return (
        <div >

            <div >
                <ImageInput label={`Avatar`} require={false} onChange={(e) => (
                    e.target.files[0]?.size / 1024) / 1024 >= 1 ? alert('File too large') : handleBasicInputChange('avatar', e.target.files[0])
                    } 
                    image={newFormData?.avatar} />



            </div>
            <div className='md:flex justify-between gap-4 my-4'>
                <TextInput label={`Surname`} require={false} value={newFormData?.surname} onChange={(e) => handleBasicInputChange('surname', e.target.value)} placeHolder={`Enter surname`} />
                <TextInput label={`First Name`} require={false} value={newFormData?.firstName} onChange={(e) => handleBasicInputChange('firstName', e.target.value)} placeHolder={`Enter first name`} />
            </div>

            <div className='md:flex justify-between gap-4 my-4'>
                <SelectInput label={`Gender`} data={['Male', 'Female']} value={newFormData?.gender} firstOption={`Choose gender`} onChange={(e) => handleBasicInputChange('gender', e.target.value)} />
                <TextInput label={`Address`} require={false} value={newFormData?.address} onChange={(e) => handleBasicInputChange('address', e.target.value)} placeHolder={`Enter address`} />
            </div>

            <div className='md:flex justify-between gap-4 my-4'>
                <TextInput label={`Company`} require={false} value={newFormData?.company} onChange={(e) => handleBasicInputChange('company', e.target.value)} placeHolder={`Enter company`} />
                <TextInput label={`Position`} require={false} value={newFormData?.position} onChange={(e) => handleBasicInputChange('position', e.target.value)} placeHolder={`Enter position`} />
            </div>

            <div className='flex justify-between gap-4 my-4'>
                <TextAreaInput label={`Summary`} require={false} value={newFormData?.summary} onChange={(e) => handleBasicInputChange('summary', e.target.value)} placeHolder={`Enter summary`} />
            </div>


        </div>
    )
}

export default Basic
