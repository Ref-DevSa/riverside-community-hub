function DonationPage() {
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

        <form>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
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
              placeholder="Enter donation amount"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave an optional message"
              rows={5}
            />
          </div>

          <button type="submit">Continue with Donation</button>
        </form>
      </section>
    </main>
  );
}

export default DonationPage;