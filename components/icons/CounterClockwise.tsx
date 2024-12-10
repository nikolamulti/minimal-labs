export function CounterClockwise({
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
        d="M2 2.5h1v3.26821l1.60592-1.65224.00499-.00506c2.14789-2.14788 5.63029-2.14788 7.77819 0 2.1479 2.14789 2.1479 5.63029 0 7.77819-1.0735 1.0735-2.48132 1.6105-3.88763 1.6109H7v-1h1.50121c1.15197-.0003 2.30229-.4396 3.18079-1.318 1.7573-1.75738 1.7573-4.60662 0-6.36398-1.75657-1.75655-4.60399-1.75736-6.36154-.00244L3.68323 6.50002 7 6.5v1l-5 .00003V2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
