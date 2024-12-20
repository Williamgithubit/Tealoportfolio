import React from 'react';


const Contact = () => {
  return (
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.1257658327395!2d-10.683236786162349!3d6.239652535692102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a013af9dbaf0f%3A0x29034808ba3cbbb6!2sMawolo%20Jallah&#39;s%20Compound!5e1!3m2!1sen!2s!4v1734375803334!5m2!1sen!2s" style={{ filter: "grayscale(0) contrast(1.2) opacity(0.4)" }}
      ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">ELWA Rehab Cooper's Farm, Paynesville City, Republic of Liberia.</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href='#' class="text-[#fab702] leading-relaxed">williamj2001tealo@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+231 778 711 864</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Form</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Have a question, project idea, or just want to say hello? Feel free to reach out! I’d love to hear from you.</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in- required" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in- required" />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-[#fab702] focus:ring-2 focus:ring-[#fab702] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in- required"></textarea>
      </div>
      <button class="text-white bg-[#fab702] border-0 py-2 px-6 focus:outline-none hover:bg-[#efd58d] rounded text-lg">Button</button>
     
    </div>
  </div>
</section>
  )
}

export default Contact;