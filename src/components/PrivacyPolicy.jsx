import React from 'react'
import NewLine from './NewLine'

const PrivacyPolicy = ({handleClose}) => {
  return (
    <div className='privacy-policy-statement'>
      <h2>Privacy Policy Statement</h2>
      <p>I take the privacy and security of your personal information seriously. This privacy policy statement explains how I collect, use, and protect the personal data of my website's users.</p>
      <NewLine />
      <h2>Data Collection and Use</h2>
      <p>I collect personal data through my contact form, which allows users to send me messages and inquiries. The information I collect includes your name, email address, and any other personal data you choose to include in your message. I do not use, sell, or share any of the personal data collected through our contact form for any purposes other than responding to your inquiry or message.</p>
      <NewLine />
      <h2>Data Protection</h2>
      <p>I use advanced spam protection techniques, including Honeypot, to prevent unwanted messages from reaching our inbox. Our spam protection measures are designed to filter out spam and unwanted messages while allowing legitimate messages from real users to reach us. I use industry-standard security measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so I cannot guarantee absolute security.</p>
      <NewLine />
      <h2>Data Retention</h2>
      <p>I retain personal data collected through my contact form for as long as necessary to respond to your inquiry or message. After that, I may retain certain information for a period of time to comply with legal or regulatory requirements, resolve disputes, or enforce policies.</p>
      <NewLine />
      <h2>Third-Party Services</h2>
      <p>I do not use any third-party services for spam protection or data processing on my website.</p>
      <NewLine />
      <h2>Changes to this Privacy Policy Statement</h2>
      <p>I may update this privacy policy statement from time to time to reflect changes in our practices or applicable laws and regulations. Any changes I make will be posted on this page with an updated effective date.</p>
      <NewLine />
      <h2>Contact Me</h2>
      <p>If you have any questions or concerns about this privacy policy statement or our data protection practices, please send me a message with the contact form or message me on the linked social pages.</p>
      <NewLine />
      <p>Effective Date: April-4-2023</p>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default PrivacyPolicy
