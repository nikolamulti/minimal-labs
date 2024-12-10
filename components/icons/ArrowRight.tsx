export function ArrowRight({
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
        d="M11.6893 7.50004 8.54287 4.35359l.70711-.70711 4.35352 4.35356-4.35352 4.35356-.70711-.7071 3.14643-3.14646H2.39642v-1h9.29288Z"
        fill="currentColor"
      />
    </svg>
  );
}
