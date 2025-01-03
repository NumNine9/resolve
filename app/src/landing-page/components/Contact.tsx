import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const ContactUs: React.FC = () => {
  const libraries = ['places'];
  const mapContainerStyle = {
    width: '30vw',
    height: '35vh',
  };
  const center = {
    lat: 4.0440, // default latitude
    lng: 9.6973, // default longitude
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA2aMLuvQyCRzvxrjHv3leaU4oh41xT78c',
   libraries:  ['places'],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <section id='contact' className="dark:bg-boxdark-2 py-12 mx-auto mt-48">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-yellow-500 font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:ml-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Reach Out to Us</h3>
              <p className="text-gray-700 text-base mb-4">
                Have questions or need assistance? Feel free to reach out to us via email or phone.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 text-base">
                  <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-base">
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
                </p>
              </div>
              <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;