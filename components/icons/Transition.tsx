export function Transition({
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
        d="M7.5 6v2.5c0 .55228.44772 1 1 1H11v-1H8.5V6h-1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 2.5h-1v1.02242c2.8033.25262 5 2.60856 5 5.47758 0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-2.86902 2.19675-5.22496 5-5.47758V2.5h-1v-1h3v1Zm3 6.5c0 2.4853-2.0147 4.5-4.5 4.5-2.48528 0-4.5-2.0147-4.5-4.5 0-2.48528 2.01472-4.5 4.5-4.5 2.4853 0 4.5 2.01472 4.5 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
