type IButton = {
  children: React.ReactNode;
};

export default function Button({ children }: IButton) {
  return <button type="button">{children}</button>;
}
