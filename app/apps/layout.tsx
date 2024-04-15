import Window from "../components/window";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
        <>
            <Window>
                {children}
            </Window>
        </>
  );
}