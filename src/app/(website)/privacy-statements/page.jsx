import StaticHero from '@/components/Website/StaticHero/StaticHero'
import React from 'react'

const Privacy_Statements = () => {
  const desc="Upload your best talents content and stand the chance to get promotion and improve visibility We help you get discovered and together we empower you with the necessary connection to get value for your talent"
  return (
    <div>
      <StaticHero heading="your Talents" highlighted="Showcase" linkText="Grab This Offer" desc={desc} />
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Statement</h1>

      <div className="space-y-6">
        <p>
          Effective Date: [Insert Effective Date]
        </p>
        <p>
          Please read this Privacy Statement (<b>Statement</b>) carefully before using the Talnetics mobile application or associated website (<b>the Service</b>) operated by Talnetics Inc., and Vinyl Group Operations Pty Ltd wholly owned subsidiaries of Vinyl Group Ltd, an Australian public company (<b>us</b>, <b>we</b>, or <b>our</b>).
        </p>

        <p>
          Your privacy is important to us. This Statement explains how we collect, use, disclose, and safeguard your information when you visit our website [https://Talnetics.me/] (the Site) or use our Service. Please note that this Statement does not apply to third-party websites, services, or applications that may be linked from our Service, which we do not control.
        </p>

        <h2 className="text-2xl font-semibold">Information Collection</h2>
        <p>
          We may collect personal information that you provide directly to us, such as when you create an account, submit user content, communicate with customer support, or otherwise interact with the Service. The types of personal information we may collect include your name, email address, profile picture, payment information (if applicable), and any other information you choose to provide.
        </p>

        <p>
          We may also automatically collect certain information when you access or use the Service, including your IP address, browser type, operating system, referring URLs, device identifiers, and usage information. This information is used to improve the quality of our Service, analyze trends, administer the Service, track users’ movements around the Site, and gather demographic information about our user base as a whole.
        </p>

        <h2 className="text-2xl font-semibold">Information Use</h2>
        <p>
          We use the information we collect to provide, maintain, and improve the Service, customize your experience, understand and analyze how you use our Service, and to communicate with you. We may also use your information to send you promotional messages and other communications that may be of interest to you.
        </p>

        <h2 className="text-2xl font-semibold">Information Sharing</h2>
        <p>
          We may share your information with third-party service providers who help us provide, maintain, and improve the Service. These service providers have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>

        <p>
          We may also disclose your information if required by law, court order, or other governmental authority, or when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
        </p>

        <h2 className="text-2xl font-semibold">Security</h2>
        <p>
          We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or method of electronic storage is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold">Your Choices</h2>
        <p>
          You can choose not to provide us with certain information, but that may result in you being unable to use certain features of the Service.
        </p>

        <p>
          You can also opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications or by contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold">Changes to this Statement</h2>
        <p>
          We may update this Statement from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Statement on the Site with a new effective date. Your continued use of the Service after the effective date constitutes your acceptance of the updated Statement.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about this Statement, please contact us at <a href="mailto:support@theTalnetics.com">support@theTalnetics.com</a>.
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default Privacy_Statements