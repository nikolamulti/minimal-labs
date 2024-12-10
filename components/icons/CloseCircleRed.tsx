export function CloseCircleRed({
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
        d="M7.29287 7.99998 5.14642 10.1464l.70711.7071 2.14645-2.14642 2.14642 2.14642.7071-.7071-2.14642-2.14642 2.14642-2.14645-.7071-.70711-2.14642 2.14645-2.14645-2.14645-.70711.70711 2.14645 2.14645Z"
        fill="#FF9C9C"
      />
      <path
        opacity=".4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8c0 3.0376 2.46243 5.5 5.5 5.5 3.0376 0 5.5-2.4624 5.5-5.5 0-3.03757-2.4624-5.5-5.5-5.5ZM1.5 8c0-3.58985 2.91015-6.5 6.5-6.5 3.5899 0 6.5 2.91015 6.5 6.5 0 3.5899-2.9101 6.5-6.5 6.5-3.58985 0-6.5-2.9101-6.5-6.5Z"
        fill="#FF9C9C"
      />
    </svg>
  );
}
