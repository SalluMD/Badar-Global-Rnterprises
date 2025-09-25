import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-md">
      <input type="text" name="name" placeholder="Name" required className="border p-2 rounded"/>
      <input type="email" name="email" placeholder="Email" required className="border p-2 rounded"/>
      <textarea name="message" placeholder="Message" required className="border p-2 rounded"/>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Form</button>
      <span>{result}</span>
    </form>
  );
}

export default ContactForm;
