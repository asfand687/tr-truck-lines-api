"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [truckType, setTruckType] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          emailAddress,
          truckAndEquipmentType: truckType,
        })
      });

      if (response.ok) {
        toast.success("Your request is submitted successfully", {id: "successful-form-submit"})
        const data = await response.json();
        // Clear the form fields
        setFullName('');
        setPhoneNumber('');
        setEmailAddress('');
        setTruckType('');
        setIsLoading(false)
      } else {
        toast.error("Your request is submitted successfully", {id: "error-form-submit"})
        setIsLoading(false)
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <article id="contact" data-aos="fade-left" className="bg-white rounded-2xl md:p-10 p-6 py-16 border shadow-2xl text-gray-800">
      <h2 className="text-primary font-semibold text-3xl pb-4">
        Contact Us For Free Setup
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <input 
            value={fullName}
            onChange={({target}) => setFullName(target.value)}
            className="input input-bordered input-primary w-full transition-all ease-out duration-300" 
            type="text" 
            placeholder="Full Name" 
          />
        </div>
        <div>
          <input
            value={phoneNumber}
            onChange={({target}) => setPhoneNumber(target.value == "0" ? target.value : parseInt(target.value) ? target.value : "")} 
            className="input input-bordered input-primary w-full transition-all ease-out duration-300" 
            type="tel" 
            placeholder="Phone Number" 
          />
        </div>
        <div>
          <input 
            value={emailAddress}
            onChange={({target}) => setEmailAddress(target.value)}
            className="input input-bordered input-primary w-full transition-all ease-out duration-300" 
            type="email" 
            placeholder="Email Address" 
          />
        </div>
        <div>
          <input 
            value={truckType}
            onChange={({target}) => setTruckType(target.value)}
            className="input input-bordered input-primary w-full transition-all ease-out duration-300" 
            type="text" 
            placeholder="Truck Type and Equipment" 
          />
        </div>
        <div>
          <button 
            className="flex justify-center items-center cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 h-[52px] rounded text-xl w-full bg-primary text-light font-semibold mt-4" type="submit" 
          >
            Send Request
          </button>
        </div>
      </form>
    </article>
  )
}

export default ContactForm