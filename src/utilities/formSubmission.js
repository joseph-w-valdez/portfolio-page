const formSubmission = async (data) => {
  const url = "https://api.sendinblue.com/v3/smtp/email";
  const apiKey = process.env.REACT_APP_SENDINBLUE_API_KEY;
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  console.log('this is data', data)
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        to: [{ email: email }],
        htmlContent: `<p>Name: ${data.fullName}</p><p>Email: ${data.email}</p><p>Subject: ${data.subject}</p><p>Message: ${data.message}</p>`,
        subject: "New message from your portfolio website!",
        sender: { email: email },
      }),
    });

    if (response.ok) {
      console.log('success', response)
      return response;
    } else {
      console.log('fail 1', response)
      throw new Error("There was an error with sending your message.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("There was an error with sending your message.");
  }
};

export default formSubmission;
