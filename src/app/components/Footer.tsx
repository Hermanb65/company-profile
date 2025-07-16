export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} PT Tangguh Heavy Lift & Transport</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
