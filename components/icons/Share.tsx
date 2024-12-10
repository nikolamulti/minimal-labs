export function Share({
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
        d="M11.1893 6.19047 8.54289 3.54402 9.25 2.83691l3.8536 3.85356L9.25 10.544l-.70711-.70709 2.64641-2.64644H7.39645c-1.933 0-3.5 1.567-3.5 3.50003v2.4726h-1v-2.4726c0-2.48531 2.01471-4.50003 4.5-4.50003h3.79285Z"
        fill="currentColor"
      />
    </svg>
  );
}
