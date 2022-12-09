export const pixelToViewportWidth = (size, width = 1440) =>
  `${(size / width) * 100}vw`;

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};
