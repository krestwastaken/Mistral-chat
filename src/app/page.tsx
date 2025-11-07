import ChatWindow from "./components/ChatWindow";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-4">
      <ChatWindow />
    </main>
  );
}
