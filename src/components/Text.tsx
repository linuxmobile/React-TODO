const variants = {
  sub: 'text-gray-500 text-sm',
  base: 'text-gray-700 text-base',
  title: 'text-gray-900 text-lg',
} as const

type TextProps = {
  variant?: keyof typeof variants
  children: string
}

export default function Text(props: TextProps) {
  const { variant = 'base', children } = props
  return <p className={`${variants[variant]}`}>{children}</p>
}
