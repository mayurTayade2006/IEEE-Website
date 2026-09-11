import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { galleryAlbums } from '../data/ieeeData';
import type { GalleryAlbum } from '../data/ieeeData';
import TiltCard from './TiltCard';

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
    <section id="gallery" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Dynamic Floating Glassmorphism Discs Cluster */}
      <div className="absolute -right-20 top-20 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-36 h-36 rounded-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-ieee-accent/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(0,181,226,0.2)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-3 rounded-full border border-ieee-accent/30 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 1 }}
          className="absolute top-40 right-40 w-24 h-24 rounded-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-[#EC4899]/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-24 right-28 w-20 h-20 rounded-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-[#FFB703]/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(255,183,3,0.2)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/10 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            Event Highlights
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Event <span className="text-gradient">Gallery</span>
          </h1>
        </div>

        {/* Albums Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryAlbums.map((album) => {
            const coverImage = album.images[0]?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80';
            return (
              <TiltCard
                key={album.id}
                glowColor="rgba(236, 72, 153, 0.25)"
                maxTilt={10}
                scale={1.03}
                onClick={() => handleOpenAlbum(album)}
                className="cursor-pointer h-full"
              >
                <div className="group glass-cyber rounded-2xl overflow-hidden border-white/10 relative shadow-xl h-full flex flex-col justify-between hover:border-ieee-accent/50 transition-all duration-300">
                  {/* Cover Image */}
                  <div className="h-64 relative overflow-hidden bg-black/40">
                    <img
                      src={coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
                    
                    {/* Photo Count badge */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-[#0A0E17]/85 backdrop-blur-md border border-white/15 text-xs font-semibold text-gray-200 flex items-center gap-1.5 shadow-lg">
                      <ImageIcon className="w-3.5 h-3.5 text-ieee-accent" />
                      <span>{album.images.length} {album.images.length === 1 ? 'Photo' : 'Photos'}</span>
                    </div>
                    
                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A0E17]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-ieee-blue to-ieee-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,181,226,0.6)]">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Album Details */}
                  <div className="p-5 text-left border-t border-white/5">
                    <h3 className="font-display font-bold text-white text-base md:text-lg group-hover:text-ieee-accent transition-colors">
                      {album.title}
                    </h3>
                    <span className="text-xs text-ieee-accent font-semibold tracking-wide uppercase mt-1 block">
                      IEEE NMIET Program
                    </span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Modal: Album Grid View */}
        <AnimatePresence>
          {selectedAlbum && lightboxIndex === null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 pt-24 bg-[#000000]/85 backdrop-blur-md overflow-y-auto">
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
                <div className={selectedAlbum.images.length === 1 ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
                  {selectedAlbum.images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setLightboxIndex(index)}
                      className={`group cursor-pointer overflow-hidden rounded-xl border border-white/10 relative bg-white/[0.02] ${
                        selectedAlbum.images.length === 1 ? "max-w-md w-full" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className={`w-full h-full ${selectedAlbum.images.length === 1 ? "object-contain max-h-[70vh]" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
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
            <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#000000]/95 backdrop-blur-sm p-4">
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
