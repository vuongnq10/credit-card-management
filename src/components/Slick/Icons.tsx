export const Left = ({ onClick }: { onClick?: () => void }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{
      position: 'absolute',
      zIndex: 100,
      left: 4,
      cursor: 'pointer',
      top: '42.5%',
    }}
    onClick={onClick}
  >
    <circle cx='16' cy='16' r='15.5' fill='#D9D9D9' stroke='#e5e5ea' />
    <mask
      id='mask0_1036_14506'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='6'
      y='8'
      width='17'
      height='16'
    >
      <rect x='6.66675' y='8' width='16' height='16' fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_1036_14506)'>
      <path
        d='M17.3334 22.6667L10.6667 16L17.3334 9.33334L18.5167 10.5167L13.0334 16L18.5167 21.4833L17.3334 22.6667Z'
        fill='#1C1B1F'
      />
    </g>
  </svg>
);

export const Right = ({ onClick }: { onClick?: () => void }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{
      position: 'absolute',
      right: 4,
      cursor: 'pointer',
      top: '42.5%',
    }}
    onClick={onClick}
  >
    <circle cx='16' cy='16' r='15.5' fill='#D9D9D9' stroke='#e5e5ea' />
    <mask
      id='mask0_1036_14512'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='9'
      y='8'
      width='17'
      height='16'
    >
      <rect x='9.33325' y='8' width='16' height='16' fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_1036_14512)'>
      <path
        d='M14.6833 22.6667L13.5 21.4833L18.9833 16L13.5 10.5167L14.6833 9.33334L21.35 16L14.6833 22.6667Z'
        fill='#1C1B1F'
      />
    </g>
  </svg>
);
