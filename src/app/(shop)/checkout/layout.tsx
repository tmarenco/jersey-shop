import { auth } from "@/auth.config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout",
};

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
