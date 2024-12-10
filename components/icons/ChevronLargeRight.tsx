export function ChevronLargeRight({
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
        d="M9.11611 8.00004 5.46967 4.35359l.7071-.70711 4.35353 4.35356-4.35353 4.35356-.7071-.7071 3.64644-3.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}
