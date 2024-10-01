import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  User,
  Users,
  Calendar,
} from "lucide-react";

const ContactPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `New Contact Form Submission:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Number of People: ${formData.people}
Tentative Date: ${startDate.toLocaleDateString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919960006806?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        {/* Responsive flex layout */}
        <div className="flex flex-col lg:flex-row lg:gap-10 mt-20 lg:mt-48 justify-center items-start w-full px-4 lg:px-10">
          {/* left-container */}
          <div className="relative flex flex-col items-start justify-start pb-10 pt-10 text-white lg:w-1/2">
            <div className="flex flex-col gap-5 justify-center items-start w-full">
              <h2 className="text-md tracking-widest text-[#CE9639] font-semibold uppercase">
                Contact us
              </h2>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-left">
                Have Questions? Get in touch!
              </div>
              <div className="flex flex-col gap-3 items-start font-bold text-sm sm:text-md">
                <p className="flex gap-3 items-center">
                  <MapPin color="#CE9639" />
                  <span className="">Hilton Goa Resort, Saipem, Candolim</span>
                </p>
                <p className="flex gap-3 items-center">
                  <Smartphone color="#CE9639" />
                  <span>9960006806 / 9960007937</span>
                </p>
                <p className="flex gap-3 items-center">
                  <Mail color="#CE9639" />
                  <span>info@phoenixcasino.in</span>
                </p>
              </div>
            </div>
          </div>

          {/* right-container */}
          <div className="flex items-center justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="w-full max-w-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Input */}
                  <div className="transition-all duration-300">
                    <label htmlFor="name" className="text-white text-sm font-medium mb-1 block">Name</label>
                    <div className="flex gap-2 items-center focus-within:text-white border-b border-gray-600">
                      <User color="white" size={20} />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="flex h-10 w-full bg-transparent py-2 text-sm sm:text-md text-white placeholder:text-gray-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="transition-all duration-300">
                    <label htmlFor="phone" className="text-white text-sm font-medium mb-1 block">Phone Number</label>
                    <div className="flex gap-2 items-center focus-within:text-white border-b border-gray-600">
                      <Phone color="white" size={20} />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex h-10 w-full bg-transparent py-2 text-sm sm:text-md text-white placeholder:text-gray-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="transition-all duration-300">
                    <label htmlFor="email" className="text-white text-sm font-medium mb-1 block">Email</label>
                    <div className="flex gap-2 items-center focus-within:text-white border-b border-gray-600">
                      <Mail color="white" size={20} />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex h-10 w-full bg-transparent py-2 text-sm sm:text-md text-white placeholder:text-gray-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Number of People Input */}
                  <div className="transition-all duration-300">
                    <label htmlFor="people" className="text-white text-sm font-medium mb-1 block">Number of People</label>
                    <div className="flex gap-2 items-center focus-within:text-white border-b border-gray-600">
                      <Users color="white" size={20} />
                      <input
                        id="people"
                        name="people"
                        type="number"
                        value={formData.people}
                        onChange={handleInputChange}
                        className="flex h-10 w-full bg-transparent py-2 text-sm sm:text-md text-white placeholder:text-gray-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Tentative Date Input */}
                  <div className="transition-all duration-300">
                    <label htmlFor="date" className="text-white text-sm font-medium mb-1 block">Tentative Date</label>
                    <div className="flex gap-2 items-center focus-within:text-white border-b border-gray-600">
                      <Calendar color="white" size={20} />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="flex h-10 w-full bg-transparent py-2 text-sm sm:text-md text-white placeholder:text-gray-400 outline-none"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] text-white font-semibold rounded-md hover:opacity-90 transition duration-300"
                  >
                    Send WhatsApp Message <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="my-10 w-full px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.340036703151!2d73.79143477489198!3d15.519891585082807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1b4a50d83ff%3A0x5e31709f023eb4b7!2sPhoenix%20Casino!5e0!3m2!1sen!2sin!4v1725436091672!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;