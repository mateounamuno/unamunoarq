import { Metadata } from "next";
import HomeTwoPage from "./(homes)/home-2/page";

export const metadata: Metadata = {
  title: "Unamuno Arquitectura",
};

export default function Home() {
  return (
    <>
      <HomeTwoPage />
    </>
  );
}
