export function Logout({
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
        d="M6.89645 3.5h-4v9h4v1h-4c-.55228 0-1-.4477-1-1v-9c0-.55228.44772-1 1-1h4v1Z"
        fill="currentColor"
      />
      <path
        d="M10.0429 10.6464 12.1893 8.5H5.39645v-1h6.79285l-2.1464-2.14645.7071-.7071L14.1036 8 10.75 11.3536l-.7071-.7072Z"
        fill="currentColor"
      />
    </svg>
  );
}
