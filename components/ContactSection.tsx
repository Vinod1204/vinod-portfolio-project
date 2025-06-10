import React, { useState } from "react"

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:vinod@example.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
      form.message
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16">
      <h1 className="text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
