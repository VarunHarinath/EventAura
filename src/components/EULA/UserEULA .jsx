import React from "react";

const UserEULA = () => {
  return (
    <div className="text-gray-100 p-4 md:p-8 lg:p-16 space-y-8 font-bold">
      <h1 className="text-2xl md:text-4xl font-bold">
        Terms of Service for Users
      </h1>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Introduction</h2>
        <p className="font-normal">
          Welcome to EventAura, the preferred event management platform for
          student-driven clubs. This document governs your access to and use of
          EventAura for purchasing tickets and attending events.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Ticket Purchase and Payment
        </h2>
        <p className="font-normal">
          <strong className="text-indigo-500">Secure Purchase:</strong> Tickets
          can be purchased through EventAura using our secure payment gateway.
          By purchasing a ticket, you agree to the terms set forth by the event
          organizer and EventAura.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Payment Processing:</strong>{" "}
          Payments are processed securely by PhonePe. EventAura does not store
          or have access to your credit card information.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Payment Failures:</strong>{" "}
          EventAura does not handle refunds for any transactions, including
          payment failures. All refund requests must be handled directly by the
          event manager.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Ticket Confirmation and Use
        </h2>
        <p className="font-normal">
          <strong className="text-indigo-500">Email Confirmation:</strong> Upon
          purchase, you will receive an email confirmation with a QR code. This
          code is required for event entry and is valid for a single use only.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Entry to Event:</strong> Present
          your QR code at the event entrance to gain access. The unique QR code
          is valid only once. Tampering with any QR code will result in severe
          actions and penalties.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Refund Policy</h2>
        <p className="font-normal">
          <strong className="text-indigo-500">Final Sales:</strong> All ticket
          sales are final. Refunds are issued only if the event is canceled and
          not rescheduled.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Refund Handling:</strong>All
          ticket sales are final, and we do not initiate any refunds, even if
          the event is canceled.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Privacy Policy for Users
        </h2>
        <p className="font-normal">
          <strong className="text-indigo-500">Data Collection:</strong> We
          collect necessary information during the ticket purchase process, such
          as your name, email address, and payment details via our payment
          gateway partner, PhonePe.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Data Use:</strong> We use your
          information to process transactions and send you event-related
          communications. Your data will be transferred to the event managers
          and deleted from our servers for data privacy.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Data Security:</strong> We
          implement strong security measures to protect your data. Your payment
          information is processed and secured by PhonePe. EventAura does not
          store any user financial data (i.e., payment details) for security
          reasons.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Mail Confirmation:</strong> Our
          automated mailing system sends a confirmation mail after a successful
          transaction. If you do not receive any mail within 10 minutes, please
          contact the event managers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Liability and Disclaimer
        </h2>
        <p className="font-normal">
          <strong className="text-indigo-500">
            Event Manager Responsibility:
          </strong>{" "}
          Event managers can access your data for event-related purposes.
          EventAura is not involved in any misuse of your data by event
          managers.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Security of Transactions:</strong>{" "}
          Every transaction is secured by PhonePe. EventAura ensures the
          integrity and security of the payment process.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Limitations on Liability:</strong>{" "}
          EventAura is not responsible for any issues arising from event entry,
          event cancellation, or misuse of data by event managers beyond our
          control.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Indemnity:</strong> Users agree to
          indemnify and hold EventAura harmless from any claims, damages, or
          expenses arising from the use of the platform, including the actions
          of event managers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Code of Conduct for Participants
        </h2>
        <p className="font-normal">
          <strong className="text-indigo-500">Compliance with Rules:</strong>{" "}
          Participants must comply with the event's rules and regulations as set
          forth by the event organizers.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Prohibited Actions:</strong> Any
          fraudulent activity, including tampering with QR codes, will result in
          severe penalties and potential legal action.
        </p>
        <p className="font-normal">
          <strong className="text-indigo-500">Respectful Behavior:</strong>{" "}
          Participants are expected to behave respectfully and adhere to the
          event's code of conduct. Any form of harassment or disruptive behavior
          is not tolerated.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Changes to Terms</h2>
        <p className="font-normal">
          EventAura reserves the right to modify these terms at any time. Any
          changes will be communicated to users via email or through our
          platform. Continued use of the platform after such changes constitutes
          acceptance of the new terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Governing Law</h2>
        <p className="font-normal">
          These terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which EventAura operates. Any disputes
          arising out of or related to these terms shall be resolved in the
          courts of that jurisdiction.
        </p>

        <div className="text-gray-100 p-4 md:p-8 lg:p-16 space-y-8 font-bold">
          <h2 className="text-xl md:text-2xl font-semibold">Refund Policy</h2>

          <section className="space-y-4">
            <p className="font-normal">
              <strong className="text-indigo-500">Refund Handling:</strong>{" "}
              EventAura does not handle or initiate any refunds for ticket
              purchases made through the platform. All sales are final, and
              refunds or cancellations are not permitted under any
              circumstances, including event cancellation by the organizer.
            </p>
            <p className="font-normal">
              <strong className="text-indigo-500">
                Non-Refundable Tickets:
              </strong>{" "}
              All tickets purchased through EventAura are non-refundable and
              non-cancellable. Users acknowledge and agree that once a ticket
              purchase is made, it cannot be refunded or canceled.
            </p>
            <p className="font-normal">
              <strong className="text-indigo-500">
                Damaged or Defective Tickets:
              </strong>{" "}
              In the rare event that a ticket is received in a damaged or
              defective condition, please report the issue to our customer
              service team immediately upon receipt. We will investigate the
              matter and take appropriate action, which may include issuing a
              replacement ticket if feasible.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default UserEULA;
