import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen text-gray-300 bg-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">Effective Date: [01/2025]</p>
        <p className="mb-4">Welcome to ScInter! We, scinter.pvt.ltd. is a registered business entity in Canberra, Australia with ABN : 88674896756.</p>
        <p className="mb-4">By signing up for our waitlist, you agree to the following Terms of Service. Please read these terms carefully. If you do not agree with these terms, do not proceed with signing up.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Purpose of the Waitlist</h2>
        <p className="mb-4">The ScInter waitlist allows users to register their interest in our platform before its official launch. Joining the waitlist does not guarantee access to ScInter services or features, as access may be provided on a priority basis or at ScInter's discretion.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4">To join the waitlist, we collect the following information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information: Your name, email address, and any additional details you provide.</li>
          <li>Usage Information: Optional survey responses or preferences you choose to share.</li>
        </ul>
        <p className="mb-4">For more information on how we handle your data, please review our Privacy Policy.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">Your information will only be used to:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Notify you about ScInter updates, including launch dates and platform news.</li>
          <li>Offer you early access opportunities and exclusive insights about ScInter.</li>
          <li>Understand user preferences to improve the platform.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. User Responsibilities</h2>
        <p className="mb-4">By joining the ScInter waitlist, you agree to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide accurate and truthful information during sign-up.</li>
          <li>Use any early access privileges or communications responsibly.</li>
          <li>Avoid attempting to misuse or disrupt any communications or systems related to the waitlist.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Modifications to the Waitlist</h2>
        <p className="mb-4">ScInter reserves the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Modify or discontinue the waitlist at any time without prior notice.</li>
          <li>Prioritize access based on internal criteria (e.g., engagement levels, target audience).</li>
          <li>Contact waitlist users with marketing or promotional materials related to ScInter.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">By signing up, you acknowledge that:</p>
        <ul className="list-disc list-inside mb-4">
          <li>ScInter provides the waitlist "as is" without warranties of any kind.</li>
          <li>ScInter is not responsible for delays, interruptions, or errors in communications related to the waitlist.</li>
          <li>Participation in the waitlist does not create a contractual obligation for ScInter to grant platform access.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to These Terms</h2>
        <p className="mb-4">ScInter reserves the right to update these Terms of Service. Any changes will be communicated to you via email or posted on the website. Continued participation in the waitlist constitutes acceptance of the revised terms.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-4">For questions or concerns regarding the waitlist or these terms, contact us at support@scinter.com</p>
      </div>
      <Footer />
    </main>
  )
}

