"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

export const Home2Accordion = () => {
  const faqData = [
    {
      id: "faq1",
      question: "How do I get started with Jeevijay for my project?",
      answer:
        "Just reach out to us through our contact form or give us a call. We'll listen to your needs, answer your questions, and guide you through the next steps—no tech jargon, just friendly advice.",
      delay: ".3s",
    },
    {
      id: "faq2",
      question: "What makes Jeevijay different from other IT companies?",
      answer:
        "We treat every project as if it’s our own. Our team combines technical expertise with a genuine commitment to your success. We’re transparent, responsive, and always here to help you grow.",
      delay: ".7s",
    },
    {
      id: "faq3",
      question: "Can you help me improve my website’s Google ranking?",
      answer:
        "Absolutely! Our SEO experts use proven strategies to boost your visibility, attract more visitors, and turn them into loyal customers. We’ll explain everything in simple terms and show you real results.",
      delay: ".7s",
    },
    {
      id: "faq4",
      question: "How long does it take to build a website or app?",
      answer:
        "Every project is unique, but we’ll give you a clear timeline before we start. We work efficiently and keep you updated at every step, so there are no surprises.",
      delay: ".7s",
    },
    {
      id: "faq5",
      question: "What kind of support do you offer after launch?",
      answer:
        "We’re with you for the long haul! Whether you need updates, troubleshooting, or just some advice, our support team is always a call or message away.",
      delay: ".5s",
      show: true,
    },
  ];
  const [toggle, setToggle] = useState("faq1");
  return (
    <Accordion className="accordion" id="accordion" defaultActiveKey={toggle}>
      {faqData.map(({ id, question, answer, delay, show }) => (
        <div
          key={id}
          className={`accordion-item wow fadeInUp`}
          data-wow-delay={delay}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${toggle === id ? "" : "collapsed"}`}
              eventKey={id}
              aria-expanded={toggle === id ? "true" : "false"}
              onClick={() => setToggle(id)}
            >
              {question}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse eventKey={id} className="accordion-collapse">
            <div className="accordion-body">{answer}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
