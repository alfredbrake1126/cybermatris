import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useLanguage } from "../../LanguageContext";


function CAboutUs() {
  const {t} = useLanguage();

  const abuot_us = [
    {
        id: 1,
        title: t('cyber_1'),
        content: t('cyber_1_content'),
    },
    {
        id: 2,
        title: t('cyber_2'),
        content: t('cyber_2_content'),
    },
    {
        id: 3,
        title: t('cyber_3'),
        content: t('cyber_3_content'),
    },
    {
        id: 4,
        title: t('cyber_4'),
        content: t('cyber_4_content'),
    },
    {
        id: 5,
        title: t('cyber_5'),
        content: t('cyber_5_content'),
    },
    {
        id: 6,
        title: t('cyber_6'),
        content: t('cyber_6_content'),
    },
    {
      id: 6,
      title: t('cyber_7'),
      content: t('cyber_7_content'),
    },
  ]

  const dpo = [
    {
      id: 1,
        title: t('dpo_1'),
        content: t('dpo_1_content'),
    },
    {
      id: 2,
        title: t('dpo_2'),
        content: t('dpo_2_content'),
    },
  ]

  const penTest = [
    {
      id: 1,
        title: t('penTest_1'),
        content: t('penTest_1_content'),
    },
    {
      id: 2,
        title: t('penTest_2'),
        content: t('penTest_2_content'),
    },
    {
      id: 3,
        title: t('penTest_3'),
        content: t('penTest_3_content'),
    },
    {
      id: 4,
        title: t('penTest_4'),
        content: t('penTest_4_content'),
    },
    {
      id: 5,
        title: t('penTest_5'),
        content: t('penTest_5_content'),
    },
    {
      id: 6,
        title: t('penTest_6'),
        content: t('penTest_6_content'),
    },
    {
      id: 7,
        title: t('penTest_7'),
        content: t('penTest_7_content'),
    },
    {
      id: 8,
        title: t('penTest_8'),
        content: t('penTest_8_content'),
    },
    {
      id: 9,
        title: t('penTest_9'),
        content: t('penTest_9_content'),
    },
    {
      id: 10,
        title: t('penTest_10'),
        content: t('penTest_10_content'),
    },
    {
      id: 11,
        title: t('penTest_11'),
        content: t('penTest_11_content'),
    },
    {
      id: 12,
        title: t('penTest_12'),
        content: t('penTest_12_content'),
    },
    {
      id: 13,
        title: t('penTest_13'),
        content: t('penTest_13_content'),
    },
    {
      id: 14,
        title: t('penTest_14'),
        content: t('penTest_14_content'),
    },
  ]
  return (
    <div 
        id="about"
        className="py-20 space-y-20"
    >
      {/* Tech Leads Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10">
          {t('about')}
        </h2>
        <h6 className="text-4xl md:text-5xl lg:text-3xl text-center text-white mb-10">
            {t('cyber')}
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

      <section className="container mx-auto px-4">
        <h6 className="text-4xl md:text-5xl lg:text-3xl text-center text-white mb-10">
            {t('DPO')}
        </h6>
        <div className="relative h-20 mb-10">
          <SparklesEffect />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {dpo.map((item) => (
            <LeaderCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h6 className="text-4xl md:text-5xl lg:text-3xl text-center text-white mb-10">
            {t('Pentest')}
        </h6>
        <div className="relative h-20 mb-10">
          <SparklesEffect />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {penTest.map((item) => (
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
