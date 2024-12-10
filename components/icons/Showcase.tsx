export function Showcase({
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
        d="M4.29289 2.5 2 4.79289V6.5c0 1.10457.89543 2 2 2 .93192 0 1.71497-.63739 1.93699-1.5h.12602C6.28503 7.86261 7.06808 8.5 8 8.5c.93192 0 1.71497-.63739 1.93699-1.5h.12601c.222.86261 1.0051 1.5 1.937 1.5 1.1046 0 2-.89543 2-2V4.79289L11.7071 2.5H4.29289ZM3 5.20711 4.70711 3.5h6.58579L13 5.20711V6.5c0 .55228-.4477 1-1 1s-1-.44772-1-1V6H9v.5c0 .55228-.44772 1-1 1s-1-.44772-1-1V6H5v.5c0 .55228-.44772 1-1 1s-1-.44772-1-1V5.20711Z"
        fill="currentColor"
      />
      <path
        d="M4 12.5v-3H3v3c0 .5523.44772 1 1 1h8c.5523 0 1-.4477 1-1v-3h-1v3H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
