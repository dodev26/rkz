export const normalizeProp = (
  prop: string | number | [number, number],
): string =>
  typeof prop === 'number'
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();
