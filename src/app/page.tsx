import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Welcome to Our Website</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Latest Updates</h2>
        <article>
          <h3>New Product Launch</h3>
          <p>
            We&apos;re excited to announce the launch of our latest product.
            It&apos;s designed to revolutionize the way you work and play.
          </p>
        </article>
        <article>
          <h3>Upcoming Event</h3>
          <p>
            Join us next month for our annual conference where industry experts
            will share insights on emerging technologies.
          </p>
        </article>
      </main>
    </main>
  );
}
