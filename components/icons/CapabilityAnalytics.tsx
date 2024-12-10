export function CapabilityAnalytics({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity=".4" fill="currentColor">
        <path d="M11.5 6.5c0-.27614.2239-.5.5-.5h2c.2761 0 .5.22386.5.5v4l-3 3v-7ZM6.5 17.5c0 .2761.22386.5.5.5h2.5v-.5l-3-3v3ZM14.5 17.5c0 .2761-.2239.5-.5.5h-2l2.5-2.5v2ZM9.5 10.5c0-.2761-.22386-.5-.5-.5H7l2.5 2.5v-2Z" />
      </g>
      <path
        d="M4.5 12.2929V4h-1v14.5c0 .8284.67157 1.5 1.5 1.5h14.5v-1H5c-.27614 0-.5-.2239-.5-.5v-4.7929l1.5-1.5 4.6464 4.6465c.1953.1952.5119.1952.7072 0L19.5 8.70711V12h1V7h-5v1h3.2929L11 15.7929l-4.64645-4.6465c-.19526-.1952-.51184-.1952-.7071 0L4.5 12.2929Z"
        fill="currentColor"
      />
    </svg>
  );
}
