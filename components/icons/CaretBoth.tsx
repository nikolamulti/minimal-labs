export function CaretBoth({
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
        d="m8.35353 4.14652-.35355-.35355-.35356.35355-2.5 2.5.70711.70711 2.14645-2.14645 2.14642 2.14645.7071-.70711-2.49997-2.5Zm0 7.70708-.35355.3536-.35356-.3536-2.5-2.49997.70711-.70711L7.99998 10.793l2.14642-2.14648.7071.70711-2.49997 2.49997Z"
        fill="currentColor"
      />
    </svg>
  );
}
