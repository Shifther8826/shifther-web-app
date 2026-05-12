export const metadata = {
  title: "Account Deletion | SHIFTHer App",
  description: "Request account deletion for the SHIFTHer App",
};

export default function AccountDeletionPage() {
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
          Account Deletion Request
        </h1>

        <p style={{ marginBottom: "24px", color: "#e5e7eb" }}>
          Effective Date: May 12, 2026
        </p>

        <p>
          SHIFTHer App users may request deletion of their account and associated
          personal data at any time.
        </p>

        <h2 style={headingStyle}>How to Request Account Deletion</h2>

        <p>
          To request deletion of your SHIFTHer App account, send an email to:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@michelleshifts.com" style={linkStyle}>
            info@michelleshifts.com
          </a>
        </p>

        <p>Please include the following information in your email:</p>

        <ul>
          <li>The email address connected to your SHIFTHer App account</li>
          <li>Your first and last name, if used in the app</li>
          <li>A clear statement that you want your SHIFTHer App account deleted</li>
        </ul>

        <h2 style={headingStyle}>What Data May Be Deleted</h2>

        <p>
          When your account deletion request is processed, SHIFTHer App may delete
          or remove account-related personal data, including your account profile,
          saved app activity, saved decrees, and other information associated
          with your account where applicable.
        </p>

        <h2 style={headingStyle}>What Data May Be Retained</h2>

        <p>
          Some limited information may be retained if required for legal,
          security, fraud prevention, business record, or compliance purposes.
          Any retained information will only be kept as long as necessary.
        </p>

        <h2 style={headingStyle}>Processing Time</h2>

        <p>
          Account deletion requests are typically reviewed and processed within a
          reasonable time after the request is received and the account can be
          identified.
        </p>

        <h2 style={headingStyle}>Contact</h2>

        <p>
          For account deletion or data questions, contact:
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
