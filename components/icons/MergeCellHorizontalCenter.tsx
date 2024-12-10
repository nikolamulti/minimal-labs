export function MergeCellHorizontalCenter({
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
        d="M7.5 1.5h1v13h-1v-13ZM11.2071 7.5l2.1465-2.14645-.7072-.7071L9.29289 8l3.35351 3.3536.7072-.7072L11.2071 8.5H15.5v-1h-4.2929ZM4.79289 7.5 2.64645 5.35355l.7071-.7071L6.70711 8l-3.35356 3.3536-.7071-.7072L4.79289 8.5H.5v-1h4.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
