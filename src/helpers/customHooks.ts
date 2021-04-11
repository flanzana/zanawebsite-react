import { useState, useEffect, RefObject } from "react"
import { MEDIA_QUERY_BREAKPOINT } from "../theme/consts"

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

export function useMediaQuery(): { isMobile: boolean; isTablet: boolean } {
  const { width } = useWindowSize()

  return {
    isMobile: width < MEDIA_QUERY_BREAKPOINT.MOBILE_L,
    isTablet: width < MEDIA_QUERY_BREAKPOINT.TABLET,
  }
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

// https://usehooks-typescript.com/react-hook/use-on-click-outside
type Event = MouseEvent | TouchEvent
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
): void {
  useEffect(
    () => {
      const listener = (event: Event) => {
        const el = ref?.current
        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains((event?.target as Node) || null)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Reload only if ref or handler changes
    [ref, handler],
  )
}
