import React, { useState } from "react"

const ContactSection = () => {
  const [status, setStatus] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")
    const formData = new FormData(e.currentTarget)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    })
    if (response.ok) {
      setStatus("Message sent!")
      e.currentTarget.reset()
    } else {
      setStatus("Failed to send")
    }
  }

  return (
    <section id="contact" className="my-12">
      <h1 className="text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl mx-auto flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-teal-600 text-neutral-100 font-semibold px-6 py-2 rounded shadow hover:bg-teal-700"
        >
          Send
        </button>
        {status && <p className="text-center">{status}</p>}
      </form>
    </section>
  )
}

export default ContactSection
