import React from 'react'
import { SelectInput, TextInput } from '../../customs/Input';


function Socials({ newFormData, handleSocialChange, addSocialInput, removeSocialInput }) {
    return (
        <div >
            {newFormData.socials_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    <div className='md:w-1/4 w-[49%]'>
                        <SelectInput label={`Type`} data={['Facebook', 'Twitter', 'Linkedin', 'Instagram', 'Github']} firstOption={`Choose social media`} value={item.type} onChange={(e) => handleSocialChange(e, index, 'type')} />
                    </div>
                    <div className='md:w-1/4 w-[49%]'>
                        <TextInput label={`Name`} require={false} value={item.name} onChange={(e) => handleSocialChange(e, index, 'name')} placeHolder={`Enter title`} />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <TextInput label={`Url`} require={false} value={item.url} onChange={(e) => handleSocialChange(e, index, 'url')} placeHolder={`Enter url`} />
                    </div>

                </div>
            ))}
            <div className=' mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={addSocialInput}>+ Add Socials</button>
                {newFormData.socials_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={removeSocialInput}>- Remove Socials</button>

                }
            </div>
        </div>
    )
}

export default Socials
