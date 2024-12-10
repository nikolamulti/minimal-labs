export function Flows({
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
        d="M8.89642 5.57324c1.10458 0 1.99998-.89543 1.99998-2s-.8954-2-1.99998-2c-1.10457 0-2 .89543-2 2s.89543 2 2 2Z"
        fill="currentColor"
      />
      <path
        d="M5.89642 4.57324c-1.65685 0-3 1.34315-3 3 0 1.65686 1.34315 2.99996 3 2.99996h6.29288l-2.1464-2.1464.7071-.70711 3.3535 3.35351-3.3535 3.3536-.7071-.7071 2.1464-2.1465H5.89642c-2.20914 0-4-1.79082-4-3.99996s1.79086-4 4-4v1Z"
        fill="currentColor"
      />
    </svg>
  );
}
