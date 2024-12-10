export function FolderOpen({
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
        d="M2.11876 3c-.55229 0-1 .44772-1 1v3h1V4h3.29289l2 2h4.70715V5H7.82587l-2-2H2.11876Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.95728 7c-.40891 0-.77662.24895-.92848.62861l-1.6 3.99999C1.16605 12.2855 1.64981 13 2.35728 13h9.92292c.4089 0 .7767-.249.9285-.6286l1.6-4.00001C15.0715 7.71453 14.5877 7 13.8802 7H3.95728Zm0 1h9.92292l-1.6 4H2.35728l1.6-4Z"
        fill="currentColor"
      />
    </svg>
  );
}
