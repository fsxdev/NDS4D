"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function AnimatedLogo({ size = 28 }: { size?: number }) {
  const controls = useAnimation()
  const isHoveredRef = useRef(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const playAnimation = async () => {
    await controls.start("hidden")
    await controls.start("visible")
  }

  useEffect(() => {
    playAnimation()



    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        playAnimation()
      }
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleHoverStart = () => {
    isHoveredRef.current = true
    playAnimation()
  }

  const handleHoverEnd = () => {
    isHoveredRef.current = false
  }

  const strokeVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 0.8,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  const fillVariants = {
    hidden: {
      fillOpacity: 0,
    },
    visible: {
      fillOpacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  }






  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 185 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ cursor: "pointer" }}
    >
      <motion.path
        d="M4 122.5L57.5 86L61 93V171.5H4V122.5Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        className="text-foreground"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            opacity: 0,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
              fillOpacity: { duration: 0.3, delay: 0.6 },
              opacity: { duration: 0.1, delay: 0.3 },
            },
          },
        }}
      />







      <motion.path
        d="M122 82V1.5L180 0V51L126.5 87L122 82Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        className="text-foreground"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            opacity: 0,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
              fillOpacity: { duration: 0.3, delay: 0.6 },
              opacity: { duration: 0.1, delay: 0.3 },
            },
          },
        }}
      />






      <motion.path
        d="M116 171.5L4 6H70L180.5 171.5H116Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        className="text-foreground"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            opacity: 0,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.8, ease: "easeInOut" },
              fillOpacity: { duration: 0.4, delay: 0.5 },
              opacity: { duration: 0.1 },
            },
          },
        }}
      />
    </motion.svg>




  )
}
