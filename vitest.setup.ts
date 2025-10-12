import "@testing-library/jest-dom"; // This automatically extends Jest's expect
import { vi } from "vitest";

// @ts-ignore - resolve `Error: Not implemented: window.computedStyle(elt, pseudoElt)`
window.getComputedStyle = vi.fn(() => {
  return {
    getPropertyValue: () => "", // Mock property retrieval
  };
});
