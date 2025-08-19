'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import PopupModal from '../components/PopupModal';
import Confetti from '../components/Confetti';
import { trackCTAClick } from '../lib/analytics';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(86);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => Math.max(75, prev - 1));
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(carouselInterval);
  }, []);

  const handleCTAClick = (ctaName) => {
    trackCTAClick(ctaName);
    setIsPopupOpen(true);
    setShowConfetti(true);
  };

  const benefits = [
    {
      icon: '🎯',
      title: 'The Exact 5-Star Framework',
      description: 'Step-by-step blueprint that top therapists use to create unforgettable sessions that clients rave about online.',
      details: [
        'Proven client satisfaction techniques',
        'Service delivery optimization',
        'Quality assurance protocols'
      ]
    },
    {
      icon: '💬',
      title: 'Review Generation Secrets',
      description: 'Discover the subtle techniques that naturally inspire clients to leave glowing 5-star reviews without asking.',
      details: [
        'Natural conversation starters',
        'Follow-up strategies',
        'Review request timing'
      ]
    },
    {
      icon: '🔄',
      title: 'Client Retention Mastery',
      description: 'Simple but powerful methods to build unshakeable loyalty that keeps clients booking months in advance.',
      details: [
        'Loyalty building techniques',
        'Re-booking strategies',
        'Client relationship management'
      ]
    },
    {
      icon: '✨',
      title: 'Experience Enhancement',
      description: 'Small touches and details that elevate good massages into extraordinary experiences people can\'t stop talking about.',
      details: [
        'Atmosphere optimization',
        'Personal touch elements',
        'Memorable service details'
      ]
    },
    {
      icon: '📈',
      title: 'Word-of-Mouth Multiplication',
      description: 'Create sessions so memorable that clients become your biggest advocates, referring friends and family naturally.',
      details: [
        'Referral incentive systems',
        'Client advocacy strategies',
        'Community building techniques'
      ]
    },
  ];

  const testimonials = [
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"Elliott\'s guide completely transformed my practice. I went from struggling to get bookings to having a 3-week waiting list. The 5-star framework really works!"',
      author: 'Sarah M.',
      title: 'Licensed Massage Therapist, Austin TX',
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"The review generation techniques are pure gold. I\'ve gotten more 5-star reviews in the past 3 months than in my entire previous year. Thank you Elliott!"',
      author: 'Michael R.',
      title: 'Spa Owner, Miami FL',
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"I was skeptical at first, but these strategies doubled my client retention rate. The small touches make such a huge difference!"',
      author: 'Jennifer L.',
      title: 'Independent Therapist, Seattle WA',
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"Elliott\'s experience shows in every page. This isn\'t just theory - it\'s proven strategies that actually work in the real world."',
      author: 'David K.',
      title: 'Wellness Center Director, Denver CO',
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"My referral rate increased by 400% after implementing these techniques. Clients are literally bringing their friends and family!"',
      author: 'Lisa T.',
      title: 'Sports Massage Therapist, Phoenix AZ',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <span className="text-yellow-500 text-2xl">★</span>
            <span>The 5-Star Standard</span>
          </a>
          <button
            onClick={() => handleCTAClick('header_cta')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Free Guide
          </button>
        </div>
      </motion.header>

      {/* Urgency Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 text-center py-6 mt-16 relative overflow-hidden flex items-center justify-center"
      >
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <span className="flex items-center gap-2 font-semibold text-lg">
            🔥 FREE for the first 100 therapists only!
          </span>
          <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full font-bold min-w-[40px] text-center">
              {spotsLeft}
            </span>
            <span className="text-sm font-semibold">spots left</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4 relative overflow-hidden">
        {/* Beautiful gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-transparent to-purple-700/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 via-transparent to-indigo-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-transparent to-yellow-400/10"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 via-transparent to-purple-500/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg"
          >
            The 5-Star Standard
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-8 opacity-90 text-shadow"
          >
            The Complete 16-Page Blueprint That Transforms Your Massage Practice Into a Client Magnet
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-80 h-96 mx-auto mb-10 relative"
          >
            <Image
              src="/mockup.png"
              alt="The 5-Star Standard Guide"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-indigo-600/30 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-transparent to-pink-400/30 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 via-transparent to-yellow-400/15 rounded-2xl"></div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-8 max-w-2xl mx-auto opacity-95 text-shadow"
          >
            <strong>I created this comprehensive 16-page PDF guide specifically for massage therapists who want to grow their practice, scale their business, build more loyal clients, and generate consistent 5-star reviews.</strong>
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-6 mb-8 flex-wrap"
          >
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span>500+ Reviews</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
              <span className="text-xl">👥</span>
              <span>20 Years Experience</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
              <span className="text-xl">🏆</span>
              <span>Top-Rated in Vegas</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCTAClick('hero_cta')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            <span>📥</span>
            Get Your FREE Guide Now
          </motion.button>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 opacity-90 text-shadow"
          >
            ✅ Instant Download • ✅ No Spam • ✅ 100% Free
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What You'll Discover Inside This 16-Page Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I created this comprehensive PDF specifically for massage therapists who want to grow their practice, scale their business, build more loyal clients, and generate consistent 5-star reviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div 
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (detailIndex * 0.1) }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Massage Therapists Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from therapists who've transformed their practice using these strategies
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-2xl mb-4">{testimonials[currentTestimonial].stars}</div>
                <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{testimonials[currentTestimonial].text}"</p>
                <div>
                  <div className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-blue-600">{testimonials[currentTestimonial].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="w-80 h-80 relative">
                <Image
                  src="/elliot.png"
                  alt="Elliott Reed - Licensed Massage Therapist"
                  fill
                  className="object-cover rounded-full shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                From Elliott Reed
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                <strong>Licensed Massage Therapist • 20+ Years Experience • Former Owner of Vegas' Top-Rated Spa</strong>
              </p>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I built IMR Massage from the ground up into one of Las Vegas' most successful wellness centers. Over 14 years, my team and I earned hundreds of 5-star reviews and created a waiting list of loyal clients.
                </p>
                <p>
                  In 2023, I sold my shares and now I'm sharing the exact strategies that made it all possible. This isn't theory – it's the real-world blueprint that generated millions in revenue and transformed countless therapists' careers.
                </p>
                <p className="font-semibold">
                  If you're ready to stop competing on price and start building a practice that clients choose, rebook, and refer... this guide is for you.
                </p>
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  href="https://www.instagram.com/TheMassageGuide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2"
                >
                  📸 Follow on Instagram
                </a>
                <a
                  href="https://www.facebook.com/TheMassageGuide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2"
                >
                  👍 Like on Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Practice?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-10 opacity-90"
          >
            Join the first 100 therapists to get this game-changing guide absolutely free
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCTAClick('final_cta')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            <span>🚀</span>
            Download The 5-Star Standard Now
          </motion.button>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-gray-700"
          >
            <p className="opacity-80">
              ⚡ Instant access • 📱 Works on any device • 🔒 Your email stays private
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      
      {/* Confetti Animation */}
      <Confetti isActive={showConfetti} />
    </div>
  );
}
