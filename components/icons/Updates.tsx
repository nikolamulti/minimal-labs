export function Updates({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8204 2.61613c.1138.095.1796.23561.1796.38387v8c0 .1483-.0658.2889-.1796.3839-.1139.095-.264.1346-.4098.108L6 10.1446V13.5H5V9.96275l-2.58944-.47081C2.17281 9.44871 2 9.24165 2 9V5c0-.24164.17281-.4487.41056-.49193l11.00004-2c.1458-.02652.2959.01306.4098.10806ZM3 5.41729v3.16543l10 1.81818V3.59911L3 5.41729Z"
        fill="currentColor"
      />
    </svg>
  );
}
