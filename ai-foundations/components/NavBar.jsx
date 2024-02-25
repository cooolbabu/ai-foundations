import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-8 px-4 py-4 text-center justify-center">
        <Link href="/ai-models" className="hover:underline">
          AI Models
        </Link>
        <Link href="/prompt-patterns" className="hover:underline">
          Prompt Patterns
        </Link>
        <Link href="/readme" className="hover:underline">
          Read Me
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
