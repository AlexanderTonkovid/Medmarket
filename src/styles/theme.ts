export const theme = {
  colors: {
    primary: "#0077B6",
    primaryDark: "#005F8A",
    primaryLight: "#E0F2FE",
    secondary: "#00B894",
    secondaryDark: "#009B7D",
    accent: "#F39C12",
    white: "#FFFFFF",
    bg: "#F8FAFC",
    bgCard: "#FFFFFF",
    text: "#1E293B",
    textSecondary: "#64748B",
    textLight: "#94A3B8",
    border: "#E2E8F0",
    borderLight: "#F1F5F9",
    success: "#10B981",
    error: "#EF4444",
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    full: "9999px",
  },
  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
  },
} as const;

export type Theme = typeof theme;
