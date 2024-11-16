import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useLanguage } from "../../LanguageContext";


function CTraining() {
  const {t} = useLanguage();

  const training = [
    {
        id: 1,
        title: t('training_1'),
        content: t('training_1_content'),
    },
    {
        id: 2,
        title: t('training_2'),
        content: t('training_2_content'),
    },
    {
        id: 3,
        title: t('training_3'),
        content: t('training_3_content'),
    },
    {
        id: 4,
        title: t('training_4'),
        content: t('training_4_content'),
    },
    {
        id: 5,
        title: t('training_5'),
        content: t('training_5_content'),
    },
    {
        id: 6,
        title: t('training_6'),
        content: t('training_6_content'),
    },
    {
      id: 7,
      title: t('training_7'),
      content: t('training_7_content'),
    },
    {
      id: 8,
      title: t('training_8'),
      content: t('training_8_content'),
    },
    {
      id: 9,
      title: t('training_9'),
      content: t('training_9_content'),
    },
    {
      id: 10,
      title: t('training_10'),
      content: t('training_10_content'),
    },
    {
      id: 11,
      title: t('training_11'),
      content: t('training_11_content'),
    },
    {
      id: 12,
      title: t('training_12'),
      content: t('training_12_content'),
    },
  ]
  return (
    <div 
        id="training"
        className="py-20 space-y-20"
    >
      {/* Tech Leads Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10">
          {t('training')}
        </h2>
        <div className="relative h-20 mb-10">
          <SparklesEffect />
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {training.map((item) => (
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

function LeaderCard({ content}) {
  return (
    <div className="bg-richBlack text-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 text-xl cursor-pointer">
        <p className="text-gray-300">{content}</p>
    </div>
  );
}

export default CTraining;
