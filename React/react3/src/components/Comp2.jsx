import React, { useState } from 'react'

const Comp2 = () => {

    let [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    })

    let [formEntries, setFormEntries] = useState([])

    let [error, setError] = useState({
        status: false,
        message: ""
    })

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


    // ⭐ Handle Input
    const handleInputChange = (e) => {
        let { name, value } = e.target

        // Phone validation – 10 digits
        if (name === "phone" && value.length > 0 && value.length !== 10) {
            setError({
                status: true,
                message: "Phone number must be exactly 10 digits!"
            })
        } else {
            setError({
                status: false,
                message: ""
            })
        }

        setForm(prev => ({ ...prev, [name]: value }))
    }

    // ⭐ Submit
    const handleFormSubmit = (e) => {
        e.preventDefault()

        // Add entry to table
        setFormEntries(prev => [...prev, form])

        alert("Form Submitted Successfully!")

        handleResetClick()
    }

    // ⭐ Reset
    const handleResetClick = () => {
        setForm({
            name: "",
            phone: "",
            email: "",
            address: "",
            password: ""
        })
    }


    return (
        <div 
            className='min-h-screen flex flex-col justify-center items-center p-10'
            style={{
                background: "linear-gradient(135deg, #6EE7B7, #3B82F6)"
            }}
        >

            {/* FORM CONTAINER */}
            <div className='bg-white shadow-2xl rounded-2xl w-full max-w-lg p-10'>

                <h1 className='text-4xl font-extrabold text-center mb-8 text-blue-600'>
                    User Registration Form
                </h1>

                <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>

                    <input
                        onChange={handleInputChange}
                        className='bg-gray-100 p-3 rounded focus:ring-2 ring-blue-400'
                        type="text"
                        name='name'
                        value={form.name}
                        placeholder='Enter your name'
                    />

                    <input
                        onChange={handleInputChange}
                        className='bg-gray-100 p-3 rounded focus:ring-2 ring-blue-400'
                        type="tel"
                        name='phone'
                        value={form.phone}
                        placeholder='Enter phone number'
                    />

                    <input
                        onChange={handleInputChange}
                        className='bg-gray-100 p-3 rounded focus:ring-2 ring-blue-400'
                        type="email"
                        name='email'
                        value={form.email}
                        placeholder='Enter email address'
                    />

                    <textarea
                        onChange={handleInputChange}
                        className='bg-gray-100 p-3 rounded focus:ring-2 ring-blue-400'
                        placeholder='Enter full address'
                        name="address"
                        value={form.address}
                        rows={4}
                    ></textarea>

                    <input
                        onChange={handleInputChange}
                        className='bg-gray-100 p-3 rounded focus:ring-2 ring-blue-400'
                        type="text"
                        name='password'
                        value={form.password}
                        placeholder='Create password'
                    />

                    {/* Password Validation */}
                    {form.password && !passwordRegex.test(form.password) && (
                        <div className='bg-red-200 text-red-700 p-3 rounded text-sm'>
                            Password must contain 1 number, 1 uppercase, 1 lowercase & at least 8 characters.
                        </div>
                    )}

                    {/* Phone Error */}
                    {error.status && (
                        <span className='font-semibold bg-red-200 p-3 block rounded text-red-800'>
                            {error.message}
                        </span>
                    )}

                    <button
                        type='submit'
                        className='bg-green-500 text-white p-3 rounded font-bold hover:bg-dark green-600 transition'
                    >
                        Submit
                    </button>

                    <button
                        onClick={handleResetClick}
                        type='button'
                        className='bg-red-500 text-white p-3 rounded font-bold hover:bg-red-600 transition'
                    >
                        Reset
                    </button>
                </form>
            </div>


            {/* ⭐ TABLE SECTION */}
            <div className='mt-14 w-full max-w-4xl'>
                <h2 className='text-3xl font-bold text-white mb-5 text-center'>Submitted Data</h2>

                {formEntries.length === 0 ? (
                    <p className='text-center text-white text-xl font-semibold'>
                        No data submitted yet.
                    </p>
                ) : (
                    <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
                        <table className='w-full text-left'>
                            <thead className='bg-blue-600 text-white'>
                                <tr>
                                    <th className='px-6 py-3'>Name</th>
                                    <th className='px-6 py-3'>Phone</th>
                                    <th className='px-6 py-3'>Email</th>
                                    <th className='px-6 py-3'>Address</th>
                                    <th className='px-6 py-3'>Password</th>
                                </tr>
                            </thead>

                            <tbody>
                                {formEntries.map((item, index) => (
                                    <tr 
                                        key={index} 
                                        className='border-b hover:bg-gray-100 transition'
                                    >
                                        <td className='px-6 py-4'>{item.name}</td>
                                        <td className='px-6 py-4'>{item.phone}</td>
                                        <td className='px-6 py-4'>{item.email}</td>
                                        <td className='px-6 py-4'>{item.address}</td>
                                        <td className='px-6 py-4'>{item.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Comp2
