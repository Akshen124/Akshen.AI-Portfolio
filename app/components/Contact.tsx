"use client";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

import Link from "next/link";
import {
  GitBranch,
  Link2,
  MessageCircle,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const sendEmail = async (e: any) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "PUBLIC_KEY";

    try {
      const result = await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
      console.log("Email sent", result.status, result.text);
      toast.success("Message sent — thank you!");
    } catch (err) {
      console.error("Email send failed:", err);
      toast.error("Failed to send message. Check console for details.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 scroll-mt-28 md:scroll-mt-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <Toaster />
        <p className="text-blue-400 uppercase tracking-[4px] mb-4">CONTACT</p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let's Build Something
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h2>

        <p className="text-zinc-400 max-w-2xl text-lg">
          Interested in AI, Machine Learning, Generative AI, or collaborating on innovative projects? Let's connect.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-green-500/20 bg-green-500/10">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-300">Available for AI/ML Opportunities</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <div>
            <div className="grid grid-cols-2 gap-5">
              <Link
                href="https://www.linkedin.com/in/akshen-s-732a35268/"
                target="_blank"
                className="group rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6 transition hover:border-purple-500/40"
              >
                <Image
                  src="/linkedin-logo.svg"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="font-semibold">LinkedIn</h3>
              </Link>

              <Link
                href="https://github.com/Akshen124/"
                target="_blank"
                className="group rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6 transition hover:border-purple-500/40"
              >
                <Image
                  src="/github-logo.svg"
                  alt="GitHub"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="font-semibold">GitHub</h3>
              </Link>

              <Link
                href="https://wa.me/918531899895"
                target="_blank"
                className="group rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6 transition hover:border-purple-500/40"
              >
                <Image
                  src="/whatsapp-logo.svg"
                  alt="WhatsApp"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="font-semibold">WhatsApp</h3>
              </Link>

              <a
                href="https://docs.google.com/document/d/1CsR304AnRXkDdMdlYAFpEo6kjXFgGeUOrSMXWgRvoZM/edit?tab=t.0"
                download
                className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-6 transition hover:border-purple-500/40"
              >
                <Download className="text-yellow-400 mb-4" />
                <h3 className="font-semibold">Resume</h3>
              </a>
            </div>
            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />
                <span>akshannelsan@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-400" />
                <span>+91 8531899895</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8">
            <form className="space-y-5" onSubmit={sendEmail}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 focus:border-purple-500 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 focus:border-purple-500 focus:outline-none"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 focus:border-purple-500 focus:outline-none"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-4 font-semibold transition hover:scale-105"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
