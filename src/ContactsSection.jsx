import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  DocumentIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function ContactsSection({contacts, lang}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Normalize and validate phone numbers
  const digitsOnly = (s) => s.replace(/\D/g, "");

  const isValidPhone = (v) => {
    const raw = (v || "").trim();

    // Empty is invalid – handled by validate() if you want it required
    if (!raw) return false;

    const digits = digitsOnly(raw);

    // Ukraine: +380XXXXXXXXX  (12 digits after removing '+')
    if (raw.startsWith("+380")) return digits.length === 12;

    // Ukraine local: 0XXXXXXXXX (10 digits)
    if (raw.startsWith("0")) return digits.length === 10;

    // Generic international: + followed by 10-15 digits
    if (raw.startsWith("+")) return digits.length >= 10 && digits.length <= 15;

    // Fallback: allow 10–15 digits without symbols
    return digits.length >= 10 && digits.length <= 15;
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = lang== 'ua' ? "Введіть ім’я" : "Enter name";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = lang== 'ua' ? "Невірний формат email" : "Invalid email format";
    if (!formData.phone || !isValidPhone(formData.phone))
      newErrors.phone = lang== 'ua' ? "Невірний номер телефону" : "Invalid phone number";
    if (!formData.service.trim()) newErrors.service = lang== 'ua' ? "Поле обов’язкове" : "Required field";
    if (!formData.message.trim()) newErrors.message = lang== 'ua' ? "Поле обов’язкове" : "Required field";
    return newErrors;
  };

  const handleSubmit = (e) => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <section id="contacts" className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Form */}
        <div>
          <h2 className="text-4xl font-bold mb-2 text-gray-900">{contacts.title}</h2>
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
            {contacts.subtitle}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
             {contacts.subtitleL}
  </p>

  <div className="flex flex-wrap gap-4 mb-6">
    <a
      href="mailto:ceo_finansist@gmail.com"
      className="inline-flex items-center gap-2 rounded-lg
        bg-blue-600 px-6 py-3 text-white font-medium
        hover:bg-blue-700 transition-colors duration-300 "
    >
      <EnvelopeIcon className="w-5 h-5" />
             {contacts.send}
    </a>

    <a
      href="tel:+380503429491"
      className="inline-flex items-center gap-2 rounded-lg
        border border-gray-300 px-6 py-3 text-gray-800
        font-medium hover:bg-white transition-colors duration-300 "
    >
      <PhoneIcon className="w-5 h-5" />
             {contacts.call}
    </a>
  </div>

  <div className="border-t border-gray-200 pt-3 space-y-6">
    <h3 className="text-xl font-semibold text-gray-900">
      {contacts.help}
    </h3>
{contacts.points.map((point, index) => (
    <div key={index} className="flex items-start gap-3">
      <div className="mt-1 text-blue-600">
        <CheckCircleIcon className="w-5 h-5" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">
          {point.t}
        </h4>

        <p className="text-gray-600 mt-1">
          {point.text}
        </p>
      </div>
    </div>
  ))}
  </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-2xl p-8 space-y-6  md:mt-[120px] lg:mt-[100px]">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {contacts.subtitleR}
          </h3>

          <div className="space-y-4 text-gray-700 text-lg">
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              <a
                href="tel:+380503429491"
                className="hover:text-blue-600 transition-colors"
              >
                +380 (50) 342-94-91
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              <a
                href="mailto:ceo_finansist@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                ceo_finansist@gmail.com
              </a>
            </div>

            <div className="flex space-x-3">
              <MapPinIcon className="w-6 h-6 text-blue-600 mt-[2px]" />
              <span>
                {contacts.address}
                <br />
                {contacts.address2}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <DocumentIcon className="w-6 h-6 text-blue-600 mt-[2px]" />
              <span>
                {contacts.regNum}: 21860250 
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6 text-gray-500 text-sm">
            {contacts.thank}
            <br />
            {contacts.thank2}
            {" "}
            <span className="font-semibold text-gray-800">
            {contacts.name}</span>!
          </div>
        </div>
      </div>
    </section>
  );
}
