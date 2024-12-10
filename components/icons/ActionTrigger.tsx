export function ActionTrigger({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0C.447715 0 0 .447715 0 1v11c0 .5523.447715 1 1 1h11c.5523 0 1-.4477 1-1V1c0-.552285-.4477-1-1-1H1Zm5.5 2v3.5h2.58916c.39455 0 .63366.43558.42183.76844L6.5 11V7.5H3.91084c-.39455 0-.63366-.43558-.42183-.76844L6.5 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
