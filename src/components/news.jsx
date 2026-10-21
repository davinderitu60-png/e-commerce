
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    alert(
      "Your email has been submitted. Newsletter subscriptions are not yet connected."
    );

    setEmail("");
  };

  return (
    <section className="w-full bg-[#f1eeeb] px-3 py-10 sm:px-8 lg:px-20 lg:py-18">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-10">

        {/* Left: Newsletter Introduction */}
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#111111] sm:text-3xl">
            Stay in the Loop
          </h2>

          <p className="mb-2 text-base leading-relaxed text-[#666666] sm:text-xl">
            Receive updates about new products and special offers.
          </p>

          <p className="text-sm leading-relaxed text-[#777777] sm:text-base">
            A subscription service must be connected before marketing emails
            can be sent.
          </p>
        </div>

        {/* Right: Newsletter Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="newsletter-email"
              className="mb-3 block text-base font-semibold text-[#111111] sm:text-lg"
            >
              Email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="h-[45px] min-w-0 flex-1 rounded-xl border border-[#d1d1d1] bg-white px-2 text-base text-[#111111] outline-none transition focus:border-[#88001f] focus:ring-2 focus:ring-[#88001f]/20 sm:text-xl"
              />

              <button
                type="submit"
                className="h-[45px] rounded-xl bg-[#88001f] px-4 text-lg font-bold text-white transition-colors hover:bg-[#650018] focus:outline-none focus:ring-2 focus:ring-[#88001f] focus:ring-offset-2 sm:text-xl"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-2 text-sm leading-relaxed text-[#666666] sm:text-base">
            By submitting, you request email updates. No subscription is
            activated yet.
          </p>
        </div>

      </div>
    </section>
  );
}
