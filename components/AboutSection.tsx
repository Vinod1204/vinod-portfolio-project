import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "AWS" },
  { skill: "DevOps" },
  { skill: "MERN Stack" },
  { skill: "Jenkins" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "SQL" },
  { skill: "Akamai" },
  { skill: "Linux" },
  { skill: "System Design" },
  { skill: "Shell Scripting/Perl/Bash" },
  { skill: "Data structures and Algorithms" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Vinod and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Chennai, India
            </p>
            <br />
            <p>
              I graduated from Mepco Schlenk Engineering College, Tamil Nadu in 2022
              with a BE in Mechanical with Diversification in Data Science and have been working in the
              field ever since.
            </p>
            <br />
            <p>
            With a strong foundation in Data Structures and Algorithms, I have successfully solved over 700 complex coding challenges, showcasing my problem-solving abilities and technical proficiency.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/background-picture2.jpg"
              alt=""
              width={450}
              height={425}
              className="hidden md:block md:relative md:top-5 md:bottom-0 md:left-15 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
