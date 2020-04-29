import { useState, useEffect } from "react"

function useWindowScrollYPosition() {
  const isClient = typeof window === "object"

  function getPosition() {
    return isClient ? window.scrollY : undefined
  }

  const [windowScrollYPosition, setWindowScrollYPosition] = useState(getPosition)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleScroll() {
      setWindowScrollYPosition(getPosition())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowScrollYPosition
}

export default useWindowScrollYPosition
