export function PlaylistPlay({
  size = 20,
  ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.76151 5.06054c.16116-.08745.35725-.07969.51098.02024L17.2725 11.5808c.1419.0922.2275.25.2275.4192 0 .1692-.0856.327-.2275.4192l-10.00001 6.5c-.15373.0999-.34982.1077-.51098.0203C6.60036 18.852 6.5 18.6834 6.5 18.5v-13c0-.18335.10036-.352.26151-.43946ZM7.5 6.42134V17.5787L16.0825 12 7.5 6.42134Z"
        fill="currentColor"
      />
    </svg>
  );
}
