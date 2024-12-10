export function ChevronSmallUp({
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
        d="m7.99999 7.38383 2.64641 2.64647.7071-.70713-3.35351-3.35356-3.35355 3.35356.70711.70713 2.64644-2.64647Z"
        fill="currentColor"
      />
    </svg>
  );
}
