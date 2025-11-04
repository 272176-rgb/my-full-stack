"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { Span } from "@chakra-ui/react"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"

export interface ColorModeProviderProps extends ThemeProviderProps {}

// Brak realnego providera motywu – zawsze „light”
export function ColorModeProvider(props: ColorModeProviderProps) {
  const { children } = props
  return <>{children}</>
}

export type ColorMode = "light"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

// Zawsze jasny, bez efektu zmiany:
export function useColorMode(): UseColorModeReturn {
  return {
    colorMode: "light",
    setColorMode: () => {},
    toggleColorMode: () => {},
  }
}

// Zawsze wariant jasny:
export function useColorModeValue<T>(light: T, _dark: T) {
  return light
}

// Brak ikony (nic nie renderuje):
export function ColorModeIcon() {
  return null
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

// Przycisk usunięty z UI – nic nie renderuje:
export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(_props, _ref) {
  return null
})

// LightMode bez zmian:
export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

// DarkMode zachowuje się jak LightMode:
export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)
