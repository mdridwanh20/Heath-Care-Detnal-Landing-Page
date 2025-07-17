// AdvantagesSection.jsx
import React from 'react';
import {
  FaChalkboardTeacher,
  FaShieldAlt,
  FaUsers,
  FaMedal,
  FaBuilding,
  FaDoorOpen,
  FaDumbbell,
  FaUserGraduate,
} from 'react-icons/fa';
import { HeadingH2, HeadingH3, Para } from '../Component/Share/Typography';
import Line from '../Component/Share/Line';

const advantages = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Qualified Trainers',
    desc: 'Certified instructors guide your workouts, offering expert form correction and personalized routines...',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Fully Insured',
    desc: 'We maintain full liability coverage for your safety and peace of mind during every session...',
  },
  {
    icon: <FaUsers />,
    title: 'Individual Training',
    desc: 'Customized one-on-one sessions tailored to your goals, fitness level, and preferences...',
  },
  {
    icon: <FaMedal />,
    title: 'Trained Champs',
    desc: 'Our champions and advanced athletes train here—join a community of high achievers...',
  },
  {
    icon: <FaBuilding />,
    title: 'Multiple Classes',
    desc: 'A diverse schedule of classes—Yoga, HIIT, Spin, Strength—available throughout the week...',
  },
  {
    icon: <FaDoorOpen />,
    title: 'Open-Door Policy',
    desc: 'Friendly, supportive environment—staff and trainers are always ready to assist and advise...',
  },
  {
    icon: <FaDumbbell />,
    title: 'State-of-the-Art Equipment',
    desc: 'Cutting-edge machines and free weights kept in excellent working order for optimal performance...',
  },
  {
    icon: <FaUserGraduate />,
    title: 'High-End Facility',
    desc: 'Modern, clean spaces with ample locker rooms, showers, and amenities for your comfort...',
  },
];

const AdvantagesSection = () => (
  <section className="bg-[var(--cardBodyColor)] my-10 lg:my-20 text-white py-16">
    <div className="container mx-auto px-6 lg:px-20">

      <div className="flex flex-col items-center pb-8 py-3">
        <HeadingH2 headH2="Our Advantages" className="text-[var(--primaryColor)]" />
        <Line />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map(({ icon, title, desc }, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="text-[var(--primaryColor)] border p-2 text-lg mt-1">{icon}</div>

            <div>
              <HeadingH3 head3={title} className="text-[var(--lightColor)]" />
              <Para para={desc} />
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
