export function List({
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
        d="M3.5 7C4.32843 7 5 6.32843 5 5.5S4.32843 4 3.5 4 2 4.67157 2 5.5 2.67157 7 3.5 7Zm0-1c.27614 0 .5-.22386.5-.5S3.77614 5 3.5 5s-.5.22386-.5.5.22386.5.5.5Z"
        fill="currentColor"
      />
      <path d="M6 6h8V5H6v1ZM6 11h8v-1H6v1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10.5c0 .8284-.67157 1.5-1.5 1.5S2 11.3284 2 10.5C2 9.67157 2.67157 9 3.5 9S5 9.67157 5 10.5Zm-1 0c0 .2761-.22386.5-.5.5s-.5-.2239-.5-.5.22386-.5.5-.5.5.2239.5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
