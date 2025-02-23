import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const courses = [
  {
    title: "Code Editor (Visual Studio Code)",
    description:
        "Leverage Visual Studio Code for efficient code writing, debugging, and project management.",
  },
  {
    title: "Git & GitHub",
    description:
        "Master the basics of Git for version control and GitHub for seamless collaboration and code management.",
  },
  {
    title: "HTML, CSS & JavaScript",
    description:
        "Build interactive front-end experiences by learning the fundamentals of web development with HTML, CSS, and JavaScript.",
  },
  {
    title: "CSS Framework (Bootstrap)",
    description:
        "Implement responsive design and consistent styling using Bootstrap to streamline front-end development.",
  },
  {
    title: "JavaScript Framework (ReactJS)",
    description:
        "Develop dynamic single-page applications with ReactJS for efficient, component-based front-end solutions.",
  },
  {
    title: "MongoDB",
    description:
        "Create scalable backend architectures by storing and querying data with MongoDB.",
  },
  {
    title: "Debugging with Chrome DevTools",
    description:
        "Identify and resolve issues in real-time using Google Chrome’s Developer Tools for debugging and performance analysis.",
  },
  {
    title: "APIs & Internet Fundamentals",
    description:
        "Understand the basics of networking, the internet, and APIs to grasp how data flows and is accessed online.",
  },
  {
    title: "Backend as a Service",
    description:
        "Authenticate users, store data, and manage file uploads in a web app using MongoDB and Express for a streamlined backend approach.",
  },
  {
    title: "Website Deployment",
    description:
        "Learn to host and deploy web applications to the internet, ensuring accessibility and scalability.",
  },
  {
    title: "Collaboration & Teamwork",
    description:
        "Work effectively in diverse teams by practicing clear communication, version control, and group problem-solving.",
  },
  {
    title: "Hands-On Project Building",
    description:
        "Apply classroom knowledge to real-world scenarios by designing, developing, and deploying a complete project.",
  },
];

export const Certifications = (props: Props) => {
  return (
      <div className="container max-w-5xl">
        <div className="relative border border-border rounded-lg py-16 px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-5xl font-bold whitespace-pre-line">
              I_Xperience <br /> Software Engineering
            </h2>
            <Image
                src={"/iX_Main_Logo_White.svg"}
                width={200}
                height={60}
                alt="I_Xperience logo"
            />
          </div>
          <p className="text-muted-foreground flex items-center gap-2">
            Issue Date: 7 February, 2025{" "}
            <Link
                className="text-blue-900 hover:text-blue-800 underline transition duration-300"
                href="https://www.beeline.life/organization/ixperience/learn/ix-summer-2024-software-engineering-session-2-byron-e3cf7/certificate/6027/"
            >
              Click to verify
            </Link>
          </p>
          <h3 className="mt-10 text-lg font-medium">What I learnt</h3>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            {courses.map((course, index) => (
                <li key={index}>
                  <h4 className="text-base font-medium">{course.title}</h4>
                  <p className="mt-2 text-sm font-light text-muted-foreground">
                    {course.description}
                  </p>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};
