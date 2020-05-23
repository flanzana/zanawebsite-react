import { useState, useEffect } from "react"

type WindowSizeType = { width: number; height: number }

// https://usehooks.com/useWindowSize/
export function useWindowSize(): WindowSizeType {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export function useWindowScrollYPosition(): number {
  function getPosition() {
    return window.scrollY
  }

  const [windowScrollYPosition, setWindowScrollYPosition] = useState(getPosition)

  useEffect(() => {
    function handleScroll() {
      setWindowScrollYPosition(getPosition())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowScrollYPosition
}
