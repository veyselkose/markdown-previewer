import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { updateMarkdown } from "@/store/markdownSlice";
import Preview from "@/components/MarkdownPreview";
import Editor from "@/components/Editor";
import Hints from "@/components/Hints";
import Header from "@/components/Header";

const space_mono = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`${space_mono.className} bg-gray-50`}>
      <div className="container">
        <div className="grid grid-cols-10 grid-rows-6 gap-4 py-6 h-screen">
          <Header />

          <Hints />

          <Editor />

          <Preview />
        </div>
      </div>
    </main>
  );
}
