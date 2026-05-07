import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, User } from 'lucide-react';

type TagType = 'Inauguration' | 'AI/ML' | 'Deep Learning' | 'IoT' | 'Hands-On' | 'Hardware' | 'Symposium';

const tagColors: Record<TagType, string> = {
  Inauguration: '#FF4D00',
  'AI/ML': '#3b82f6',
  'Deep Learning': '#8b5cf6',
  IoT: '#10b981',
  'Hands-On': '#f59e0b',
  Hardware: '#ef4444',
  Symposium: '#06b6d4',
};

interface Session {
  time: string;
  label: string;
  topic: string;
  speakers: string;
  tag: TagType;
}

interface DaySchedule {
  day: number;
  date: string;
  sessions: Session[];
}

const schedule: DaySchedule[] = [
  {
    day: 1, date: 'May 8, 2026',
    sessions: [
      { time: '10:00 AM – 11:30 AM', label: 'Opening Ceremony', topic: 'Inauguration & Welcome Address', speakers: 'Prof. Dr. Makrand Jadhav, Prof. Amol Ingle', tag: 'Inauguration' },
      { time: '12:00 PM – 2:00 PM', label: 'Keynote', topic: 'Introduction to AI & Machine Learning', speakers: 'Industry Expert', tag: 'AI/ML' },
    ],
  },
  {
    day: 2, date: 'May 15, 2026',
    sessions: [
      { time: '10:00 AM – 1:00 PM', label: 'Workshop', topic: 'Supervised & Unsupervised Learning', speakers: 'ML Practitioner', tag: 'AI/ML' },
      { time: '2:00 PM – 4:00 PM', label: 'Hands-On Lab', topic: 'Python for ML — scikit-learn & pandas', speakers: 'Technical Trainer', tag: 'Hands-On' },
    ],
  },
  {
    day: 3, date: 'May 22, 2026',
    sessions: [
      { time: '10:00 AM – 12:30 PM', label: 'Session', topic: 'Neural Networks & Deep Learning Fundamentals', speakers: 'Deep Learning Researcher', tag: 'Deep Learning' },
      { time: '1:30 PM – 4:00 PM', label: 'Hands-On Lab', topic: 'Building Models with TensorFlow / Keras', speakers: 'Technical Trainer', tag: 'Hands-On' },
    ],
  },
  {
    day: 4, date: 'May 29, 2026',
    sessions: [
      { time: '10:00 AM – 12:00 PM', label: 'Session', topic: 'Introduction to IoT Architecture', speakers: 'IoT Engineer', tag: 'IoT' },
      { time: '1:00 PM – 4:00 PM', label: 'Hands-On Lab', topic: 'Raspberry Pi & Arduino Basics', speakers: 'Hardware Specialist', tag: 'Hardware' },
    ],
  },
  {
    day: 5, date: 'May 30, 2026',
    sessions: [
      { time: '10:00 AM – 1:00 PM', label: 'Workshop', topic: 'Sensor Integration & Data Acquisition', speakers: 'IoT Practitioner', tag: 'IoT' },
      { time: '2:00 PM – 4:30 PM', label: 'Hands-On Lab', topic: 'Building an IoT Dashboard', speakers: 'Technical Trainer', tag: 'Hands-On' },
    ],
  },
  {
    day: 6, date: 'May 31, 2026',
    sessions: [
      { time: '10:00 AM – 1:00 PM', label: 'Project Day', topic: 'AI + IoT Integration Project', speakers: 'Mentors & Trainers', tag: 'Hands-On' },
      { time: '2:00 PM – 4:00 PM', label: 'Hardware Lab', topic: 'Circuit Design & Prototyping', speakers: 'Hardware Specialist', tag: 'Hardware' },
    ],
  },
  {
    day: 7, date: 'June 2, 2026',
    sessions: [
      { time: '10:00 AM – 12:00 PM', label: 'Project Presentations', topic: 'Student Project Showcase', speakers: 'All Participants', tag: 'Symposium' },
      { time: '12:30 PM – 2:00 PM', label: 'Closing Ceremony', topic: 'Valedictory & Certificate Distribution', speakers: 'Prof. Dr. Makrand Jadhav, Prof. Amol Ingle', tag: 'Symposium' },
    ],
  },
];

export const Events: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="events" className="border-b border-white/10 bg-brutal-black overflow-hidden">
      {/* Header */}
      <div className="border-b border-white/10 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-neon-orange font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                <div className="h-1 w-8 bg-neon-orange" />
                UPCOMING_EVENT
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[88px] leading-[1.05] tracking-[-0.01em] uppercase text-white">
                Workshop: Hands-On IoT &amp; AI.
              </h2>
            </div>
            <div className="lg:text-right flex-shrink-0">
              <p className="font-mono text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] mb-1">
                Youth Empowerment: Building a Talent Pool
              </p>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                May 8 – June 2, 2026 &nbsp;·&nbsp; 7-Day Workshop
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Day selector */}
      <div className="border-b border-white/10 px-4 sm:px-6 py-4 sm:py-6">
        <div className="mx-auto max-w-7xl flex gap-2 flex-wrap justify-start">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i)}
              className={`font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-3 py-2 sm:px-5 sm:py-2.5 border transition-all ${
                activeDay === i
                  ? 'bg-neon-orange border-neon-orange text-white'
                  : 'border-white/20 text-white/40 hover:border-white hover:text-white'
              }`}
            >
              DAY_{day.day}
            </button>
          ))}
        </div>
      </div>

      {/* Active day */}
      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="px-4 sm:px-6 py-6 sm:py-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Day header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
            <div>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                DAY {schedule[activeDay].day}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-widest mt-1">
                {schedule[activeDay].date}
              </div>
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-widest">
              {schedule[activeDay].sessions.length}_SESSIONS
            </div>
          </div>

          {/* Sessions */}
          <div className="space-y-px bg-white/5">
            {schedule[activeDay].sessions.map((session, i) => {
              const tagColor = tagColors[session.tag] || '#FF4D00';
              return (
                <div
                  key={i}
                  className="bg-brutal-black p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center hover:bg-white/[0.02] transition-colors"
                >
                  {/* Time */}
                  <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-widest lg:w-52 flex-shrink-0">
                    <Clock size={11} />
                    {session.time}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="font-mono text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">
                      {session.label}
                    </div>
                    <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                      {session.topic}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wide">
                      <User size={10} />
                      {session.speakers}
                    </div>
                  </div>

                  {/* Tag */}
                  <div
                    className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border self-start lg:self-auto flex-shrink-0"
                    style={{ borderColor: tagColor, color: tagColor }}
                  >
                    {session.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
