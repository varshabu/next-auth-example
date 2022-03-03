export const createMediaQuery = (
  minWidth: number,
  type = 'media',
  maxWidth: number | undefined = undefined
) =>
  `@${type} (min-width: ${minWidth}px)${
    maxWidth !== undefined ? ` and (max-width: ${maxWidth}px)` : ''
  }`;

const MediaQueries = Object.freeze({
  mobile: createMediaQuery(0),
  tablet: createMediaQuery(768),
  desktop: createMediaQuery(960),
  desktopWide: createMediaQuery(1248),
});

export default MediaQueries;
