"use client"
import { Search } from 'lucide-react';
import {motion} from 'motion/react'
const LandingSearch = () => {
  return (
    <motion.div 
    initial= {{opacity : 0, y:50}}
    animate = {{opacity : 1 , y : 0}}
    transition={{ease : 'easeOut', duration : 0.8}}
    className="w-full max-w-3xl mx-auto px-4 py-6">

      <form
        className="relative group flex items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-500 transition-colors duration-200" />
        </div>
        <input
          type="search"
          placeholder="Search for the desired events..."
          className="block w-full pl-12 pr-4 sm:pr-28 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 shadow-xl shadow-zinc-200/20 dark:shadow-none transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-2 hidden sm:flex items-center">
          <button
            type="submit"
            className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default LandingSearch;
