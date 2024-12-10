export function Collapse({
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
        d="M10.6465 3.14642 8.00001 5.79287 5.35356 3.14642l-.70711.70711 3 3 .35356.35355.35355-.35355 3.00004-3-.7071-.70711Zm0 9.70708-2.64649-2.6464-2.64645 2.6464-.70711-.7071 3-2.99998.35356-.35355.35355.35355 3.00004 2.99998-.7071.7071Z"
        fill="currentColor"
      />
    </svg>
  );
}
