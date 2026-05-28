import { describe, it, expect } from "vitest";
import { projects, getFeaturedProjects, getProjectBySlug } from "@/data/projectsData";

describe("projects data — integralność danych", () => {
  it("każdy projekt ma unikalny slug", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("każdy projekt ma niepusty tytuł", () => {
    projects.forEach((p) => expect(p.title.trim().length).toBeGreaterThan(0));
  });

  it("każdy projekt ma shortDescription w obu językach", () => {
    projects.forEach((p) => {
      expect(p.shortDescription.en.trim().length).toBeGreaterThan(0);
      expect(p.shortDescription.pl.trim().length).toBeGreaterThan(0);
    });
  });

  it("każdy projekt ma co najmniej 1 technologię w stack", () => {
    projects.forEach((p) => expect(p.stack.length).toBeGreaterThan(0));
  });

  it("githubUrl zaczyna się od https://", () => {
    projects.forEach((p) => expect(p.githubUrl).toMatch(/^https:\/\//));
  });

  it("liveUrl jeśli istnieje zaczyna się od https://", () => {
    projects.filter((p) => p.liveUrl).forEach((p) => expect(p.liveUrl).toMatch(/^https:\/\//));
  });

  it("priority jest liczbą dodatnią", () => {
    projects.forEach((p) => expect(p.priority).toBeGreaterThan(0));
  });

  it("createdAt jest poprawną datą w formacie YYYY-MM-DD", () => {
    projects.forEach((p) => {
      expect(p.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(new Date(p.createdAt).getTime()).not.toBeNaN();
    });
  });

  it("image path zaczyna się od /images/", () => {
    projects.forEach((p) => expect(p.image).toMatch(/^\/images\//));
  });
});

describe("getFeaturedProjects", () => {
  it("zwraca tylko projekty z featured: true", () => {
    getFeaturedProjects().forEach((p) => expect(p.featured).toBe(true));
  });

  it("sortuje projekty po priority rosnąco", () => {
    const featured = getFeaturedProjects();
    for (let i = 1; i < featured.length; i++)
      expect(featured[i].priority).toBeGreaterThanOrEqual(featured[i - 1].priority);
  });

  it("zwraca tablicę", () => {
    expect(Array.isArray(getFeaturedProjects())).toBe(true);
  });

  it("nie mutuje oryginalnej tablicy projects", () => {
    const before = [...projects];
    getFeaturedProjects();
    expect(projects).toEqual(before);
  });

  it("pierwszy projekt ma najniższy priority", () => {
    const featured = getFeaturedProjects();
    if (featured.length > 1) expect(featured[0].priority).toBeLessThan(featured[1].priority);
  });
});

describe("getProjectBySlug", () => {
  it("znajduje projekt po poprawnym slugu", () => {
    const project = getProjectBySlug("ticket-dashboard");
    expect(project).toBeDefined();
    expect(project?.slug).toBe("ticket-dashboard");
  });

  it("zwraca undefined dla nieistniejącego slugu", () => {
    expect(getProjectBySlug("nieistniejacy")).toBeUndefined();
  });

  it("zwraca undefined dla pustego stringa", () => {
    expect(getProjectBySlug("")).toBeUndefined();
  });

  it("rozróżnia wielkość liter", () => {
    expect(getProjectBySlug("Ticket-Dashboard")).toBeUndefined();
  });

  it("zwraca pełny obiekt z wszystkimi polami", () => {
    expect(getProjectBySlug("ticket-dashboard")).toMatchObject({
      slug: expect.any(String),
      title: expect.any(String),
      category: expect.any(String),
      status: expect.any(String),
      stack: expect.any(Array),
      githubUrl: expect.any(String),
      featured: expect.any(Boolean),
      priority: expect.any(Number),
    });
  });
});
