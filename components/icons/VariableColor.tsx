export function VariableColor({
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
        d="M8 11.75c-1.38071 0-2.5-1.1193-2.5-2.50004 0-.45329.12524-.90378.35694-1.28824l.00485-.00804L8.00001 4.25l2.14339 3.71238c.2314.38429.3566.83453.3566 1.28758C10.5 10.6307 9.38071 11.75 8 11.75ZM4.5 9.24996C4.5 11.183 6.067 12.75 8 12.75s3.5-1.567 3.5-3.50004c0-.63233-.1733-1.25954-.4975-1.79943L8.86604 3.75c-.3849-.66666-1.34715-.66667-1.73206 0L4.99795 7.44972C4.67349 7.98984 4.5 8.61732 4.5 9.24996Z"
        fill="currentColor"
      />
    </svg>
  );
}
