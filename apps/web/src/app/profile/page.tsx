import type { Metadata } from "next";
import { ProfileClient } from "@/components/ProfileClient";

export const metadata: Metadata = {
  title: "Perfil",
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return (
    <div className="page-wrap">
      <ProfileClient />
    </div>
  );
}
