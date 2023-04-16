import { Space_Grotesk } from "next/font/google";
import { useSelector } from "react-redux";
import Preview from "@/components/MarkdownPreview";
import Editor from "@/components/Editor";
import Hints from "@/components/Hints";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";

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
  );
}
