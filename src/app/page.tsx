"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import RenderForm, { Props } from "./go/_components/render-form";
import CaptionCopyBlock from "./_components/global/caption";

export default function Home({ searchParams }: Readonly<Props>) {
  const [isReady, setIsReady] = useState(false);

  const handleLoadImage = async () => {
    try {
      const imageUrl = "/frame.png";
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        localStorage.setItem("customFrameUrl", result);
        setIsReady(true);
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Failed to load frame image", error);
      setIsReady(true);
    }
  };

  useEffect(() => {
    handleLoadImage();
  }, []);

  if (!isReady) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-screen flex items-center justify-center flex-col gap-12 p-6">
      <Image
        src="/enlisted.png"
        alt="Enlisted Youth Camp Header"
        width={640}
        height={320}
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />

      <RenderForm searchParams={searchParams} />
      <CaptionCopyBlock />
    </div>
  );
}
