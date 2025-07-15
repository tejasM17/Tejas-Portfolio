import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Email = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // ⏳ Auto close after 3s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg backdrop-blur-md z-[1000] flex items-center gap-3"
        >
          <Icon icon="mdi:check-circle" width={32} height={32} className="text-white drop-shadow" />
          <div>
            <h4 className="text-lg font-semibold">Message Sent!</h4>
            <p className="text-sm text-white/90">Thank you for reaching out. I’ll connect with you soon 💙</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Email;
