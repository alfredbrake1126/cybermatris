import React from "react";
import { SparklesCore } from "../ui/sparkles";

const abuot_us = [
    {
        id: 1,
        title: "Cybersecurity Governance",
        content: "We assist organizations in establishing robust policies and governance frameworks to ensure regulatory compliance and protect information assets. This includes risk assessments, policy development, and employee training.",
    },
    {
        id: 2,
        title: "Cybersecurity Project Management",
        content: "Our certified project management team oversees the implementation of cybersecurity solutions, ensuring adherence to timelines and budgets. We guarantee transparent communication and effective coordination among stakeholders.",
    },
    {
        id: 3,
        title: "Security Audits",
        content: "We offer comprehensive security audits to identify vulnerabilities and assess the effectiveness of existing controls. Our detailed reports provide practical recommendations to enhance your organization’s security posture.",
    },
    {
        id: 4,
        title: "Technical Assistance",
        content: "We provide specialized technical support for the implementation and management of cybersecurity solutions. Our experts are available to quickly resolve issues and ensure the smooth operation of your security systems.",
    },
    {
        id: 5,
        title: "Training and Awareness",
        content: "We offer tailored training programs to raise awareness among your teams about cybersecurity challenges. Our interactive sessions cover best practices, threat detection, and behaviors to adopt to minimize risks, thereby strengthening the culture of security within your organization.",
    },
    {
        id: 6,
        title: "Incident Management and Remediation",
        content: "We provide a structured approach to incident management, helping organizations respond effectively to security breaches. Our services include incident detection, analysis, containment, and recovery, along with remediation strategies to prevent future occurrences.",
    },
]

function CAboutUs() {
  return (
    <div 
        id="about Us"
        className="py-20 space-y-20"
    >
      {/* Tech Leads Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10">
          About Us
        </h2>
        <h6 className="text-4xl md:text-5xl lg:text-3xl text-center text-white mb-10">
            Cybersecurity Offerings
        </h6>
        <div className="relative h-20 mb-10">
          <SparklesEffect />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {abuot_us.map((item) => (
            <LeaderCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SparklesEffect() {
  return (
    <>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </>
  );
}

function LeaderCard({ title, content}) {
  return (
    <div className="bg-richBlack text-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
        <p className="text-xl font-semibold p-4">{title}</p>
        <p className="text-gray-300">{content}</p>
    </div>
  );
}

export default CAboutUs;
