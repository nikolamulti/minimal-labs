export function UnmergeCell({
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
        d="M7.29287 8.00004 5.64642 6.35359l.70711-.70711 1.64645 1.64645 1.64644-1.64645.70708.70711-1.64642 1.64645 1.64642 1.64644-.70708.70712-1.64644-1.64646-1.64645 1.64646-.70711-.70712 1.64645-1.64644Z"
        fill="currentColor"
      />
      <g opacity=".4" fill="currentColor">
        <path d="M6 3H3v10h3v-1.5h1V13c0 .5523-.44772 1-1 1H3c-.55228 0-1-.4477-1-1V3c0-.55228.44772-1 1-1h3c.55228 0 1 .44772 1 1v1.5H6V3ZM9 11.5V13c0 .5523.44772 1 1 1h3c.5523 0 1-.4477 1-1V3c0-.55228-.4477-1-1-1h-3c-.55228 0-1 .44772-1 1v1.5h1V3h3v10h-3v-1.5H9Z" />
      </g>
    </svg>
  );
}
