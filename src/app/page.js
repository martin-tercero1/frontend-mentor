import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <a href="/recipe_page">Recipe page</a>
        </li>
        <li>
          <a href="/social_links">Social links profile</a>
        </li>
        <li>
          <a href="/blog_preview">Blog preview</a>
        </li>
        <li>
          <a href="/appareal_page">Appareal page</a>
        </li>
        <li>
          <a href="/article_preview">Article preview</a>
        </li>
        <li>
          <a href="/coming_soon">Coming soon</a>
        </li>
        <li>
          <a href="/intro_signup">Intro signup</a>
        </li>
        <li>
          <a href="/interactive_ratings">Interactive ratings</a>
        </li>
      </ul>
    </main>
  );
}
