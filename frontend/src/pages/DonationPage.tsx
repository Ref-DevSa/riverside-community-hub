import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../lib/supabase";

function DonationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccess("");
    setError("");

    const donationAmount = Number(amount);

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!amount || donationAmount <= 0) {
      setError("Please enter a donation amount greater than zero.");
      return;
    }

    setLoading(true);

    const { error: insertError } = await supabase
      .from("donations")
      .insert({
        donor_name: name.trim(),
        donor_email: email.trim(),
        amount: donationAmount,
        message: message.trim() || null,
      });

    setLoading(false);

    if (insertError) {
      setError("We could not submit your donation. Please try again.");
      return;
    }

    setSuccess(
      "Thank you. Your donation request has been submitted successfully."
    );

    setName("");
    setEmail("");
    setAmount("");
    setMessage("");
  }

  return (
    <main>
      <section>
        <h1>Support Riverside</h1>

        <p>
          Your contribution can help Riverside continue providing support,
          facilities and opportunities to the community.
        </p>
      </section>

      <section>
        <h2>Make a Donation</h2>

        {success && <p>{success}</p>}

        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="amount">Donation Amount</label>

            <input
              id="amount"
              name="amount"
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter donation amount"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Leave an optional message"
              rows={5}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Continue with Donation"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default DonationPage;