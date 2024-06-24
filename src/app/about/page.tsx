import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <time data-pagefind-meta="date:2021-02-13T00:00:00.000+09:00">
        2021/02/13
      </time>
      <header>
        <h1>About Our Company</h1>
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
        <h2>Our Story</h2>
        <p>
          Founded in 2010, our company has been at the forefront of innovation
          in the tech industry.
        </p>
        <h3>Our Mission</h3>
        <p>
          To provide cutting-edge solutions that empower businesses and
          individuals to achieve their full potential.
        </p>
        <h3>Our Team</h3>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Mike Johnson - Head of Design</li>
        </ul>
      </main>
    </main>
  );
}
