import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "d20aae4b-6763-4e78-978c-5a5428998e6c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm dark:shadow-none">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">nigamkumar430raj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm dark:shadow-none">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm dark:shadow-none">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hajipur, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={onSubmit} className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 space-y-6 relative z-10">
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 ${
                  status === "loading" 
                    ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500 dark:text-gray-400" 
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                }`}
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status !== "idle" && (
                <div className={`mt-4 p-4 rounded-xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
                  status === "success" ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20" : 
                  status === "error" ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20" :
                  "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                }`}>
                  {status === "success" && <CheckCircle2 size={18} />}
                  {status === "error" && <AlertCircle size={18} />}
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;