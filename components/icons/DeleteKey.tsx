export function DeleteKey({
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
        d="M14.1465 3.5H5.85358c-.13261 0-.25979.05268-.35356.14645l-4 4c-.19526.19526-.19526.51184 0 .7071l4 4.00005c.09377.0937.22095.1464.35356.1464h8.29292c.2761 0 .5-.2239.5-.5V4c0-.27614-.2239-.5-.5-.5Zm-7.94197 6.558 2.05806-2.05801-2.05806-2.05806.88388-.88389L9.14647 7.1161l2.05803-2.05806.8839.88389-2.058 2.05806 2.058 2.05801-.8839.8839-2.05803-2.05803-2.05806 2.05803-.88388-.8839Z"
        fill="currentColor"
      />
    </svg>
  );
}
