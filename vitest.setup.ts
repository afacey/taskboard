import "@testing-library/jest-dom"; // This automatically extends Jest's expect
import { vi } from "vitest";

// @ts-ignore - resolve `Error: Not implemented: window.computedStyle(elt, pseudoElt)`
window.getComputedStyle = vi.fn(() => {
  return {
    getPropertyValue: () => "", // Mock property retrieval
  };
});

const originalConsoleError = console.error;
console.error = function (...data) {
  if (
    typeof data[0]?.toString === "function" &&
    data[0].toString().includes("Error: Could not parse CSS stylesheet")
  )
    return;
  originalConsoleError(...data);
};
