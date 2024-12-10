export function Dashboard({
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
        d="M3 3.5c0-.27614.22386-.5.5-.5h3c.27614 0 .5.22386.5.5v3c0 .27614-.22386.5-.5.5h-3c-.27614 0-.5-.22386-.5-.5v-3Zm0 6c0-.27614.22386-.5.5-.5h3c.27614 0 .5.22386.5.5v3c0 .2761-.22386.5-.5.5h-3c-.27614 0-.5-.2239-.5-.5v-3Zm6-6c0-.27614.22386-.5.5-.5h3c.2761 0 .5.22386.5.5v3c0 .2761-.2239.5-.5.5h-3c-.27614 0-.5-.2239-.5-.5v-3Zm0 6c0-.27614.22386-.5.5-.5h3c.2761 0 .5.22386.5.5v3c0 .2761-.2239.5-.5.5h-3c-.27614 0-.5-.2239-.5-.5v-3Z"
        stroke="currentColor"
      />
    </svg>
  );
}
