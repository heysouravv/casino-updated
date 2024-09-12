import React from "react";
import {
  ArrowRight,
  Book,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Smartphone,
  User,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        {/* Responsive flex layout */}

        <div className="flex flex-col md:flex-row md:gap-10 mt-48 justify-center items-start w-full">
          {/* left-container */}
          <div className="relative bg-red flex flex-col items-start justify-start px-4 pb-10 pt-10 sm:px-6 sm:pb-16 text-white lg:px-40 lg:pb-24 md:w-1/2">
            <div className="flex flex-col gap-5 justify-center items-start md:items-start pl-10 sm:pl-0">
              <h2 className="text-md tracking-widest text-[#CE9639] font-semibold uppercase">
                Contact us
              </h2>
              <div className="text-xl sm:text-3xl xl:text-5xl font-bold text-left">
                Have Questions? Get in touch!
              </div>
              <div className="flex flex-col gap-3 items-start font-bold text-md">
                <p className="flex gap-3">
                  <MapPin color="#CE9639" />
                  <span className="">address</span>
                </p>
                <p className="flex gap-3">
                  <Smartphone color="#CE9639" />
                  <span>+91 123456789</span>
                </p>
                <p className="flex gap-3">
                  <Mail color="#CE9639" />
                  <span>info@example.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* right-container */}
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10 md:w-1/2">
            <div className="w-full xl:max-w-md 2xl:max-w-4xl px-10">
              <form>
                <div className="space-y-5">
                  {/* Form input fields */}
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Name Input */}
                    <div className="flex-1 mt-2 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                      <div className="flex gap-2 items-center focus:text-white border-b border-gray-600">
                        <User color="white" size={20} />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Name"
                          className="flex h-10 w-full bg-transparent py-2 text-md placeholder:text-gray-300 outline-none"
                          required
                        />
                      </div>
                      <span className="block max-w-0 group-hover:max-w-full h-[1px] rounded-lg bg-white transition-all duration-500"></span>
                    </div>

                    {/* Email Input */}
                    <div className="flex-1 mt-2 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                      <div className="flex gap-2 items-center focus:text-white border-b border-gray-600">
                        <Mail color="white" size={20} />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="flex h-10 w-full bg-transparent py-2 text-md placeholder:text-gray-300 focus:text-white border-b border-gray-600 outline-none"
                          required
                        />
                      </div>
                      <span className="block max-w-0 group-hover:max-w-full h-[1px] rounded-lg bg-white transition-all duration-500"></span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Phone Number Input */}
                    <div className="flex-1 mt-2 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                      <div className="flex gap-2 items-center focus:text-white border-b border-gray-600">
                        <Phone color="white" size={20} />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Phone number"
                          className="flex h-10 w-full bg-transparent py-2 text-md placeholder:text-gray-300 focus:text-white border-b border-gray-600 outline-none"
                          required
                        />
                      </div>
                      <span className="block max-w-0 group-hover:max-w-full h-[1px] rounded-lg bg-white transition-all duration-500"></span>
                    </div>

                    {/* Subject Input */}
                    <div className="flex-1 mt-2 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                      <div className="flex gap-2 items-center focus:text-white border-b border-gray-600">
                        <Book color="white" size={20} />
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          className="flex h-10 w-full bg-transparent py-2 text-md placeholder:text-gray-300 focus:text-white border-b border-gray-600 outline-none"
                          required
                        />
                      </div>
                      <span className="block max-w-0 group-hover:max-w-full h-[1px] rounded-lg bg-white transition-all duration-500"></span>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="mt-2 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <div className="flex gap-2 items-center focus:text-white border-b border-gray-600">
                      <Pencil color="white" size={20} className="mb-6" />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can i help you ?"
                        className="flex w-full text-md bg-transparent px-3 py-2 placeholder:text-gray-300 focus:text-white border-b border-gray-600 outline-none"
                        rows="2"
                        required
                      ></textarea>
                    </div>
                    <span className="block max-w-0 group-hover:max-w-full h-[1px] rounded-lg bg-white transition-all duration-500"></span>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center mt-10 bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] w-fit px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Get in touch <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.340036703151!2d73.79143477489198!3d15.519891585082807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1b4a50d83ff%3A0x5e31709f023eb4b7!2sPhoenix%20Casino!5e0!3m2!1sen!2sin!4v1725436091672!5m2!1sen!2sin"
            // width="680"
            // height="720"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[90vw] h-[90vh]"
          ></iframe>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Contact;
