export function TransferAccount({
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
        d="M9.5 1.82422c-1.38071 0-2.5 1.11929-2.5 2.5s1.11929 2.5 2.5 2.5c1.3807 0 2.5-1.11929 2.5-2.5s-1.1193-2.5-2.5-2.5Zm-1.5 2.5c0-.82843.67157-1.5 1.5-1.5.8284 0 1.5.67157 1.5 1.5s-.6716 1.5-1.5 1.5c-.82843 0-1.5-.67157-1.5-1.5Z"
        fill="currentColor"
      />
      <path
        d="M3 7.82422v2.97268h4.28344L5.6484 9.17971l.7032-.71098L9.20712 11.293l-2.85165 2.8828-.71094-.7032 1.65759-1.6757H2.5c-.27614 0-.5-.2239-.5-.5V7.82422h1ZM11.5 8.82422H9v-1h2.5c1.3807 0 2.5 1.11929 2.5 2.49998v1.5h-1v-1.5c0-.82841-.6716-1.49998-1.5-1.49998Z"
        fill="currentColor"
      />
    </svg>
  );
}
