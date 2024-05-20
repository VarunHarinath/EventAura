import React, { useState } from "react";

const TermsOfService = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
      // Handle the continue action
      console.log("Continue to the next step");
    } else {
      alert("Please accept the terms and conditions to continue.");
    }
  };

  return (
    <div className="text-gray-100 p-4 md:p-8 lg:p-16 space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold ">
        Terms of Service for Event Managers
      </h1>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Introduction
        </h2>
        <p>
          Welcome to Tesract, a service by Veda Solutions, for managing your
          events. This document outlines the terms that apply to event managers
          using our platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Event Management
        </h2>
        <p>
          <strong className="text-indigo-600">Listing Events:</strong> You can
          list your events on Tesract, providing all necessary details for
          ticket sales and event management.
        </p>
        <p>
          <strong className="text-indigo-600">Financial Transactions:</strong>{" "}
          All financial transactions are processed through PhonePe. Tesract
          deducts a platform fee and payment gateway fee from each transaction.
          The money collected from ticket sales will be settled to your account
          by PhonePe, typically within 3 to 5 business days (T+3 to T+5 days).
          We do not hold any funds; settlement is handled directly by PhonePe.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Administrative Access
        </h2>
        <p>
          You will have access to the administrative panel to manage your
          event's financial aspects. Misuse of the platform, such as tampering
          with data or spamming participants, will result in severe
          consequences, including the potential termination of access.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Compliance and Conduct
        </h2>
        <p>
          As an event manager, you are responsible for ensuring your events
          comply with all applicable laws and regulations. Non-compliance may
          result in termination of your access to the platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Financial and Data Security
        </h2>
        <p>
          <strong className="text-indigo-500">Data Handling:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong className="text-indigo-500">
              Collection and Transfer:
            </strong>{" "}
            We collect and transfer event-related data securely to you for
            managing the event.
          </li>
          <li>
            <strong className="text-indigo-500">Data Protection:</strong> User
            data is used strictly for event-related purposes and not for any
            unauthorized activities.
          </li>
          <li>
            <strong className="text-indigo-500">Data Security:</strong> We
            ensure all data is securely handled. User data is deleted from our
            servers after it has been transferred to you, ensuring privacy and
            compliance with data protection laws.
          </li>
          <li>
            <strong className="text-indigo-500">User Financial Data:</strong> We
            do not store sensitive financial data such as UPI IDs or
            credit/debit card numbers. We only store transaction statuses
            (success or failure).
          </li>
        </ul>
        <p>
          <strong className="text-indigo-500">Refunds:</strong> No refunds will
          be initiated by Tesract. Any refund requests must be handled directly
          by the event manager.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Reporting and Transparency
        </h2>
        <p>
          <strong className="text-indigo-500">Financial Reports:</strong> Daily
          financial reports of participant transactions will be sent to the
          designated address. The money collected will only be transferred to
          your account after we receive the funds from PhonePe.
        </p>
        <p>
          <strong className="text-indigo-500">Transaction Fees:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Payment Gateway Fee: 2%</li>
          <li>Platform Fee: ₹5 per transaction</li>
        </ul>
        <p>
          No GST is applied to the payment gateway or platform fee. Enterprise
          pricing may vary depending on event requirements, but the platform fee
          remains constant.
        </p>
        <p>
          <strong className="text-indigo-500">Account Details:</strong> Ensure
          the accuracy of your bank account or UPI ID details during event
          onboarding. We are not responsible for any loss of funds due to
          incorrect account information provided by you. Changes to payment
          details cannot be made after event onboarding is complete.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Data Privacy and Encryption
        </h2>
        <p>
          The data of participants can only be viewed by the event managers.
          Even company officials do not have access to participant data to
          ensure data privacy and encryption.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
          Legal Matters
        </h2>
        <p>
          <strong className="text-indigo-500">Indemnity:</strong> You agree to
          indemnify and hold Tesract and Veda Solutions harmless from any
          claims, damages, or losses arising out of your use of the platform,
          including but not limited to legal fees.
        </p>
        <p>
          <strong className="text-indigo-500">Limitation of Liability:</strong>{" "}
          Tesract and Veda Solutions are not liable for any financial losses
          incurred by you. Our responsibility is limited to the fees collected
          for platform and payment gateway services.
        </p>
        <p>
          <strong className="text-indigo-500">Governing Law:</strong> These
          terms are governed by and construed in accordance with the laws of the
          jurisdiction where Veda Solutions is registered.
        </p>
        <p>
          <strong className="text-indigo-500">Dispute Resolution:</strong> Any
          disputes arising out of or related to these terms shall be resolved
          through arbitration in the jurisdiction where Veda Solutions is
          registered.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
