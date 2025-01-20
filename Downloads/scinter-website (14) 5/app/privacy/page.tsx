import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-gray-300 bg-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">Effective Date: [Insert Date]</p>
        <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you interact with our landing page to express interest in ScInter.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">a. Personal Information</h3>
        <p className="mb-4">When you sign up to express interest in ScInter, we collect:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Your name.</li>
          <li>Your email address.</li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2">b. Non-Personal Information</h3>
        <p className="mb-4">We may also collect:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Browser type, device information, and IP address for analytics purposes.</li>
          <li>Interaction data, such as time spent on the landing page and clicks on elements.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the collected data to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Keep you updated about ScInter's launch and related developments.</li>
          <li>Respond to inquiries or provide additional information based on your interest.</li>
          <li>Improve our landing page performance and user experience.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4">Your information will not be sold or shared with third parties, except in the following cases:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Service Providers: To send updates or manage mailing lists (e.g., email marketing tools).</li>
          <li>Legal Compliance: To comply with applicable laws or legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">We implement reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of electronic transmission or storage is completely secure.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Request access to or deletion of the personal data you provide.</li>
          <li>Opt out of receiving updates or promotional emails by using the unsubscribe link in our communications.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Policy</h2>
        <p className="mb-4">This Privacy Policy may be updated periodically. Any changes will be reflected on this page with an updated effective date.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4">If you have questions or concerns about this Privacy Policy, please reach out:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: privacy@scinter.com</li>
        </ul>
        <p className="mb-4">Thank you for trusting ScInter as we prepare to launch our platform. We are committed to safeguarding your privacy as you explore this exciting journey with us.</p>
      </div>
      <Footer />
    </main>
  )
}

