import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { galleryAlbums } from '../data/ieeeData';
import type { GalleryAlbum } from '../data/ieeeData';

interface GallerySectionProps {
  selectedAlbum: GalleryAlbum | null;
  setSelectedAlbum: (album: GalleryAlbum | null) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ selectedAlbum, setSelectedAlbum }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenAlbum = (album: GalleryAlbum) => {
    setSelectedAlbum(album);
  };

  const handleCloseAlbum = () => {
    setSelectedAlbum(null);
    setLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : selectedAlbum.images.length - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < selectedAlbum.images.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-dark-bg/50 border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-12 w-44 h-44 rounded-full bg-gradient-to-br from-ieee-blue/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [10, -10, 10], y: [0, -18, 0], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="absolute top-28 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-ieee-accent/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [-20, 20, -20], y: [20, -15, 20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/10 to-ieee-blue/10 blur-3xl"
        />
      </div>
      {/* Dynamic Floating Glass Discs Cluster */}
      <div className="absolute -left-20 top-20 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-28 h-28 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -360] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-44 w-20 h-20 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-1.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-44 left-32 w-16 h-16 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Event Highlights
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Gallery
          </h1>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryAlbums.map((album) => {
            const coverImage = album.images[0]?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80';
            return (
              <motion.div
                key={album.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenAlbum(album)}
                className="group cursor-pointer glass-panel rounded-xl overflow-hidden border-white/10 relative shadow-lg"
              >
                {/* Cover Image */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
                  
                  {/* Photo Count badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 rounded bg-[#0A0E17]/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-gray-300 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-ieee-accent" />
                    <span>{album.images.length} Photos</span>
                  </div>
                  
                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A0E17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-ieee-blue flex items-center justify-center text-white shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Album Details */}
                <div className="p-5 text-left">
                  <h3 className="font-display font-bold text-white text-base md:text-lg group-hover:text-ieee-accent transition-colors">
                    {album.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 block">IEEE Branch Album</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal: Album Grid View */}
        <AnimatePresence>
          {selectedAlbum && lightboxIndex === null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#000000]/85 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-5xl bg-dark-bg border border-white/10 rounded-2xl p-8 relative shadow-2xl my-8"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="text-left">
                    <span className="text-xs text-ieee-accent font-semibold uppercase tracking-wider">Event Album</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">
                      {selectedAlbum.title}
                    </h2>
                  </div>
                  <button
                    onClick={handleCloseAlbum}
                    className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Images Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedAlbum.images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setLightboxIndex(index)}
                      className="group cursor-pointer overflow-hidden rounded-xl border border-white/5 relative aspect-[4/3] bg-white/[0.02]"
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                        <p className="text-xs font-medium text-white line-clamp-2">{img.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal: Fullscreen Lightbox Slideshow */}
        <AnimatePresence>
          {selectedAlbum && lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000]/95 backdrop-blur-sm p-4">
              {/* Top controls bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <span className="text-sm font-semibold tracking-wider">
                  {lightboxIndex + 1} / {selectedAlbum.images.length} — {selectedAlbum.title}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Photo Slider */}
              <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
                {/* Prev Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-0 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors hover:text-ieee-accent z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Active Image */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={selectedAlbum.images[lightboxIndex].url}
                  alt={selectedAlbum.images[lightboxIndex].caption}
                  className="max-w-full max-h-full object-contain rounded-lg border border-white/5 shadow-2xl"
                />

                {/* Next Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-0 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors hover:text-ieee-accent z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="mt-6 text-center max-w-2xl px-6">
                <p className="text-white font-medium text-sm md:text-base leading-relaxed">
                  {selectedAlbum.images[lightboxIndex].caption}
                </p>
                <span className="text-xs text-gray-500 mt-1 block">IEEE NMIET Event Photo</span>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GallerySection;
