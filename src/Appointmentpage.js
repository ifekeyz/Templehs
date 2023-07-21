import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import PropTypes from 'prop-types';

const AppointmentPage = ({ name, email, imageUrl }) => {
  AppointmentPage.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  const buttonContainerRef = useRef(null);

  const scrollButtons = (scrollOffset) => {
    if (buttonContainerRef.current) {
      const container = buttonContainerRef.current;
      const scrollLeft = container.scrollLeft;

      container.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
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
          <div className="text-lg font-bold text-3xl ml-9">Select your doctor and appointment</div>
        </div>
        <div className="flex-1 w-1/4 p-6 flex justify-end">
          <div className="flex justify-center">
            <input type="date" className="border border-gray-300 rounded px-4 py-2 w-1/4" placeholder="Calendar 1" />
            <input type="time" className="border border-gray-300 rounded px-4 py-2 ml-4 w-1/4" placeholder="Calendar 2" />
            <select className="border border-gray-300 rounded px-4 py-2 ml-4 w-1/4">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
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
            <div className="absolute top-2 right-0 bg-green-100 text-green-600 rounded-bl-sm rounded-tl-sm rounded-br-sm rounded-tr-xl py-1 px-2 rounded">
              Virtual Assist only
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Dr. Leo Nieto is a board certified internist with a broad experience treating both complex and simple medical conditions. He has been practicing for more than 10 years. He graduated from Tufts Univ...</p>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-900">Next Available Slots</div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="flex items-center">
                <div className="overflow-x-auto whitespace-nowrap" ref={buttonContainerRef}>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 3:00 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 6:30 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Wed 3/29, 1:30 PM</button>
                  {/* Add more buttons here */}
                </div>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(-100)}>
                  <ChevronLeft size={18} />
                </button>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(100)}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-600">Check Full Profile and Availability</div>
            </div>
          </div>
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
            <div className="absolute top-2 right-0 bg-blue-100 text-blue-600 rounded-bl-sm rounded-tl-sm rounded-br-sm rounded-tr-xl py-1 px-2 rounded">
              In person visit only
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Or. Marcelino is a board-certified Internal Medicine physician based in Sen Diego, CA. Ha received his Doctor of Osteopathic Medicine degree from Western University/COMP In Pomona, CA andcompleted...</p>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-900">Next Available Slots</div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="flex items-center">
                <div className="overflow-x-auto whitespace-nowrap" ref={buttonContainerRef}>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 3:00 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 6:30 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Wed 3/29, 1:30 PM</button>
                  {/* Add more buttons here */}
                </div>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(-100)}>
                  <ChevronLeft size={18} />
                </button>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(100)}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-600">Check Full Profile and Availability</div>
            </div>
          </div>
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
            <div className="absolute top-2 right-0 bg-green-100 text-green-600 rounded-bl-sm rounded-tl-sm rounded-br-sm rounded-tr-xl py-1 px-2 rounded">
              Virtual Assist only
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Dr. Pat Nieto is a Family Prectice physician with Doctor on Demand. Dr. Mattis received her undergraduate degree from Smith Colloge in 2004, and her medical degree from Columbia University in 2008</p>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-900">Next Available Slots</div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="flex items-center">
                <div className="overflow-x-auto whitespace-nowrap" ref={buttonContainerRef}>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 3:00 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 6:30 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Wed 3/29, 1:30 PM</button>
                  {/* Add more buttons here */}
                </div>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(-100)}>
                  <ChevronLeft size={18} />
                </button>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(100)}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-600">Check Full Profile and Availability</div>
            </div>
          </div>
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
            <div className="absolute top-2 right-0 bg-blue-100 text-blue-600 rounded-bl-sm rounded-tl-sm rounded-br-sm rounded-tr-xl py-1 px-2 rounded">
              In person Visit only
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Dr. Audrey is a boerd certifled internist with a broad experience treating both complex and simple medical conditions. He has been practioing for more than 10 years. He graduated from Tufts Univ.</p>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-900">Next Available Slots</div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="flex items-center">
                <div className="overflow-x-auto whitespace-nowrap" ref={buttonContainerRef}>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 3:00 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Today, 6:30 PM</button>
                  <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300">Wed 3/29, 1:30 PM</button>
                  {/* Add more buttons here */}
                </div>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 mr-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(-100)}>
                  <ChevronLeft size={18} />
                </button>
                <button className=" border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-transparent hover:border-green-800 hover:text-green-800 transition duration-300" onClick={() => scrollButtons(100)}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <div className="font-semibold text-green-600">Check Full Profile and Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
