import React from 'react';
import { BRAND } from './BRAND';

/**
 * The Studio Lumen mark: a gradient tile carrying A dual optic lens with crosshair, ticks and flare.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <circle cx='32' cy='32' r='22' fill='none' stroke='#ffffff' stroke-width='4'/><circle cx='32' cy='32' r='11' fill='none' stroke='#ffffff' stroke-width='3.5'/><line x1='32' y1='8' x2='32' y2='18' stroke='#ffffff' stroke-width='2.5' stroke-linecap='round'/><line x1='32' y1='46' x2='32' y2='56' stroke='#ffffff' stroke-width='2.5' stroke-linecap='round'/><line x1='8' y1='32' x2='18' y2='32' stroke='#ffffff' stroke-width='2.5' stroke-linecap='round'/><line x1='46' y1='32' x2='56' y2='32' stroke='#ffffff' stroke-width='2.5' stroke-linecap='round'/><polygon points='29,29 35,29 35,35 29,35' fill='#ffffff'/><polygon points='44,12 47,12 47,15 44,15' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
