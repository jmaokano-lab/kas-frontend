import PageBanner from "@/components/shared/PageBanner";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <PageBanner
        title="PRIVACY POLICY"
        pagePath="Home // Privacy Policy"
      ></PageBanner>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md border-t-4 border-[#119d3e]">
          <h1 className="text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Privacy Policy
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to Deelko. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and share your information when you use our
              website or services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Personal identification information (name, email address, etc.)
              </li>
              <li>
                Browsing and usage data (IP address, device information, etc.)
              </li>
              <li>Payment and transaction details (if applicable)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and improve our services</li>
              <li>
                Communicate with you (customer support, notifications, etc.)
              </li>
              <li>Process transactions (if applicable)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              How We Protect Your Information
            </h2>
            <p className="text-gray-700">
              We use industry-standard security measures to protect your
              personal data. However, please note that no method of transmission
              over the internet is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Your Rights
            </h2>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of the data we have collected about you</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance your
              experience and analyze usage patterns on our website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the updated policy on this
              page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-[#119d3e]">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <span className="text-blue-600">support@deelko.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
