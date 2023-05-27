import React from 'react'

function TextInput({ label, value, onChange, placeHolder, error, helperText }) {
    return (
        <div className='w-full'>
            <p className='p-1 '>{label}</p>
            <input type="text" className={`${helperText && 'border-red-600 focus:border-red-600' } h-12 w-full outline-1 border-2 rounded-full px-4 text-base transition-all`} value={value} onChange={onChange} placeholder={placeHolder} />
            {error &&
                <p className='text-red-700 ml-4 text-sm mt-1'>{helperText}</p>
            }
        </div>
    )
}

function SelectInput({ label, data, value, onChange, firstOption, error, helperText }) {
    return (
        <div className='w-full'>
            <label hmlfor={label} className='p-1.5'>{label}</label>

            <select name={label} id={label} className={`${helperText && 'border-red-600 focus:border-red-600' } w-full h-12 rounded-full px-4 text-base transition-all bg-transparent border-2 outline-1 mt-2`} value={value} onChange={onChange}>
                <option value={`item`} className='rounded-full border' defaultValue>{firstOption}</option>
                {data?.map((item, index) => (
                    <option value={item} className='rounded-full border' key={index}>{item}</option>

                ))}
            </select>
            {error &&
                <p className='text-red-700 ml-4 text-sm'>{helperText}</p>
            }

        </div>
    )
}

function TextAreaInput({ label, value, onChange, placeHolder }) {
    return (
        <div className='w-full'>
            <p className='p-1 '>{label}</p>
            <textarea type="text" className='w-full outline-1 border-2  rounded-xl px-4 py-1 text-base transition-all' value={value} onChange={onChange} rows={4} cols={10} placeholder={placeHolder} />
        </div>
    )
}

function ImageInput({ label, onChange, image }) {
    return (
        <div className='w-28 h-28 mb-20 '>
            <p className='p-1 '>{label}</p>
            <div className='w-full h-full cursor-pointer outline-1 border-2 rounded-xl transition-all relative'>
                {image &&
                    <div className='flex items-center justify-center w-fit'>
                        {image.name ? <p>{image.name}</p> : <p>{image}</p>}

                    </div>

                }
                <input type="file" className='h-full w-full opacity-0 border px-4 text-base transition-all' onChange={onChange} />

            </div>
            <p className='w-[300px] overflow-visible'>Upload Image: PNG, JPEG, WEBP</p>
        </div>
    )
}

export { TextInput, SelectInput, TextAreaInput, ImageInput }
