import { Space_Grotesk } from "next/font/google";
import { useSelector } from "react-redux";
import Preview from "@/components/MarkdownPreview";
import Editor from "@/components/Editor";
import Hints from "@/components/Hints";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";
import Head from "next/head";

const space_mono = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const dark = useSelector((state) => state.markdown.dark);
  const [menu, setMenu] = useState("editor");

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Head>
      <main className={`${space_mono.className} bg-gray-50 dark:bg-zinc-950`}>
        <div className="container">
          <div className="flex flex-col py-6 h-screen gap-4">
            <Header />
            <MobileNav menu={menu} setMenu={setMenu} />
            <div className="appGrid">
              <Hints menu={menu} />

              <Editor menu={menu} />

              <Preview menu={menu} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
