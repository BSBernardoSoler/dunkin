"use client"

import { motion } from "framer-motion"
import { Store } from "lucide-react"

export function FloatingCards({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>)  {
  return (
 
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center ">
         {children}
        </div>
      </motion.div>
   
  )
}

