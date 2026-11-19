
import {
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
 import Button from "../../component/Button";
const locations = [
  {
    name: "New Delhi",
    email: "sanatverma123456@gmail.com",
    phone: "+91 7234950025",
    address: "New Delhi, India",
  },
  {
    name: "Punjab",
    email: "info@example.com",
    phone: "+91 99710 98110",
    address: " Punjab, India",
  },
  {
    name: "Uttar Pradesh",
    email: "sanatverma@gmail.com",
    phone: "+91 9580273290",
    address: "Lucknow, Uttar Pradesh, India",
  },
  {
    name: "Mumbai",
    email: "sanatverma@gmail.com",
    phone: "+91 76963 05328",
    address: "Mumbai, , India",
  },
];

function Contact() {
 
const handleSubmit = (e) => {
  e.preventDefault();

  alert("Your message has been sent successfully!");

  e.target.reset();
};

  

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4">

        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center pt-16 pb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Facing any  questions?
          </h1>

          <p className="text-blue-200 text-lg">
            If you’ve got a question, there’s a good chance we’ve answered it .
            If you’re still stuck, please feel free to get in touch using the email address at the bottom.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* LEFT LOCATION CARDS */}
          <div className="space-y-4">

            {locations.map((location) => (
              <div
                key={location.name}
                className="bg-white rounded-2xl p-5 shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <MapPin size={20} />
                  </div>

                  <h3 className="font-semibold text-gray-900 text-lg">
                    {location.name}
                  </h3>

                </div>

                <a
                  href={`mailto:${location.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-3"
                >
                  <Mail size={15} className="text-blue-600" />
                  {location.email}
                </a>

                <a
                  href={`tel:${location.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-3"
                >
                  <Phone size={15} className="text-blue-600" />
                  {location.phone}
                </a>

                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin size={15} className="text-blue-600 shrink-0 mt-0.5" />
                  {location.address}
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 border border-blue-100">

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mb-7">
                Have a question or suggestion? Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-full shadow-[3px_3px_0px_#172554] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300"
                >
                  Send Message
                  <Send size={18} />
                </Button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
