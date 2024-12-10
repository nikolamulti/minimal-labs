export function Bookshelf({
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
        d="M3.01639 13.4109V2.41089h1V13.4109h-1ZM6.01639 13.4109V2.41089h1V13.4109h-1ZM8.04914 3.08889 12.0491 13.5889l.9345-.356L8.98363 2.73289l-.93449.356Z"
        fill="currentColor"
      />
    </svg>
  );
}
