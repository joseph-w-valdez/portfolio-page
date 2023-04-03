const formSubmission = async (data) => {
    const url = "https://api.sendinblue.com/v3/smtp/email";
    const apiKey = process.env.REACT_APP_SENDINBLUE_API_KEY;
    /* const templateId = YOUR_TEMPLATE_ID; */
    const email = process.env.REACT_APP_EMAIL_ADDRESS
  
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
          /* templateId: templateId, */
          params: {
            name: data.fullName,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        }),
      });
      if (response.ok) {
        return "success";
      } else {
        throw new Error("There was an error sending your message.");
      }
    } catch (error) {
      console.error(error);
      throw new Error("There was an error sending your message.");
    }
  };
  
  export default formSubmission;
  