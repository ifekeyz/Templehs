import React, { useState } from 'react';
import { ChevronLeft } from 'react-feather';
import PropTypes from 'prop-types';

const LandPage = ({ name, email, imageUrl }) => {
  LandPage.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleScheduleAppointment = () => {
    // Add your logic for scheduling the appointment here
    console.log('Appointment scheduled!');
  };

  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between bg-gray-100 p-4 shadow-sm">
        <div className="flex items-center">
          <div className="text-green-900 font-bold text-lg">Scheduled Appointment</div>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 20c0 1.1.9 2 2 2s2-.9 2-2h-4zm7-9V8c0-3.07-1.64-5.64-4.5-6.32V1c0-.55-.45-1-1-1s-1 .45-1 1v1.68C6.63 2.36 5 4.93 5 8v3L3 12v4h18v-4l-2-2z" />
              </svg>
            </button>
          </div>
          <div className="ml-2">
            <img src={imageUrl} alt="User" className="h-8 w-8 rounded-full" />
          </div>
          <div className="ml-2">
            <div className="text-black font-semibold">{name}</div>
            <div className="text-black text-sm">{email}</div>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex items-center ml-9 mt-5">
        <div className="w-1/4 p-4">
          <div className="flex items-center">
            <button className="mr-2">
              <ChevronLeft size={18} />
            </button>
            <div className="mr-6">Go back</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center mt-5">
        <div className="w-1/4 p-4">
          <div className="text-lg font-bold text-3xl ml-9">Confirm your appointment details</div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4 mr-20 mb-9">
        <div className="w-2/4">
          <div className="p-4 bg-white rounded rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-2xl shadow-lg relative">
            <div className="flex items-center">
              <img src={imageUrl} alt="Doctor" className="h-12 w-12 rounded-full" />
              <div className="ml-4">
                <div className="font-semibold">Leo Stanton, MD</div>
                <div className="text-sm text-gray-500">Care Team Clinician Supervisor</div>
              </div>
            </div>
            
            <ul className="mt-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Date: January 1, 2023</span>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Duration: 30 minutes</span>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Reminder: 15 minutes before</span>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Payment: $100</span>
              </li>
            </ul>
           
          </div>
          <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={handleCheckboxChange}
              className="mr-2 h-4 w-4 text-green-500"
            />
            <div className="text-sm">I confirm that I have read and agree to the terms and conditions</div>
          </div>
          <button
            className={`${
              termsChecked ? 'border rounded-full bg-green-900 hover:bg-green-700 mt-5' : 'rounded-full bg-green-500 cursor-not-allowed mt-5'
            } text-white  py-3 px-2 rounded`}
            onClick={handleScheduleAppointment}
            disabled={!termsChecked}
          >
            Schedule Appointment
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
