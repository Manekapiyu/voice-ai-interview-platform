import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="w-[340px] max-sm:w-full min-h-60 rounded-2xl shadow-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-400 p-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative flex flex-col gap-4">
        {/* Type Badge */}
        <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-indigo-600 text-white text-sm font-medium shadow-md">
          {normalizedType}
        </div>

        {/* Cover Image */}
        <div className="flex justify-center mt-6">
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full border-4 border-indigo-100 shadow-lg object-cover size-[90px]"
          />
        </div>

        {/* Interview Role */}
        <h3 className="mt-3 text-xl font-semibold text-gray-800 text-center">
          {role} Interview
        </h3>

        {/* Date & Score */}
        <div className="flex flex-row gap-6 mt-3 justify-center text-gray-600 text-sm">
          <div className="flex flex-row gap-2 items-center ">
            <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
            <p>{formattedDate}</p>
          </div>

          <div className="flex flex-row gap-2 items-center ">
            <Image src="/star.svg" width={20} height={20} alt="star" />
            <p className="font-medium text-blue-500">
              {feedback?.totalScore || "---"}/100
            </p>
          </div>
        </div>

        {/* Feedback or Placeholder Text */}
        <p className="line-clamp-3 mt-4 text-gray-700 text-center">
          {feedback?.finalAssessment ||
            "You haven't taken this interview yet. Start now and get instant AI feedback to improve your skills."}
        </p>

        {/* Footer Row */}
        <div className="flex flex-row justify-between items-center mt-6    ">
          <DisplayTechIcons techStack={techstack}  />

          <Button className="btn-primary  text-white bg-indigo-900 hover:bg-indigo-800  rounded-lg px-4 py-2">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
