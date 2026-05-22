// app/faq/page.tsx

"use client";

import Footer from "components/layout/footer";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Replace your faqSections array with this full updated version

const faqSections = [
  {
    title: "My order –",
    description: "Common questions about ordering, dispatch, and delivery.",
    items: [
      {
        question: "I just placed my order, when will it be dispatched?",
        answer: `
Orders not containing coffee beans:

Orders that are not relying on our roasting schedule and shipping with Fedex or DHL usually ship in 1 or 2 business days.

Orders containing coffee beans:

Production is scheduled to occur every Tuesday & Wednesday. This means that if you have placed your order before 12:00 CEST on a Monday, your coffee will be roasted, packed and dispatched the following Tuesday of that week.

If your order is placed after 12:00 CEST on a Monday, your order will be carried over to the next subsequent production day.

You will receive your tracking link via email once your order has been scheduled for production.

Note that this is not relevant for subscription orders, please refer to the section below.
        `,
      },

      {
        question: "Can I make changes to my order?",
        answer: `
• If you have recently placed an individual order using our webstore, and the order has been confirmed, you will not be able to edit or amend this order.

To make any desired changes, we must cancel your existing order and place a new order using your updated terms.

Note that if you wish to cancel your order, you need to do it at the latest 48h before we fulfil it the following Monday.

• If your order has already shipped, we are unable to cancel and refund the order.

• Subscribers can easily modify their subscription by logging into their account and visiting the "Subscriptions" section of the dashboard.

There, you can adjust settings like quantity, variety, or shipping preferences.

Please note that any changes will only apply to future orders processed after the updates are made.

Be sure to check your charge date to ensure the changes apply to the correct order.
        `,
      },

      {
        question: "I received my order and it's incorrect",
        answer: `
If you receive your parcel and an item is missing, please reach out to us with the order number.

We will offer two solutions:

• Reship the missing product (if in stock)

• A refund for the missing item
        `,
      },

      {
        question: "Invoice & VAT request",
        answer: `
If you need an invoice, please reach out to us and we will provide it.

Please note that we only provide VAT free invoices to our registered wholesale customers.
        `,
      },

      {
        question: "Damaged item",
        answer: `
• If you receive a piece of equipment that has been damaged during transport and is unusable, we will ship it again or offer a refund.

This does not concern the packaging or outer box.

• If you receive a box of coffee that is damaged but the bag of coffee itself has not been damaged (ripped, open or pierced), we do not offer support.

• For all pieces of equipment, we do not offer replacement for regular wear & tear or if you or anyone else inflicted damages.

However if you see anything that does not seem normal please reach out to us with a picture and we will offer a replacement.
        `,
      },

      {
        question: "Missing details on the location of your package",
        answer: `
When shipped with Postnord, your local postal service will handle the package once it reaches your country.

You can track it on their website using the same Postnord tracking ID, which is often more accurate and detailed than the Postnord app.
        `,
      },

      {
        question: "Package delivered to a third party",
        answer: `
If your package is marked as "Delivered" but you did not receive it, we kindly ask you to contact the carrier first.

They may be able to identify the recipient and help retrieve the package.

If you are unable to retrieve the package, contact us.
        `,
      },

      {
        question: "Items purchased via our resellers/Third Parties",
        answer: `
All sales made through our resellers are subject to their own Terms & Conditions.

Since the product was not purchased via our website, we are not able to offer support.

However you can still reach out to us and we will try to answer your questions as much as possible.
        `,
      },
    ],
  },

  {
    title: "Shipping –",
    description: "Addresses concerns about lost packages and delivery times",
    items: [
      {
        question: "Duties & Taxes",
        answer: `
• If your parcel is stopped at customs and needs extra paperwork, please reach out to us and we will provide the paperwork to you.

• We do not take responsibility for any import fees or additional charges that might apply on your package once it has been dispatched.

• If you refuse your package because extra duties were applied by the country of destination, we will not refund the order.
        `,
      },

      {
        question: "Do you ship to my country?",
        answer: `
We offer a variety of international shipping options worldwide, from cost-effective services to express deliveries.

To see what shipping options are available for your country, please go to checkout.
        `,
      },

      {
        question: "Postnord Delivery Estimated Times",
        answer: `
Note that all packages shipped with Postnord will be handled by your local postal services.

For example:
• USPS in the US
• La Poste in France
• Royal Mail in the UK

We recommend tracking your shipment through your local postal service website using the same tracking ID.

Estimated delivery times:

• Denmark: 1–5 business days
• EU: 5–14 business days
• North America: 10–14 business days
• Australia: 10–21 business days
• South East Asia: 10–21 business days
• China & HK: 7–14 business days

Please note that transit times are estimates and can be affected by holidays or local postal delays.

We are not responsible for delays once your package has been handed to postal services.
        `,
      },

      {
        question: "My package is not moving or lost",
        answer: `
• When shipped with Postnord, your local postal service will handle the package once it reaches your country.

• You can track it using the same tracking ID on your local postal website.

• If the status is "registered" for over a week since fulfillment, please reach out to us.

• If it has only been a few days, this is normal.

• If the package is blocked in transit, contact the carrier directly.

• If your order has not arrived after 30 days, contact us and we will offer a replacement or refund.
        `,
      },

      {
        question: "More infos on the location of your package",
        answer: `
When shipped with Postnord, your local postal service will handle the package once it reaches your country.

You can track it on their website using the same Postnord tracking ID, which is often more accurate and detailed than the Postnord app.
        `,
      },

      {
        question: "Can I pick my order at one of your Showrooms?",
        answer: `
It is not possible to pick orders up at our stores, as they are not equipped to hold and manage packages.
        `,
      },
    ],
  },

  {
    title: "My Subscription –",
    description: "Answers all subscription-related queries",
    items: [
      {
        question: "Unable to log in my account",
        answer: `
If you are having trouble logging in, it may be because you do not have an account and need to create one.

Having an active subscription does not automatically create an account on our website.
        `,
      },

      {
        question: "When is my subscription shipped?",
        answer: `
All subscriptions are produced the first Tuesday of the month.

This means that your order will be awaiting fulfillment from the 15th to the shipping date, regardless of when you create it.
        `,
      },

      {
        question: "Can i pick up my subscription at your Showroom?",
        answer: `
It is not possible to pick orders up at our stores, as they are not equipped to hold and manage packages.
        `,
      },

      {
        question: "What can I expect from the April Subscription?",
        answer: `
• If you order more than one bag of coffee in an April Selection Subscription, you will get different coffees.

• We ship out your first subscription order the first Tuesday of the month.

• Every month you will receive a personal email from our founder with information about green coffee, roasting and brewing.

• Since we purchase coffee directly from farms, you may occasionally receive repeating coffees across the year.

Please note:
Regardless of when you subscribe, you will be charged again on the 15th.

To avoid being charged twice in your first month, place your order after the 15th.
        `,
      },

      {
        question: "Can I pause or cancel my subscription?",
        answer: `
You can pause or cancel your subscription anytime.

Log into your account and go to the "Subscriptions" section in your dashboard.

Click either:
• Pause Subscription
• Cancel Subscription

Please note that having a subscription does not automatically create an account.
        `,
      },

      {
        question: "Can I choose the coffee in my subscription?",
        answer: `
No, it is not possible to choose which coffees you will receive.

If you have an April Selection subscription with multiple bags, each bag will usually be different depending on the current offer list.
        `,
      },

      {
        question: "Can i add anything to my next shipment?",
        answer: `
Yes, you can add products to your next shipment through "Manage my subscription".

This needs to be done before the renewal date.

If for some reason the item was not added successfully, contact us and we will add it manually.
        `,
      },

      {
        question: "The shipping was more expensive than usual.",
        answer: `
If for some reason you were assigned a shipping rate that is more expensive than usual, please contact us and we will refund the difference.
        `,
      },

      {
        question: "Postnord Pick up or Postnord home delivery",
        answer: `
If the shipping rate on your order is incorrect, we are not able to manually change it.

The best solution is to cancel and remake the subscription with the correct shipping option.
        `,
      },
    ],
  },

  {
    title: "Brewing April –",
    description: "Focuses on any coffee-related questions.",
    items: [
      {
        question: "How should I brew my coffee?",
        answer: `
You will find recipes and brewing information for each coffee on our website.

Please note that these recipes are based on what we serve in our store and may take a few weeks to update after a new coffee release.

Use these recipes as a guide and adjust your equipment to achieve your perfect cup.
        `,
      },

      {
        question: "Special recipes - particule size, water composition etc.",
        answer: `
• We use a reverse osmosis system with a BPM usually between 20 and 50.

• We do not measure the exact composition of our water, so we cannot share it.

• We understand everyone has different equipment setups.

• Unfortunately we cannot offer personalized brewing support for every setup.

• We do not measure particle size in our recipes.
        `,
      },

      {
        question: "Resting your coffee",
        answer: `
We recommend letting your beans rest for at least 14 days before brewing.

This is what we use in our store and roastery, and we find that it offers much better flavor clarity and balance in the cup.

For more details, check out our YouTube channel where we discuss brewing techniques and coffees from our lineup.
        `,
      },
    ],
  },
];

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-[15px] md:text-base">{title}</span>

        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="max-w-3xl text-sm leading-7 text-neutral-600">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative border-b border-black">
        <div className="absolute right-8 top-8 opacity-20 md:right-16 md:top-16">
          <Image
            src="/3 dots 2.svg"
            alt="Decorative Dots"
            width={140}
            height={140}
          />
        </div>

        <div className="mx-auto items-center justify-center text-center max-w-6xl px-6 py-12 md:px-12">
          <h1 className=" text-center mb-2 text-5xl font-light leading-tight md:text-7xl">
            FAQ & Contact Form
          </h1>

          <p>
            Before contacting us, please make sure to check our FAQ to find your
            answer.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12">
          <div className="space-y-20">
            {faqSections.map((section, index) => (
              <div key={index}>
                <div className="mb-8">
                  <h2 className="mb-3 text-3xl font-light">{section.title}</h2>

                  <p className="max-w-2xl text-sm leading-7 text-neutral-600">
                    {section.description}
                  </p>
                </div>

                <div>
                  {section.items.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      title={item.question}
                      content={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Service Info */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-4xl font-light">Customer Service</h2>

            <div className="space-y-6 text-[15px] leading-8 text-neutral-700">
              <div>
                <p className="font-medium text-black">
                  Opening hours for our customer service:
                </p>

                <p>Open: MON - WED - THU - FRI</p>
                <p>
                  Closed: Tuesday, Saturday & Sunday, as well as all public
                  Holidays.
                </p>
              </div>

              <p>
                • Please keep in mind that response times may vary based on the
                volume of requests. We appreciate your patience and are always
                happy to assist with your inquiries.
              </p>

              <p>
                • Please note that we do not provide customer service through
                social media or our showrooms for online purchases; you will be
                redirected to this page automatically.
              </p>

              <p>
                • We are here to help, but please remember that customers who
                communicate with our service team in an impolite manner will be
                banned from purchasing our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <div className="mb-16">
            <h2 className="mb-6 text-5xl font-light">Contact Us</h2>

            <p className="max-w-2xl text-[15px] leading-8 text-neutral-700">
              Before sending your message, make sure your question is not
              answered in the FAQ above.
            </p>
          </div>

          <form className="space-y-10">
            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Full Name *
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border-b border-black bg-transparent px-0 py-4 outline-none placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Email *
              </label>

              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full border-b border-black bg-transparent px-0 py-4 outline-none placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Order Number *
              </label>

              <input
                type="text"
                placeholder="Enter your order number (if applicable)"
                className="w-full border-b border-black bg-transparent px-0 py-4 outline-none placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                Message *
              </label>

              <textarea
                rows={8}
                placeholder="Enter your message"
                className="w-full border border-black bg-transparent p-5 outline-none placeholder:text-neutral-400"
              />
            </div>

            <button
              type="submit"
              className="border border-black px-12 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
