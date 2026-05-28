import { describe, it, expect } from "vitest";
import {
  statusColor,
  statusLabel,
  categoryColor,
  cardGlow,
  formatCreatedAt,
  getStackPreview,
} from "@/lib/projectHelpers";

describe("statusColor", () => {
  it("live → cyan", () => expect(statusColor("live").color).toBe("#00ffb4"));
  it("in-progress → amber", () => expect(statusColor("in-progress").color).toBe("#ffb800"));
  it("archived → szary", () => expect(statusColor("archived").color).toBe("#8899aa"));
  it("zwraca color, border i bg", () => {
    ["live", "in-progress", "archived"].forEach((s) => {
      const r = statusColor(s as never);
      expect(r).toHaveProperty("color");
      expect(r).toHaveProperty("border");
      expect(r).toHaveProperty("bg");
    });
  });
  it("color jest poprawnym hex", () =>
    expect(statusColor("live").color).toMatch(/^#[0-9a-f]{6}$/i));
});

describe("statusLabel", () => {
  it("in-progress → 'in progress' po angielsku", () =>
    expect(statusLabel("in-progress", "en")).toBe("in progress"));
  it("in-progress → 'w trakcie' po polsku", () =>
    expect(statusLabel("in-progress", "pl")).toBe("w trakcie"));
  it("archived → 'archiwum' po polsku", () =>
    expect(statusLabel("archived", "pl")).toBe("archiwum"));
  it("zwraca niepusty string dla każdej kombinacji", () => {
    (["live", "in-progress", "archived"] as const).forEach((s) =>
      (["en", "pl"] as const).forEach((l) => expect(statusLabel(s, l).length).toBeGreaterThan(0))
    );
  });
});

describe("categoryColor", () => {
  it("fullstack → purple", () => expect(categoryColor("fullstack")).toBe("#bf00ff"));
  it("frontend → blue", () => expect(categoryColor("frontend")).toBe("#00b4ff"));
  it("landing-page → cyan", () => expect(categoryColor("landing-page")).toBe("#00ffb4"));
  it("nieznana → fallback szary", () => expect(categoryColor("practice")).toBe("#8899aa"));
});

describe("cardGlow", () => {
  it("index 0 → cyan", () => expect(cardGlow(0).corner).toBe("#00ffb4"));
  it("index 1 → purple", () => expect(cardGlow(1).corner).toBe("#bf00ff"));
  it("index 2+ → blue", () => expect(cardGlow(99).corner).toBe("#00b4ff"));
  it("glowHover jaśniejszy od glow", () => {
    expect(cardGlow(0).glowHover).toContain("0.18");
    expect(cardGlow(0).glow).toContain("0.06");
  });
  it("zwraca border, glow, glowHover, corner", () => {
    const g = cardGlow(0);
    ["border", "glow", "glowHover", "corner"].forEach((k) => expect(g).toHaveProperty(k));
  });
});

describe("formatCreatedAt", () => {
  it("formatuje poprawną datę", () => {
    const r = formatCreatedAt("2024-11-01");
    expect(r).toContain("2024");
    expect(r).toContain("Nov");
  });
  it("zwraca pusty string dla niepoprawnej daty", () => {
    expect(formatCreatedAt("niepoprawna")).toBe("");
    expect(formatCreatedAt("")).toBe("");
  });
  it("różne miesiące dają różne etykiety", () => {
    expect(formatCreatedAt("2024-01-01")).not.toBe(formatCreatedAt("2024-06-01"));
  });
});

describe("getStackPreview", () => {
  const stack = ["Next.js", "TypeScript", "Tailwind", "Zod", "Playwright", "Cloudinary"];

  it("zwraca poprawną liczbę widocznych", () =>
    expect(getStackPreview(stack, 4).visible).toHaveLength(4));
  it("overflow = różnica", () => expect(getStackPreview(stack, 4).overflow).toBe(2));
  it("overflow = 0 gdy stack mniejszy niż limit", () =>
    expect(getStackPreview(["Next.js"], 5).overflow).toBe(0));
  it("zachowuje kolejność", () => {
    const { visible } = getStackPreview(stack, 3);
    expect(visible[0]).toBe("Next.js");
    expect(visible[2]).toBe("Tailwind");
  });
  it("nie mutuje oryginalnej tablicy", () => {
    const original = [...stack];
    getStackPreview(stack, 3);
    expect(stack).toEqual(original);
  });
  it("limit 0 → brak widocznych", () => {
    const { visible, overflow } = getStackPreview(stack, 0);
    expect(visible).toHaveLength(0);
    expect(overflow).toBe(stack.length);
  });
});
