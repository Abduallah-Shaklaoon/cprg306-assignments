import Link from "next/link";

export default function Page() {
    return (
        <main>
            <ul>
              <li>
                <Link href="/week-2">Week 2 Assignment</Link>
              </li>
              <li>
                <Link href="/week-3">week-3</Link>
              </li>
            </ul>
        </main>
    );
}