
import React from 'react';
import { SelectInput, TextInput } from '../../customs/Input';


function Contact({ data, handleTelephoneChange, onClickAdd, onCLickRemove }) {


    return (
        <div>
            {data?.telephone_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    <div className='md:w-1/4 w-[49%]'>
                        <SelectInput label={`Type`} data={['Mobile', 'Home', 'Work']} firstOption={`Choose Phone Type`} value={item.type}
                            onChange={(e) => handleTelephoneChange(e, index, 'type')}
                        />

                    </div>
                    <div className='md:w-1/4 w-[49%]'>
                        <TextInput label={`Name`} require={false} value={item.name} placeHolder={`Enter title`}
                            onChange={(e) => handleTelephoneChange(e, index, 'name')}

                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <TextInput label={`Phone`} require={false} value={item.phone} placeHolder={`Enter phone number`}
                            onChange={(e) => handleTelephoneChange(e, index, 'phone')}
                        />
                    </div>

                </div>
            ))}
            <div className=' mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={onClickAdd}>+ Add Contact</button>
                {data?.telephone_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={onCLickRemove}>- Remove Contact</button>

                }
            </div>
        </div>
    )
}


export default Contact
