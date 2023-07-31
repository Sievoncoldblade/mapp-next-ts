"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    async function checkSession() {
      try {
        if (status == "authenticated") {
          console.log(status, session);
          router.push("/dashboard");
        } else {
          console.log(status, session);
          router.push("/landing");
        }
      } catch (err) {
        // Handle any errors that might occur during session check
        console.error("Error checking session:", err);
      }
    }

    checkSession();
  }, [status, router, session]);
}
