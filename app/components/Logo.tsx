type LogoProps = {
  fillColor?: string;
  width?: string;
  height?: string;
};

const Logo = ({ fillColor = "currentColor", width = "100", height = "100" }: LogoProps) => {
  return (
    <svg
      id="logo"
      width={width}
      height={height}
      viewBox="0 0 334 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="334" height="334" rx="32" fill="none" />
      <circle cx="167" cy="167" r="160" stroke={fillColor} strokeWidth="14" />
      <circle cx="167.5" cy="166.5" r="58.5" stroke={fillColor} strokeWidth="8" />
      <path id="logo-path-1" d="M226.5 123.501L131.729 28.2747C185 15.0014 224.972 36.5538 224.972 36.5538L226.5 123.501Z" fill={fillColor} />
      <path id="logo-path-2" d="M238.727 179.05L240 44.5015C285.5 71.5 300.154 116.914 300.154 116.914L238.727 179.05Z" fill={fillColor} />
      <path id="logo-path-3" d="M209.443 227.464L304.744 132.093C319 185 296 226.001 296 226.001L209.443 227.464Z" fill={fillColor} />
      <path id="logo-path-4" d="M154.641 238.46L290.5 237C263.5 284.5 219 299 219 299L154.641 238.46Z" fill={fillColor} />
      <path id="logo-path-5" d="M105.818 209.202L203.237 304.211C150 318.5 108.38 296.708 108.38 296.708L105.818 209.202Z" fill={fillColor} />
      <path id="logo-path-6" d="M93.2435 153.989L95.0004 290C47.5 262 33.5001 217.5 33.5001 217.5L93.2435 153.989Z" fill={fillColor} />
      <path id="logo-path-7" d="M122.608 106.18L28.6541 202.853C14.5 150 35.9073 109.28 35.9073 109.28L122.608 106.18Z" fill={fillColor} />
      <path id="logo-path-8" d="M179.036 93.8971L44.5001 93.0006C73 46 116.5 33.0008 116.5 33.0008L179.036 93.8971Z" fill={fillColor} />
    </svg>
  );
};

export default Logo;
