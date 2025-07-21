import React from "react";
import { HeadingH2 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";
import doctorImage from "../../assets/dentist.webp";

// ✅ JSON-style form data
const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 123-4567",
  },
  {
    id: "date",
    label: "Preferred Date",
    type: "date",
  },
  {
    id: "time",
    label: "Preferred Time",
    type: "time",
  },
  {
    id: "service",
    label: "Service",
    type: "select",
    options: [
      "Dental Cleaning",
      "Whitening",
      "Braces Consultation",
      "Root Canal",
      "Emergency Visit",
    ],
  },
];

export default function Appointment() {
  return (
    <section className="lg:pb-16 pb-10   scroll-mt-20">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-10">
        <HeadingH2
          headH2="Book Your Appointment"
          className="text-[var(--primaryColor)]"
        />
        <Line />
      </div>

      {/* Form + Image Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <form
          className="bg-white border border-[var(--borderColor)] p-8 rounded-lg shadow space-y-6 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {formFields.map((field) =>
              field.type === "select" ? (
                <div key={field.id}>
                  <label className="block mb-1 text-sm text-[var(--deepColor)]">
                    {field.label}
                  </label>
                  <select
                    name={field.id}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black text-sm border border-gray-300 focus:outline-none focus:ring focus:ring-[var(--primaryColor)]"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div key={field.id}>
                  <label className="block mb-1 text-sm text-[var(--deepColor)]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-2 rounded bg-white text-black text-sm border border-gray-300 focus:outline-none focus:ring focus:ring-[var(--primaryColor)]"
                  />
                </div>
              )
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[var(--primaryColor)] text-[var(--lightColor)] font-semibold py-2 rounded hover:opacity-90 transition-colors text-sm"
          >
            Submit Appointment
          </button>
        </form>

        {/* Image */}
        <div className="w-full">
          <img
            src={doctorImage}
            alt="Dental Doctor"
            className="w-full max-h-[500px] object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
