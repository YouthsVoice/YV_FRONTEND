import dynamic from 'next/dynamic';

const MemoryMatchGame = dynamic(() => import('./MemoryMatchGame'), {
  ssr: false,
});

export default function MemoryMatchPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Memory Match: Youths Voice</h1>
      <MemoryMatchGame />
    </main>
  );
}
