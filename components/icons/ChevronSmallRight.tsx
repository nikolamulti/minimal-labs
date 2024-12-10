export function ChevronSmallRight({
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
        d="M8.61611 8.00004 5.96967 5.35359l.7071-.70711 3.35353 3.35356-3.35353 3.35356-.7071-.7071 2.64644-2.64646Z"
        fill="currentColor"
      />
    </svg>
  );
}
