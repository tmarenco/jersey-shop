import { auth } from "@/auth.config";
import { Title } from "../../../components/ui/title/Title";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { capitalizeFirstLetter } from "@/utils";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <Title title="Profile" />
      <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 md:col-span-2">
          <Image
            width={500}
            height={500}
            src="/imgs/unknown.jpg"
            alt={session.user.image ?? "unkown"}
          />
        </div>
        <div className="col-span-1 px-5">
          <h1>
            <span className="font-bold text-xl">Id: </span>
            <span>{session.user.id}</span>
          </h1>
          <h1>
            <span className="font-bold text-xl">Name: </span>
            <span>{capitalizeFirstLetter(session.user.name)}</span>
          </h1>
          <h1>
            <span className="font-bold text-xl">Email: </span>
            <span>{session.user.email}</span>
          </h1>
          <h1>
            <span className="font-bold text-xl">
              Email verification status:{" "}
            </span>
            <span>{session.user.emailVerified ? "✔" : "❌"}</span>
          </h1>
          <h1>
            <span className="font-bold text-xl">Role: </span>
            <span>{capitalizeFirstLetter(session.user.role)}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
