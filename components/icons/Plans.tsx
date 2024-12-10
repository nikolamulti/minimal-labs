export function Plans({
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
        d="m8 2 1.34708 4.1459h4.35922l-3.5267 2.5623 1.3471 4.1459L8 10.2918l-3.52671 2.5623 1.34708-4.1459-3.52671-2.5623h4.35926L8 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
