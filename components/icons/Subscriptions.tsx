export function Subscriptions({
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
        d="M2.5 8c0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5h1V3h-1v1.53431C12.3487 2.71102 10.3158 1.5 8 1.5 4.41015 1.5 1.5 4.41015 1.5 8c0 3.5899 2.91015 6.5 6.5 6.5v-1c-3.03757 0-5.5-2.4624-5.5-5.5Z"
        fill="currentColor"
      />
      <path
        d="M7.5 4v1.5H7c-.82843 0-1.5.67157-1.5 1.5S6.17157 8.5 7 8.5h2c.27614 0 .5.22386.5.5s-.22386.5-.5.5H6v1h1.5V12h1v-1.5H9c.82843 0 1.5-.67157 1.5-1.5S9.82843 7.5 9 7.5H7c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h3v-1H8.5V4h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
