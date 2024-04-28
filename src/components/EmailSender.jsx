import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "/src/services/email.service";

function EmailSender() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  function handleFieldChange(event, name) {
    setEmailData({
      ...emailData,
      [name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      emailData.to === "" ||
      emailData.subject === "" ||
      emailData.message === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // send email with api
    try {
      await sendEmail(emailData);
      toast.success("Email sent successfully.");
      toast.success("Send another one.");
    } catch (error) {
      console.log(error);
      toast.error("Email not sent!!!.");
    }
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="email_card md:w-1/3 w-full mx-4 md:mx-0 -mt-10 bg-white rounded-lg p-4 border shadow">
        <h1 className="text-gray-900 text-3xl">Email Sender</h1>
        <p className="text-gray-700">
          Send email to your fav person with your own app..
        </p>
        <form action="" onSubmit={handleSubmit}>
          {/* to */}
          <div className="input field mt-4">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              To
            </label>

            <input
              value={emailData.to}
              onChange={(event) => handleFieldChange(event, "to")}
              type="text"
              id="large-input"
              placeholder="Enter here"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* Subject field */}
          <div className="input field mt-4">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject
            </label>
            <input
              value={emailData.subject}
              onChange={(event) => handleFieldChange(event, "subject")}
              type="text"
              id="large-input"
              placeholder="Enter here"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="form_field mt-4">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              value={emailData.message}
              onChange={(event) => handleFieldChange(event, "message")}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your message here..."
            ></textarea>
            <div className="button_container flex justify-center gap-3 mt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white hover:bg-blue-900 px-3 py-2 rounded"
              >
                Send Email
              </button>
              <button className="bg-red-700 text-white hover:bg-red-900 px-3 py-2 rounded">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSender;
