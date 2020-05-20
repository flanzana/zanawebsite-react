// @flow
import { useState, useEffect } from "react"

function useWindowScrollYPosition() {
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

export default useWindowScrollYPosition
