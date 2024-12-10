export function VideoTutorialsListItem({
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
        d="M3.49307 3.87432c0-.77342.84039-1.25407 1.50702-.86193l7.01381 4.12579c.6573.38665.6573 1.33722 0 1.72387L5.00009 12.9878c-.66663.3922-1.50702-.0885-1.50702-.8619V3.87432Zm8.01383 4.12579L4.49307 3.87432v8.25158l7.01383-4.12579Z"
        fill="currentColor"
      />
    </svg>
  );
}
