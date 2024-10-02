import Link from "next/link";

export default function Page() {
    return (
        <main>
            <ul>
              <li>
                <Link href="/week-2">Week 2 - Assignment</Link>
              </li>
              <li>
                <Link href="/week-3">Week 3 - Shopping List</Link>
              </li>
              <li>
                <Link href="/week-4">week-4</Link>
              </li>
            </ul>
        </main>
    );
}