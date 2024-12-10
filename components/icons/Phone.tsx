export function Phone({
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
        d="M4.93934 3.06063c-.19526-.19526-.51184-.19526-.70711 0l-.58578.58579c-.97631.97631-.97631 2.55922 0 3.53553l5.17157 5.17155c.97631.9763 2.55918.9763 3.53558 0l.5857-.5858c.1953-.1952.1953-.5118 0-.7071l-2-1.99997c-.1952-.19526-.5118-.19526-.7071 0L8.58579 10.7071l-3.2929-3.29292 1.64645-1.64644c.19526-.19526.19526-.51185 0-.70711l-2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
