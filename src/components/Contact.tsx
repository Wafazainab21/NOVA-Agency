
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSubmitted(false);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("Form configuration is missing. Please try again later.");
      setLoading(false);
      return;
    }

    const payload = {
      access_key: accessKey,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: "New NOVA Creative Studio Inquiry",
      from_name: "NOVA Creative Studio",
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="contact-heading">
        <span className="eyebrow">LET'S CONNECT / 03</span>
        <h2>
          HAVE A GOOD
          <br />
          <span>IDEA?</span> LET'S TALK.
        </h2>
        <p>
          Have a project in mind? Tell us about it.
          We'd love to hear what you're dreaming up.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <span className="contact-small">START SOMETHING GREAT</span>

          <a
            href="mailto:hello@novacreative.studio"
            className="contact-email"
          >
            hello@novacreative.studio <ArrowUpRight size={18} />
          </a>
          <p className="contact-description">
              From bold ideas to meaningful digital experiences,
               let's create something extraordinary together.
           </p>

          <div className="contact-note">
            <span className="status-dot" />
            AVAILABLE FOR NEW PROJECTS
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">YOUR NAME</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            minLength={2}
            required
          />

          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">TELL US ABOUT YOUR PROJECT</label>
          <textarea
            id="message"
            name="message"
            placeholder="A little about your idea..."
            rows={4}
            minLength={10}
            required
          />

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          {submitted && (
            <p className="form-success" role="status">
              <CheckCircle2 size={18} />
              Thank you! Your message has been sent successfully.
            </p>
          )}

          <button
            type="submit"
            className="button-primary submit-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
