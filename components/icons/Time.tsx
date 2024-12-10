export function Time({
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
      <path d="M7.5 4.5v4h4v-1h-3v-3h-1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8c0 3.5899 2.91015 6.5 6.5 6.5 3.5899 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9101-6.5-6.5-6.5ZM2.5 8c0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5 0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
