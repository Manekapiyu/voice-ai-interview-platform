import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="card-cta flex flex-col md:flex-row items-center justify-between gap-8 p-6 rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col gap-6 max-w-lg animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-200">
  Ace Your Next Job Interview with AI Coaching
</h2>
<p className="text-lg text-gray-500">
  Practice industry-specific questions, improve your confidence, and get instant
  AI-powered feedback to sharpen your answers.
</p>

          <Button asChild className="btn-primary max-sm:w-full transition-transform duration-300 hover:scale-105">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.jpg"
          alt="robo-dude"
          width={400}
          height={400}
          className="rounded-2xl border-4 border-indigo-950 shadow-xl hover:scale-105 transition-transform duration-500 animate-fadeInUp max-sm:hidden"
        />
      </section>
    
{/* About Us Section */}
<section className="mt-2 py-18 px-6">
  <div className="container mx-auto flex flex-col items-center text-center max-w-4xl">
    <h2 className="text-4xl font-extrabold text-gray-200 mb-3">
      About <span className="text-indigo-600">AI Interview Prep</span>
    </h2>
    <p className="text-gray-500 text-lg mb-12">
      Smarter interview prep with AI-powered practice and instant feedback —  
      build confidence and land your dream job.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
      <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
        <Image src="/mission.svg" alt="mission" width={60} height={70} className="mx-auto mb-3"/>
        <h3 className="text-lg font-semibold text-blue-800 mb-1">Mission</h3>
        <p className="text-gray-600 text-sm">Make interview prep easy, effective, and confidence-boosting.</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
        <Image src="/innovation.svg" alt="innovation" width={60} height={70} className="mx-auto mb-3"/>
        <h3 className="text-lg font-semibold text-blue-800 mb-1">Approach</h3>
        <p className="text-gray-900 text-sm">AI-driven simulations and instant personalized feedback.</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
        <Image src="/growth.svg" alt="growth" width={60} height={70} className="mx-auto mb-3"/>
        <h3 className="text-lg font-semibold text-blue-800 mb-1">Vision</h3>
        <p className="text-gray-600 text-sm">Empower everyone to succeed in interviews and careers.</p>
      </div>

      <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
        <Image src="/values.svg" alt="values" width={60} height={70} className="mx-auto mb-3"/>
        <h3 className="text-lg font-semibold text-blue-800 mb-1">Values</h3>
        <p className="text-gray-600 text-sm">Commitment to integrity, learning, and helping users succeed.</p>
      </div>
    </div>
  </div>
</section>



      {/* Your Interviews Section */}
      <section className="flex flex-col gap-6 mt-1 ">
        <h2 className="text-2xl font-semibold">Your Interviews</h2>
        <div className="interviews-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyInterviews.map((interview) => (
            <div
              key={interview.id}
              className="transform hover:scale-105 transition duration-300 animate-fadeInUp"
            >
              <InterviewCard {...interview} />
            </div>
          ))}
        </div>
      </section>

      {/* Take an Interview Section */}
      <section className="flex flex-col gap-6 mt-12">
        <h2 className="text-2xl font-semibold">Take an Interview</h2>
        <div className="interviews-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyInterviews.map((interview) => (
            <div
              key={interview.id}
              className="transform hover:scale-105 transition duration-300 animate-fadeInUp"
            >
              <InterviewCard {...interview} />
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
};

export default Home;
