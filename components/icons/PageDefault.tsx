export function PageDefault({
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
        d="M3 3c0-.55228.44772-1 1-1h4.70711L13 6.29289V13c0 .5523-.4477 1-1 1H4c-.55228 0-1-.4477-1-1V3Zm5.29289 0H4v10h8V6.70711L8.29289 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
