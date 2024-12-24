import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-4 px-8 border-t">
      <p>&copy; {new Date().getFullYear()} MyBnB. All rights reserved.</p>
      <p>
        Developed by{" "}
        <Link
          href="https://github.com/Adnan0061"
          className="font-bold text-green-500"
        >
          Adnan Ahmed
        </Link>
      </p>
    </footer>
  );
}
