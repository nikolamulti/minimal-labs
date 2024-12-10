export function MergeCellHorizontalLeft({
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
        d="M3 14.5v-13h1v13H3ZM7.70711 7.5l2.14644-2.14645-.7071-.7071L5.79289 8l3.35356 3.3536.7071-.7072L7.70711 8.5H13v-1H7.70711Z"
        fill="currentColor"
      />
    </svg>
  );
}
