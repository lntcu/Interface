import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="py-30 px-2 sm:px-10 flex flex-col gap-20">
      <Navbar />
      <div className="flex flex-col gap-5 text-zinc-300 font-medium">
        <p className="text-lg text-white">Salutations</p>
        <div>
          <p>My appellation is Daniel.</p>
          <p>Presently a student.</p>
          <p>Doing programming.</p>
        </div>
        <div>
          <p>Doing web development.</p>
          <p>Using Next JS, Tailwind and Motion.</p>
          <p>Design interaction.</p>
        </div>
        <div>
          <p>Also iOS app development.</p>
          <p>iPadOS, MacOS and VisionOS too.</p>
          <p>Using Swift in Xcode.</p>
        </div>
        <div>
          <p>And competitive programming.</p>
          <p>In C++ using AtCoder.</p>
          <p>Also on Codebreaker and Codeforces.</p>
        </div>
        <div>
          <p>Studying machine learning.</p>
          <p>Using PyTorch and Hugging Face.</p>
          <p>For generation and prediction.</p>
        </div>
        <div>
          <p>"If at first you don't succeed,</p>
          <p>then skydiving definitely isn't for you."</p>
          <p>Steven Wright</p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/Library.jpeg"
          alt="Library"
          width={100}
          height={100}
          className="w-sm rounded-lg"
        />
        <div className="absolute bottom-0 left-0 m-2 backdrop-blur-lg bg-zinc-800/50 text-sm px-2 rounded-md">
          Library in the Valley in Guangzhou by Cosmos
        </div>
      </div>
    </div>
  );
}
