"use client";

import { motion } from "framer-motion";

export default function IVFIntroSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.65rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug"
        >
          Why IVF Clinics Need Digital Marketing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-[1.15rem] 
            sm:text-lg 
            md:text-xl 
            text-gray-700 
            leading-relaxed 
            whitespace-pre-line 
            text-justify 
            md:text-center 
            indent-8
          "
        >
          {`Although reaching a broad audience through television, billboards, or radio is impactful, not every viewer will be your ideal patient. To overcome this limitation, IVF clinics need a more targeted and data-driven approach — digital marketing. It’s the bridge that connects your fertility services with couples actively seeking guidance, care, and trust online.

Marketing has shifted to the digital world, and IVF digital marketing has evolved into a more dynamic, result-oriented platform. Through the right strategy, your clinic can reach the right patients, reduce ad costs, and increase conversions. At Sky Insights, we specialize in helping fertility centers grow through strategic use of Search Engine Optimization (SEO), Social Media Marketing (SMM), Content Marketing, and Pay-Per-Click (PPC) campaigns.

Before launching any campaign, your clinic must establish a strong brand identity — a digital personality that reflects care, credibility, and hope. This begins with creating a thoughtful and empathetic visual and communication identity:

•  Logo – Your logo is the face of your brand. It should be simple, memorable, and emotionally connected to your audience.  
•  Photography – Use authentic photos of your clinic, doctors, and patients to establish real trust and human connection.  
•  Website Design – Your website should be easy to navigate, responsive, and visually inviting. Make it effortless for visitors to contact you.  
•  Communication Style – Define your tone and values. When interacting with patients online, your messaging should always reflect empathy, sensitivity, and professionalism.

When discussing fertility and parenthood, compassion is key. Infertility is a deeply emotional subject, and your digital presence must make every visitor feel supported and safe. Showcase your doctors and medical team, highlighting their expertise, achievements, and motivations — this builds confidence and trust.

Next, structure your IVF marketing campaigns based on patient intent. Every patient’s journey is unique:
•  Some are only beginning to explore fertility questions.  
•  Some are researching treatment options.  
•  Others are ready to start their IVF journey.  

Tailoring campaigns for each stage helps reduce ad costs, improve conversions, and provide personalized patient experiences. Offering free resources, webinars, or guides about fertility and IVF treatments is a great way to educate, nurture, and convert potential patients into loyal clients.

At Sky Insights, we go beyond ads — we build strategies that help IVF clinics stand out with compassion, clarity, and measurable growth. Our IVF digital marketing solutions are designed to strengthen your brand identity, boost patient engagement, and position your clinic as a trusted name in fertility care across India and beyond.`}
        </motion.p>

      </div>
    </section>
  );
}
