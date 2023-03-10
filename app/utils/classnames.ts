export function classname(...args: any[]) {
  return args.filter(Boolean).join(" ");
}
