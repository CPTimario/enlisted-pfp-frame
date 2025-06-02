"use client";

export default function DownloadNotification({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md z-50 animate-fade-in-out">
      Image downloaded successfully!
    </div>
  );
}
