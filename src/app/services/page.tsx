import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <time data-pagefind-meta="date:2023-04-20T00:00:00.000+09:00">
        2023/04/20
      </time>
      <header>
        <h1>Services We Offer</h1>
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
        <h2>Our Core Services</h2>
        <section>
          <h3>Web Development</h3>
          <p>
            We create responsive and user-friendly websites tailored to your
            business needs.
          </p>
        </section>
        <section>
          <h3>Mobile App Development</h3>
          <p>
            Our team of experts develops high-performance mobile applications
            for iOS and Android platforms.
          </p>
        </section>
        <section>
          <h3>Cloud Solutions</h3>
          <p>
            We provide scalable and secure cloud infrastructure to support your
            growing business.
          </p>
        </section>
      </main>
    </main>
  );
}
