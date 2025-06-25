'use client';

export default function AIEmotionGame() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">😊 Emotion Reaction Game</h1>
      <iframe
        src="/games/emotions/index.html"
        className="w-full max-w-[500px] h-[550px] border shadow-md rounded-lg"
        allow="camera"
      ></iframe>
    </main>
  );
}
