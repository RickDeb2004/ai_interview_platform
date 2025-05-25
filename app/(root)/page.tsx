import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();
  if (!user?.id) {
    // Return early or show a login prompt if user is not authenticated
    return (
      <section className="flex justify-center items-center h-screen">
        <p>Please log in to see your interviews.</p>
      </section>
    );
  }
  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  const fallbackInterviews = [
    {
      id: "test-1",
      userId: user.id,
      interviewId: "test-1",
      role: "Frontend Developer",
      type: "technical",
      techstack: ["React", "Next.js", "TypeScript"],
      createdAt: new Date().toISOString(),
    },
    {
      id: "test-2",
      userId: user.id,
      interviewId: "test-2",
      role: "Backend Developer",
      type: "behavioral",
      techstack: ["Go", "MongoDB", "Redis"],
      createdAt: new Date().toISOString(),
    },
  ];

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;
  const upcomingToShow = hasUpcomingInterviews
    ? allInterview
    : fallbackInterviews;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      {/* <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section> */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {upcomingToShow?.map((interview) => (
            <InterviewCard
              key={interview.id}
              userId={user.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
