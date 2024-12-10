export function EasingPause({
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
        d="M8 14.5c3.5899 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9101-6.5-6.5-6.5-3.58985 0-6.5 2.91015-6.5 6.5 0 3.5899 2.91015 6.5 6.5 6.5Zm.99999-4V5.49993H10.5V10.5H8.99999Zm-3.5 0V5.49999h1.5V10.5h-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
