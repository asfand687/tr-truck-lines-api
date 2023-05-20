"use client"

import React, { useState } from 'react'
import toast from "react-hot-toast"
import Loader from '../public/img/animatedDots.svg'

const ContactFormModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedTime, setSelectedTime] = useState('10:00am')
  const [isLoading, setIsLoading] = useState(false)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const response = await fetch('/api/contact-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber,
          selectedTime
        })
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Your request has been submitted", {id: "contact-request-success"})
        // Clear the form fields
        setPhoneNumber('');
        setSelectedTime('')
        setIsLoading(false)
      } else {
        toast.error("Unable to submit request, please try again", {id: "contact-request-error"})
        setIsLoading(false)
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div> 
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
              <form onSubmit={handleFormSubmit}>
                <h3 className="text-lg font-bold pb-4 text-primary">
                  Please enter your email to receive a phone call from us
                </h3>
                <div className='relative pb-4'>
                  <input 
                    required
                    value={phoneNumber}
                    onChange={({target}) => setPhoneNumber(target.value == "0" ? target.value : parseInt(target.value) ? target.value : "")}
                    type="text" 
                    placeholder="Phone Number" 
                    className="input input-primary input-md w-full" 
                  />
                </div>
                <div className='relative pb-4'>
                  <select 
                    defaultValue="Select Time"
                    required
                    className="select select-primary w-full"
                    value={selectedTime} 
                    onChange={({target}) => setSelectedTime(target.value)}
                  >
                    <option>Select Time</option>
                    <option className="10:00 am">10:00 am</option>
                    <option className="11:00 am">11:00 am</option>
                    <option className="12:00 pm">12:00 pm</option>
                    <option className="01:00 pm">01:00 pm</option>
                    <option className="02:00 pm">02:00 pm</option>
                    <option className="3:00 pm">03:00 pm</option>
                    <option className="4:00 pm">04:00 pm</option>
                    <option className="5:00 pm">05:00 pm</option>
                  </select>
                </div>
                <button type="submit" className="h-[48px] flex justify-center items-center w-full text-white btn bg-primary btn-accent">
                  Send Request
                </button>
              </form>
          </label>
        </label>
    </div>
  )
}

export default ContactFormModal
