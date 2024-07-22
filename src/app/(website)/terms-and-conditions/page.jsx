import StaticHero from '@/components/Website/StaticHero/StaticHero'
import React from 'react'

const Terms_And_Conditions = () => {
  const desc="Upload your best talents content and stand the chance to get promotion and improve visibility We help you get discovered and together we empower you with the necessary connection to get value for your talent"
  return (
    <div>
      <StaticHero heading="your Talents" highlighted="Showcase" linkText="Grab This Offer" desc={desc} />
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: 24 February 2024</p>

      <div className="space-y-6">
       
          <h2 className="text-2xl font-semibold">1. Eligibility</h2>
          <p>
            You warrant that you are at least 18 years old and are legally capable of entering into binding contracts. If you are under 18 years old, you warrant that you have obtained consent from your parent or guardian and they agree to be bound by these Terms on your behalf.
          </p>
        

       
          <h2 className="text-2xl font-semibold">2. Content</h2>
          <p>
            Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
          </p>
          <p>
            By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service and for purposes of marketing the Service. You retain any and all of your rights to any Content you submit, post, or display on or through the Service and you are responsible for protecting those rights.
          </p>
          <p>
            You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.
          </p>
        

       
          <h2 className="text-2xl font-semibold">3. Accounts</h2>
          <p>
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        

       
          <h2 className="text-2xl font-semibold">4. Proprietary Rights</h2>
          <p>
            All rights, title, and interest in and to the Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us or our licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        

       
          <h2 className="text-2xl font-semibold">5. Privacy Policy</h2>
          <p>
            Your use of the Service is subject to our Privacy Policy, as it may be modified from time to time, and is incorporated into this Agreement by reference. Please review our Privacy Policy to understand our practices with respect to your privacy.
          </p>
        

       
          <h2 className="text-2xl font-semibold">6. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless us and our officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys’ fees) that such parties may incur as a result of or arising from your (or anyone using your account’s) violation of this Agreement. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with us in the defense of such matter.
          </p>
        

       
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall we or our suppliers be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses) arising out of or relating to your access to or use of, or your inability to access or use, the Service or any materials or content on the Service, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, and whether or not we have been informed of the possibility of such damage.
          </p>
        

       
          <h2 className="text-2xl font-semibold">8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Nevada, USA, without regard to its conflict of law provisions.
          </p>
        
      </div>
    </div>
    
     </div>
  )
}

export default Terms_And_Conditions