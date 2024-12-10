export function ArrowDown({
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
        d="M7.5 11.6894 4.35355 8.54293l-.7071.70711L8 13.6036l4.3536-4.35356-.7072-.70711L8.5 11.6894V2.39648h-1v9.29292Z"
        fill="currentColor"
      />
    </svg>
  );
}
