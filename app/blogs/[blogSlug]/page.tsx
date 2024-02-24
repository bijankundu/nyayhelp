import dayjs from "dayjs";
import Image from "next/image";
import { Calendar } from "lucide-react";

import { shimmer, toBase64 } from "@/lib/image";

const Page = ({ params }: { params: { blogSlug: string } }) => {
  const { blogSlug } = params;

  return (
    <div className="py-10 flex flex-col items-center">
      <div className="max-w-[680px] flex flex-col gap-4">
        <section className="">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-left">
            Case Analysis: Murli S. Deora v. Union of India, (2001) | Health
            Hazards Linked to Cigarette Smoking
          </h1>
          <div className="flex gap-2 items-center text-gray-500 ">
            <Calendar size={"20px"} />
            <p className="text-sm/relaxed dark:text-gray-400 text-left">
              {`Published on ${dayjs().format("MMM D, YYYY")}`}
            </p>
          </div>
        </section>
        <section>
          <div className="h-72 rounded mb-3">
            <div className="relative h-[inherit]">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(680, 288)
                )}`}
                src="https://via.assets.so/img.jpg?w=680&h=288"
                alt="blog"
                fill={true}
                className="rounded object-cover"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-2 text-base">
            <p>
              The case{" "}
              <span className="font-bold">
                Murli S. Deora v. Union of India (2001)
              </span>{" "}
              was a landmark legal proceeding that exerted a considerable
              influence on the right to life of passive smokers.
            </p>
            <p>
              <span className="font-bold">Case Title:</span> Murli S. Deora v.
              Union of India and Others
            </p>
            <p>
              <span className="font-bold">Court:</span> Supreme Court of India
            </p>
            <p>
              <span className="font-bold">Judges</span> Justice M.B. Shah &
              Justice R.P. Sethi
            </p>
            <p>
              <span className="font-bold">Date of Judgment:</span> 02/11/2001
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-base">
              The case of{" "}
              <span className="font-bold">
                Murli S. Deora v. Union of India (2001)
              </span>{" "}
              was a landmark legal proceeding that exerted a considerable
              influence on the right to life of passive smokers. The case
              primarily revolved around the health hazards associated with
              cigarette smoking and the right to life of passive smokers. The
              judgment was delivered by a bench of two judges, Justice M.B. Shah
              and Justice R.P. Sethi, on 02/11/2001.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Facts</h2>
            <p className="text-base">
              The case of{" "}
              <span className="font-bold">
                Murli S. Deora v. Union of India (2001)
              </span>{" "}
              was a landmark legal proceeding that exerted a considerable
              influence on the right to life of passive smokers. The case
              primarily revolved around the health hazards associated with
              cigarette smoking and the right to life of passive smokers. The
              judgment was delivered by a bench of two judges, Justice M.B. Shah
              and Justice R.P. Sethi, on 02/11/2001.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Laws Involved</h2>
            <ul className="list-disc ml-4">
              <li>Article 21 of the Indian constitution</li>
              <li>Article 32 of the Indian Constitution</li>
              <li>
                Cigarettes (Regulation of Production, Supply and Distribution)
                Act, 1975
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
