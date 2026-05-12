export const metadata = {
  title: "Privacy Policy | SHIFTHer App",
  description: "Privacy Policy for the SHIFTHer App",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #2b0a3d 0%, #120018 100%)",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "18px",
          padding: "32px",
          lineHeight: "1.7",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px", color: "#facc15" }}>
          Privacy Policy
        </h1>

        <p style={{ marginBottom: "24px", color: "#e5e7eb" }}>
          Effective Date: May 12, 2026
        </p>

        <p>
          SHIFTHer App respects your privacy. This Privacy Policy explains how
          we collect, use, store, and protect information when you use the
          SHIFTHer App, website, resources, devotionals, decrees, and related
          services.
        </p>

        <h2 style={headingStyle}>1. Information We Collect</h2>

        <p>
          When you use the SHIFTHer App, we may collect information such as your
          name, email address, login information, saved content, app activity,
          and any information you voluntarily submit through forms, prayer
          requests, journal features, or other interactive areas of the app.
        </p>

        <p>
          We may also collect basic technical information such as device type,
          browser type, pages visited, and general usage data to help improve the
          app experience.
        </p>

        <h2 style={headingStyle}>2. How We Use Your Information</h2>

        <p>We use your information to:</p>

        <ul>
          <li>Provide access to the SHIFTHer App and its features</li>
          <li>Allow users to sign in and manage their account</li>
          <li>Display devotionals, decrees, resources, and saved content</li>
          <li>Improve app functionality and user experience</li>
          <li>Respond to support requests, prayer requests, or inquiries</li>
          <li>Communicate important updates about the app</li>
          <li>Maintain safety, security, and proper use of the app</li>
        </ul>

        <h2 style={headingStyle}>3. Third-Party Services</h2>

        <p>
          The SHIFTHer App may use trusted third-party services to operate the
          app, including authentication, hosting, database storage, analytics,
          and communication tools.
        </p>

        <p>These services may include:</p>

        <ul>
          <li>Clerk for account authentication and sign-in</li>
          <li>Supabase for database and storage services</li>
          <li>Vercel for app hosting and deployment</li>
          <li>Google services where applicable for forms, links, or app distribution</li>
        </ul>

        <p>
          These third-party providers may process limited user information as
          needed to provide their services. We do not sell your personal
          information.
        </p>

        <h2 style={headingStyle}>4. Prayer Requests and Submitted Content</h2>

        <p>
          If you submit a prayer request, reflection, form response, or other
          personal content through the app, that information may be received and
          reviewed by SHIFTHer App leadership or support personnel for the
          purpose of responding, praying, providing support, or improving the
          app experience.
        </p>

        <p>
          Please do not submit sensitive personal information that you do not
          want reviewed by the SHIFTHer App team.
        </p>

        <h2 style={headingStyle}>5. Saved Content and App Activity</h2>

        <p>
          The app may allow you to save devotionals, decrees, resources, or other
          content. This information may be stored so that you can access it
          within your account.
        </p>

        <h2 style={headingStyle}>6. Data Sharing</h2>

        <p>
          We do not sell, rent, or trade your personal information. We may share
          limited information with trusted service providers only as necessary
          to operate the app, comply with legal requirements, protect user
          safety, or maintain the security of the platform.
        </p>

        <h2 style={headingStyle}>7. Data Security</h2>

        <p>
          We take reasonable steps to protect your information from unauthorized
          access, misuse, loss, or disclosure. However, no online platform can
          guarantee complete security.
        </p>

        <h2 style={headingStyle}>8. Children’s Privacy</h2>

        <p>
          The SHIFTHer App is not directed to children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          we become aware that information from a child under 13 has been
          collected, we will take steps to delete it.
        </p>

        <h2 style={headingStyle}>9. Account Deletion and Data Requests</h2>

        <p>
          Users may request account deletion or removal of personal data by
          contacting us at:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@michelleshifts.com" style={linkStyle}>
            info@michelleshifts.com
          </a>
        </p>

        <p>
          Please include the email address connected to your SHIFTHer App
          account so we can locate and process your request.
        </p>

        <h2 style={headingStyle}>10. Changes to This Policy</h2>

        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised effective date.
        </p>

        <h2 style={headingStyle}>11. Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy or how your information
          is handled, contact us at:
        </p>

        <p>
          <strong>SHIFTHer App</strong>
          <br />
          Email:{" "}
          <a href="mailto:info@michelleshifts.com" style={linkStyle}>
            info@michelleshifts.com
          </a>
          <br />
          Website:{" "}
          <a href="https://michelleshifts.com" style={linkStyle}>
            https://michelleshifts.com
          </a>
        </p>

        <div style={{ marginTop: "32px" }}>
          <a href="/" style={buttonStyle}>
            Back to SHIFTHer App
          </a>
        </div>
      </section>
    </main>
  );
}

const headingStyle = {
  fontSize: "24px",
  marginTop: "28px",
  marginBottom: "10px",
  color: "#facc15",
};

const linkStyle = {
  color: "#facc15",
  textDecoration: "underline",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#facc15",
  color: "#2b0a3d",
  padding: "12px 18px",
  borderRadius: "10px",
  fontWeight: "bold",
  textDecoration: "none",
};
