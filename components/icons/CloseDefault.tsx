export function CloseDefault({
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
        d="m8.70711 7.99998 3.64649-3.64645-.7072-.70711L8 7.29287 4.35355 3.64642l-.7071.70711 3.64644 3.64645-3.64644 3.64642.7071.7071L8 8.70708l3.6464 3.64642.7072-.7071-3.64649-3.64642Z"
        fill="currentColor"
      />
    </svg>
  );
}
