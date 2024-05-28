"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Carousel = ({ x, y, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hexagon relative overflow-hidden transform transition-transform duration-300 hover:scale-110"
      style={{
        position: 'absolute',
        left: `${x}px`, // X coordinate
        top: `${y}px`, // Y coordinate
        width: '100px',
        height: '115px', // Adjusted to fit equilateral hexagon
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon shape
        backgroundColor: '#090909', // Dark color
      }}
    >
      <div
        className="absolute inset-0 flex justify-center items-center"
        style={{
          width: '100%',
          height: '100%',
          fontSize: '12px',
          color: '#ffffff', // White color for text
        }}
      >
        {icon && (
          <Image
            src={icon}
            alt="Icon description"
            width={60}
            height={60}
            style={{ marginBottom: '10px' }}
          />
        )}
        <span>{}</span>
      </div>
    </motion.div>
  );
};

export default Carousel;