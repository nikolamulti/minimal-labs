export function PlaylistPrev({
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
        d="M15.4453 6.10225C16.1099 5.65921 17 6.1356 17 6.9343v10.1315c0 .7987-.8901 1.2751-1.5547.832L8 12.9343V18H7V6.00004h1v5.06576l7.4453-4.96355ZM8.40139 12 16 17.0658V6.9343L8.40139 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
