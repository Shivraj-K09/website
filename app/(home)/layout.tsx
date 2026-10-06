import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="home-shell relative isolate flex h-full w-full flex-col overflow-y-auto text-foreground">
      <Header />
      <main className="flex w-full flex-col">{children}</main>
      <Footer/>
    </div>
  )
}
