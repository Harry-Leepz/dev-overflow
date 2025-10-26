import Navbar from "@/components/navigation/navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
