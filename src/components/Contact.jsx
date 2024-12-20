import React from 'react';
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "168cd092-b5b5-4957-82e3-b3d567695627");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successfully",
        icon: "success"
      });
    }
    event.target.reset();
  };

  return (
    <section className="text-gray-600 body-font relative" id='contact'>
      <form onSubmit={onSubmit}>
      <div className="container px-5 py-24 mx-auto flex flex-col-reverse sm:flex-row sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.2338239763917!2d-10.686379926336022!3d6.242656593745668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a010015e9b517%3A0x4747b56518e5631e!2sWilliam%20B%20Johnson%20Sr!5e1!3m2!1sen!2s!4v1734689029031!5m2!1sen!2s" loading="lazy"
            style={{ filter: "grayscale(0) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">ELWA Rehab Cooper's Farm, Paynesville City, Republic of Liberia.</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="#" className="text-[#fab702] leading-relaxed">
                williamj2001tealo@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+231 778 711 864</p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 sm:mb-0 mb-6">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Form</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Have a question, project idea, or just want to say hello? Feel free to reach out! I’d love to hear from you.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in- "
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in- "
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in- "
              required
            ></textarea>
          </div>
          <button className="text-white bg-[#fab702] border-0 py-2 px-6 focus:outline-none hover:bg-[#efd58d] rounded text-lg">
            Submit
          </button>
        </div>
      </div>
      </form>
      
    </section>
  );
};

export default Contact;
