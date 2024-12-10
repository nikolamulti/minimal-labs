export function SortAzDown({
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
        d="M8.43299 8h1.06186l.71425-2h2.4382l.7143 2h1.0618l-2.1428-6h-1.7048L8.43299 8Zm3.85711-3-.7143-2h-.2952l-.7143 2h1.7238Z"
        fill="currentColor"
      />
      <path
        d="M12.2211 10H8.92822V9h4.99998v.70711L10.6353 13h3.2929v1H8.92822v-.7071L12.2211 10ZM4.92822 10.3111l1.64451-1.6627.71099.7032-2.82428 2.8555L1.5766 9.35547l.70325-.71094 1.64837 1.63057V5h1v5.3111Z"
        fill="currentColor"
      />
    </svg>
  );
}
