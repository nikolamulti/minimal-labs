export function RichMedia({
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
        d="M4.75 3c0-.27614.22386-.5.5-.5h2.5v1h-2V9h-.01772C5.61097 9.84807 4.88162 10.5 4 10.5c-.9665 0-1.75-.7835-1.75-1.75S3.0335 7 4 7c.2684 0 .52269.06042.75.16841V3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 4.5c1.6569 0 3 1.34315 3 3.00001 0 .5435-.1496 1.08304-.4282 1.5456L10.75 13.5 8.17871 9.04635C7.89982 8.58359 7.75 8.04379 7.75 7.50001 7.75 5.84315 9.09315 4.5 10.75 4.5Zm0 4c.5523 0 1-.44772 1-1s-.4477-1-1-1-1 .44772-1 1 .4477 1 1 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
