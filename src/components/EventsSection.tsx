import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Tag, ArrowRight, X } from 'lucide-react';
import { eventsData } from '../data/ieeeData';
import type { Event } from '../data/ieeeData';

const EventsSection: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-14 left-8 w-40 h-40 rounded-full bg-gradient-to-br from-ieee-blue/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -15, 0], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-28 right-10 w-44 h-44 rounded-full bg-gradient-to-br from-ieee-accent/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [-15, 15, -15], y: [15, -10, 15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 left-16 w-48 h-48 rounded-full bg-gradient-to-br from-white/10 to-ieee-blue/10 blur-3xl"
        />
      </div>
      {/* Dynamic Floating Glass Panels Cluster */}
      <div className="absolute -right-20 bottom-0 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [-5, 25, -5] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-32 h-32 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [15, 45, 15] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-36 right-36 w-24 h-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-20, 10, -20] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-28 w-20 h-20 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Activities & Programs
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Upcoming Events
          </h1>
        </div>

        {/* Events Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {eventsData.map(event => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={event.id}
                className="group glass-panel rounded-2xl overflow-hidden border-white/10 flex flex-col justify-between hover:border-ieee-accent/20 transition-all duration-300"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#0A0E17]/85 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-ieee-accent" />
                      <span className="text-[10px] font-semibold text-gray-200 uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 text-ieee-accent" />
                      <span>{event.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-ieee-accent transition-colors">
                      {event.title}
                    </h3>

                    {/* Short Desc */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-left">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 max-w-[65%] truncate">
                    <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  <button
                    onClick={() => setActiveEvent(event)}
                    className="flex items-center gap-1 text-xs font-semibold text-ieee-accent hover:text-white transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Modal / Lightbox Detail Drawer */}
        <AnimatePresence>
          {activeEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#000000]/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl bg-dark-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveEvent(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0A0E17]/60 hover:bg-[#0A0E17]/90 text-white transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="h-64 relative">
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="px-2.5 py-1 rounded bg-ieee-blue text-white text-xs font-semibold uppercase tracking-wider">
                      {activeEvent.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-3">
                      {activeEvent.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-left space-y-6">
                  {/* Meta data */}
                  <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-ieee-accent" />
                      <span>{activeEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-ieee-accent" />
                      <span>{activeEvent.venue}</span>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-ieee-accent font-semibold">
                      Event Details
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {activeEvent.longDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default EventsSection;
