import Course from "./course";
import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://tally.so/widgets/embed.js"
      />
      <div className="w-screen h-screen py-20 flex items-start justify-start flex-col">
        <div className="px-20">
          <p className="text-3xl font-medium">Post Academia Courses</p>
          <p className="font-medium text-lg max-w-xl pt-5 pb-20">
            Computing, and tecnical related courses provided by certified
            trainers designed for all levels of expertise. Selection ranges from
            web, to app, to simple Shortcuts scripting.
          </p>
        </div>
        <div>
          <p className="text-2xl font-medium pb-5 px-20">Web Development</p>
          <div className="w-screen h-90 overflow-x-auto snap-mandatory snap-x mb-20 px-20 flex items-center justify-start gap-5">
            <Course
              color="lime"
              title="Create a digital ordering service (Course over)"
              content="Learn HTML, CSS and how to use Airform to create a functional ordering service."
              date="4-6 Oct"
              time="3-5 PM"
              note="No prerequisite required."
              link=""
            />
            <Course
              color="teal"
              title="Create a digital application"
              content="Learn NextJS, React and Tailwind, and deploy your website with Vercel."
              date="16-20 Oct"
              time="3-5 PM"
              note="Participants expected to know basic HTML."
              link="#tally-open=w2QlB9&tally-overlay=1"
            />
          </div>
        </div>
        <div>
          <p className="text-2xl font-medium pb-5 px-20">General Programming</p>
          <div className="w-screen h-90 overflow-x-auto snap-mandatory snap-x mb-20 px-20 flex items-center justify-start gap-5">
            <Course
              color="sky"
              title="Shortcuts Development"
              content="Discover useful shortcuts and create your own shortcut scripts."
              date="9 Oct"
              time="9-11 PM"
              note="iPhone required."
              link="#tally-open=mZq1dy&tally-overlay=1"
            />
            <Course
              color="pink"
              title="Python for Cryptography"
              content="Learn Python while also learning cryptography and encryption at the same time."
              date="21-22 Oct"
              time="3-5 PM"
              note="No prior prerequisite."
              link="#tally-open=wgKJAd&tally-overlay=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
