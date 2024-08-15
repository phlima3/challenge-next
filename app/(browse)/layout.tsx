import { Navbar, Container } from "./_components/";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default BrowseLayout;
