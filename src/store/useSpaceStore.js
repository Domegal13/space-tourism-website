import { create } from "zustand";

export const useSpaceStore = create((set, get) => ({
  destinations: [],
  crew: [],
  technology: [],
  slidesCrew: [],
  activeDestin: false,

  fetchDataSpace: async () => {
    const resp = await fetch("../../dist/data.json");
    const json = await resp.json();
    const destinations = json.destinations;
    const crew = json.crew;
    const technology = json.technology;
    set({ destinations });
    set({ crew });
    set({ technology });
    console.log(destinations);
    console.log(crew);
    console.log(technology);
  },

  findSlidesCrew: (name) => {
    const { crew } = get();
    const findSlides = crew.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    set({ slidesCrew: findSlides });
  },

  activeDestination: (ref) => {
    const { activeDestin } = get();
    set({ activeDestin: ref });
  },
}));
