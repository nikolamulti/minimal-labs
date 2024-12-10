export function PlaylistNext({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5547 6.10225C7.89015 5.65921 7 6.1356 7 6.9343v10.1315c0 .7987.89015 1.2751 1.5547.832L16 12.9343V18h1V6.00004h-1v5.06576L8.5547 6.10225ZM15.5986 12 8 17.0658V6.9343L15.5986 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
