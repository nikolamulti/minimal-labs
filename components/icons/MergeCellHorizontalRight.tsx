export function MergeCellHorizontalRight({
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
        d="M12 1.5h1v13h-1v-13ZM8.29289 7.5 6.14645 5.35355l.7071-.7071L10.2071 8l-3.35355 3.3536-.7071-.7072L8.29289 8.5H3v-1h5.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
