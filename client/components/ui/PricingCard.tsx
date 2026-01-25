
"use client";
import React from 'react';
import { motion } from 'motion/react';

export default function PricingCard() {
  const pricingData = [
    {
      name: 'Small', price: 10, description: 'For small organizations.',
      features: ['Get 50 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
    },
    {
      name: 'Medium', mostPopular: true, price: 30, description: 'Perfect for medium organizations.',
      features: ['Get 100 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
    },
    {
      name: 'Large', price: 50, description: 'For large organizations.',
      features: ['Get 200 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
    }

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      } 
    }
  };

  return (
    <>
      <section className='flex items-center justify-center flex-col py-20 px-4 dark:text-white'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className='font-medium text-4xl md:text-[52px] text-slate-800 text-center dark:text-white'>Flexible Pricing Plans</h1>
          <p className='text-base/7 text-zinc-500 max-w-sm text-center mt-4 dark:text-white mx-auto'>Please visit the organization for which you want to purchase the credit for.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {pricingData.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`border border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md cursor-pointer ${item.mostPopular ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            >
              <h1 className='font-medium text-3xl text-slate-800 mt-1 dark:text-white'>{item.name}</h1>
              <p className='text-sm text-zinc-500 mt-2 dark:text-white'>{item.description}</p>
              <h1 className='font-medium text-5xl text-slate-800 mt-6 dark:text-white'>${item.price}</h1>

              <div className='w-full mt-8 space-y-2.5 pb-4'>
                {item.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className='flex items-center gap-3 text-sm text-zinc-500 dark:text-white'>
                    <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0 dark:bg-zinc-800'>
                      <span className='size-1.5 rounded-full bg-zinc-800 dark:bg-zinc-300' />
                    </span>
                    {feature}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}