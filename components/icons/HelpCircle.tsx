export function HelpCircle({
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
      <circle opacity=".4" cx="8" cy="8" r="6" stroke="currentColor" />
      <path
        d="M7 4.5c-.82843 0-1.5.67157-1.5 1.5v.5h1V6c0-.27614.22386-.5.5-.5h1.82578c.42718 0 .65763.50106.37963.8254l-1.3443 1.56834C7.62809 8.1656 7.5 8.51186 7.5 8.86992V9.5h1v-.63008c0-.11935.0427-.23477.12037-.32539l1.34429-1.56834C10.7987 6.00318 10.1073 4.5 8.82578 4.5H7ZM8 11.75c.41421 0 .75-.3358.75-.75s-.33579-.75-.75-.75-.75.3358-.75.75.33579.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
