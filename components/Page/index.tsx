type PageProps = {
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {
  return <section className="page">{children}</section>
};
