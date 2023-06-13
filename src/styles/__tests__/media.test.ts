import { media, sizes } from '../media';
import { css } from 'styled-components/macro';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = `${media.xxxl()}{color:red;}`;
    const cssVersion = css`
      @media (min-width: ${sizes.xxxl}px) {
        color: red;
      }
    `.join('');
    expect(mediaQuery).toMatch(cssVersion);
  });
});
