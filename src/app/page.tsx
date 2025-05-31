"use client";
import { useEffect, useState } from "react";
import RenderForm, { Props } from "./go/_components/render-form";

export default function Home({ searchParams }: Readonly<Props>) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleLoadImage = async () => {
    const imageUrl = "/frame.png";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      localStorage.setItem("customFrameUrl", result);
    };

    setFileName("frame.png");
    reader.readAsDataURL(blob);
  };
  useEffect(() => {
    handleLoadImage();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center flex-col gap-12 p-6">
      <img
        src="/enlisted.png"
        alt="Enlisted Youth Camp Header"
        className="w-full max-w-5xl h-auto max-h-[50vh] object-contain mx-auto"
      />

      <RenderForm searchParams={searchParams} />
    </div>
  );
}
