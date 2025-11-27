import PageBanner from "@/components/shared/PageBanner";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <PageBanner
        title="Terms & Condition"
        pagePath="Home // Our Terms and Condition"
      ></PageBanner>
      <div
        className=" bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/about-shape-1-2.png')" }}
      >
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md border-t-4 border-[#119d3e]">
            <h1 className="text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
              Terms and Conditions
            </h1>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Introduction
              </h2>
              <p className="text-gray-700">
                Welcome to Deelko Fish E-Commerce! By accessing or using our
                website, you agree to comply with and be bound by the following
                terms and conditions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                User Agreement
              </h2>
              <p className="text-gray-700">
                By using our site, you agree to follow our terms of service and
                comply with all applicable laws and regulations. You also agree
                that any violation of these terms may result in the suspension
                or termination of your account.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Order Terms
              </h2>
              <p className="text-gray-700">
                1. All orders placed on our website are subject to acceptance
                and availability. <br />
                2. We reserve the right to refuse any order for any reason,
                including product unavailability or errors in the pricing
                information.
                <br /> 3. Upon order confirmation, an email will be sent
                containing the order details.
                <br /> 4. Prices and availability are subject to change without
                notice.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Payment Terms
              </h2>
              <p className="text-gray-700">
                We accept various payment methods such as credit cards, debit
                cards, and PayPal. All payments must be processed before
                shipping your order. Payment information will be handled
                securely and in compliance with applicable laws.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Shipping and Delivery
              </h2>
              <p className="text-gray-700">
                1. Orders will be processed within 1-3 business days.
                <br /> 2. Shipping charges and estimated delivery times will be
                displayed during checkout.
                <br /> 3. We do not ship to certain regions due to logistics
                constraints.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Refund and Cancellation Policy
              </h2>
              <p className="text-gray-700">
                1. Refunds are available for undelivered or incorrect items.
                Please contact our customer service for assistance within 14
                days of receiving your order.
                <br /> 2. Cancellation requests should be made within 24 hours
                of placing the order. After that, the order may have already
                been processed and shipped.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Privacy and Data Security
              </h2>
              <p className="text-gray-700">
                We respect your privacy. Any personal information you provide
                will be used solely for processing your orders and improving
                your shopping experience. Please refer to our Privacy Policy for
                more details on how we handle your personal information.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Limitation of Liability
              </h2>
              <p className="text-gray-700">
                We are not liable for any damages, losses, or expenses that
                result from your use or inability to use our services. This
                includes issues arising from website outages, lost data, or any
                third-party services linked to our site.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We may update our Terms and Conditions from time to time. Any
                changes will be posted on this page with the updated date. You
                are encouraged to review these terms periodically to stay
                informed about any updates.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-[#119d3e]">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or concerns regarding these terms and
                conditions, please contact us at{" "}
                <span className="text-blue-600">support@deelko.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
