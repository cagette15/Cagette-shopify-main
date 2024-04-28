'use client';
import { Line } from '@styled-icons/bootstrap';
import { FacebookSquare, Instagram, Whatsapp } from '@styled-icons/fa-brands';
import { useEffect } from 'react';

export default function ContactUsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sendfox.com/js/form.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="min-h-[45vh] bg-gray-900 text-white"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-4.webp?v=1685354625')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-1/3 lg:items-center">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-2xl font-bold uppercase text-white sm:text-4xl">Contact us</h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:py-24">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-lg bg-gray-100">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Send us a message!</h1>
                <p className="mt-4 text-gray-500">Let us know how we can help you!</p>
              </div>
              <form
                method="post"
                action="https://sendfox.com/form/1dk0jj/3z6y0j"
                className="sendfox-form mx-auto mb-0 mt-8 max-w-md space-y-4"
                id="3z6y0j"
                data-async="true"
                data-recaptcha="true"
              >
                <div>
                  <label htmlFor="sendfox_form_text" className="p-4 text-xs font-bold text-[#333]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="sendfox_form_name"
                    name="first_name"
                    required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="sendfox_form_text" className="p-4 text-xs font-bold text-[#333]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="sendfox_form_last_name"
                    name="last_name"
                    required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="sendfox_form_text" className="p-4 text-xs font-bold text-[#333]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="sendfox_form_phone_number"
                    name="contact_fields[phone_number]"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="sendfox_form_text" className="p-4 text-xs font-bold text-[#333]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="sendfox_form_email"
                    name="email"
                    required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="sendfox_form_text" className="p-4 text-xs font-bold text-[#333]">
                    MESSAGE TEXT:
                  </label>
                  <input
                    type="text"
                    id="sendfox_form_text"
                    name="contact_fields[text]"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  />
                </div>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="a_password"
                    tabIndex={-1}
                    value=""
                    autoComplete="off"
                    readOnly
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="focus:ring--[#95112c] mb-2 mr-2 rounded-full bg-second px-5 py-3 text-center text-base font-medium uppercase text-white hover:bg-[#95112c] focus:outline-none focus:ring-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="rounded-lg bg-gray-100">
              <div className="p-4">
                <h3 className="mb-4 text-2xl font-bold">Contact Cagette</h3>
                <p>
                  15 Yen Akat Rd, Chong Nonsi,
                  <br />
                  Yan Nawa, Bangkok 10120
                  <br />
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+6622491684"
                    className="text-second hover:text-[#95112c] focus:ring-[#95112c]"
                  >
                    +66(0)2 249 1684
                  </a>
                  <br />
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:contact@cagettebkk.com"
                    className="text-second hover:text-[#95112c] focus:ring-[#95112c]"
                  >
                    contact@cagettebkk.com
                  </a>
                  <br />
                  <strong>Line:</strong>{' '}
                  <a
                    href="https://page.line.me/cagette"
                    className="text-second hover:text-[#95112c] focus:ring-[#95112c]"
                  >
                    @Cagette
                  </a>
                </p>
              </div>

              <div className="p-4">
                <h3 className="mb-4 text-xl font-bold">SOCIAL MEDIA</h3>
                <ul>
                  <li className="py-1 text-gray-500">
                    <FacebookSquare size={24} />{' '}
                    <strong>
                      <a
                        href="https://www.facebook.com/cagettebkk"
                        className="border-second py-3 text-second hover:text-[#95112c]"
                      >
                        Facebook
                      </a>
                    </strong>
                  </li>
                  <li className="py-1 text-gray-500">
                    <Instagram size={24} />{' '}
                    <strong>
                      <a
                        href="https://www.instagram.com/cagettebkk"
                        className="border-second py-3 text-second hover:text-[#95112c]"
                      >
                        Instagram
                      </a>
                    </strong>
                  </li>
                  <li className="py-1 text-gray-500">
                    <Line size={24} />{' '}
                    <strong>
                      <a
                        href="https://page.line.me/cagette"
                        className="border-second py-3 text-second hover:text-[#95112c]"
                      >
                        Line Chat
                      </a>
                    </strong>
                  </li>
                  <li className="py-1 text-gray-500">
                    <Whatsapp size={24} />{' '}
                    <strong>
                      <a
                        href="https://wa.me/66649265436"
                        className="border-second py-3 text-second hover:text-[#95112c]"
                      >
                        WhatsApp
                      </a>{' '}
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="p-4">
                <h3 className="mb-4 text-xl font-bold">OPENING HOURS</h3>
                <p>
                  The Restaurant
                  <br />
                  From Monday to Sunday:
                  <br />
                  11:30am to 10:00pm
                </p>
                <p>
                  The Deli Shop
                  <br />
                  From Monday to Sunday:
                  <br />
                  10:00am to 9:00pm
                </p>
              </div>

              <div className="p-4">
                <h3 className="mb-4 text-xl font-bold">WE DELIVER</h3>
                <p>From 11:30am to 9:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="sm:h-600 h-96 w-full"
          src="https://maps.google.com/maps?q=15%20Yen%20Akat%20Rd,%20Chong%20Nonsi,%20Yan%20Nawa,%20Bangkok%2010120&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ margin: 0 }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}
