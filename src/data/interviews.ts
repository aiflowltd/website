export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface Interview {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  caseStudyId: string;
  date: string;
  image: string;
  introduction: string;
  questions: InterviewQuestion[];
}

export const interviews: Record<string, Interview> = {
  "josua-exomatter": {
    id: "josua-exomatter",
    clientName: "Josua",
    clientRole: "CEO",
    clientCompany: "ExoMatter",
    caseStudyId: "exomatter-automl",
    date: "November 2024",
    image: "/images/interviews/josua-exomatter.jpg", // Placeholder
    introduction:
      "We spoke with Josua, CEO of ExoMatter, about their experience implementing AutoML for materials science property prediction and how it transformed their model development process.",
    questions: [
      {
        question: "Can you tell me a bit about ExoMatter?",
        answer:
          "ExoMatter is a company that deals with materials development and computation, we help companies find the right material for the specific applications, so we replace a lot of trial and error in the lab with data. That's something we do across different industries, so it's not limited to one specific type of material, and we can calculate new materials from scratch that didn't exist yet. AI has a key role in growing the business. One thing is doing simulations and using the data that is there, but those simulations are computationally expensive, so it makes sense to use ML to predict some properties. Also some of those properties are not accessible in any other way, so we use ML to fill in the gaps. What we have been doing so far is that we've done some experiments building our own ML models; we have either used models that already exist, but we've also built our own models, and it took quite some time, to build them, structuring the data, and finding out what algorithm to use and what features are important. That's why we thought AutoML could have been a good solution.",
      },
      {
        question:
          "How did we start working and what was the process for choosing a vendor for the ML MVP?",
        answer:
          "We knew each other before, we knew what your capabilities are. I had the feeling that you could get things done quickly. We had to get quotations from other agencies for this project, but in the end yours was the most convincing. You already had some ideas on what to do, so that was quite an easy decision.",
      },
      {
        question: "How would you describe the collaboration in a remote setting?",
        answer:
          "I would say it was quite efficient. We first had to get a standing on the project matter, as chemistry is not something someone deals with everyday, so we had to spend some time in the beginning, and then we did regular calls when something was ready. I think it was quite easy to collaborate, especially also given that I didn't have too much time. I trusted you to give a good result, and that's what happened. It was good.",
      },
      {
        question: "What is your feedback on our communication?",
        answer:
          "I think it was great. Also, the documentation you did was good, so not really much to improve on that.",
      },
      {
        question:
          "In the first few weeks we got the MVP working. What do you think about the tradeoff between cost, speed and quality of AutoML models?",
        answer:
          "That's great, it was exactly what we were hoping to see. It was a pilot project, and the goal was to see if it would work or not. It could have been that it didn't work with the data we were using. The models we built before took 3-4 months to build (for one model). Now we have this AutoML pipeline where we don't have to do much, it trains overnight, that we tested on 2 datasets, and the results were at least as good as previous results. I'm quite happy with those results.",
      },
      {
        question: "How did the project budget work out?",
        answer:
          "I could not have wished for anything better, because it was really within the budget that we originally planned. In my head I always had some buffer, because we had more budget than we contracted, just to make sure in case something goes wrong we can still do it, but we did not need that kind of buffer. So in the end we used it to explore some more options to improve the data quality, which we didn't plan originally. I'm quite happy with that.",
      },
      {
        question:
          "Would you recommend our services for other similar companies and what would be the reason?",
        answer:
          "Yes, definitely. I would recommend you if someone needs short term support in AI projects. We've not gone beyond this AI use case, but I'm sure you can handle other things.",
      },
    ],
  },
  "deinestudienfinanzierung": {
    id: "deinestudienfinanzierung",
    clientName: "CTO",
    clientRole: "CTO",
    clientCompany: "deineStudienfinanzierung",
    caseStudyId: "student-financing-platform",
    date: "November 2024",
    image: "/images/interviews/deinestudienfinanzierung.jpg", // Placeholder
    introduction:
      "We spoke with the CTO of deineStudienfinanzierung about their experience rebuilding their student financing platform from the ground up with modern technologies and how the collaboration transformed their development process.",
    questions: [
      {
        question: "Can you tell us about your company, StudyFinancing?",
        answer:
          "We are a web platform for students to explore financing options for their studies. Our main focus is on providing an online application flow for the student loan of KfW, a German state-owned investment and development bank. Over our 5-year existence, we've evolved, adding and removing features. We recognized that we need to update due to deprecated technologies and changes in our product scope, and decided on a complete rewrite of our platform, aiming for a leaner, more focused product.",
      },
      {
        question: "Why did you choose to work with our agency?",
        answer:
          "We wanted to achieve budget flexibility, which led us to seek freelancers, and you stood out during our search. We were impressed by your focus on backend and infrastructure and your approach to using modern technologies. As we wanted two freelancers, we were looking for a good combination and you really seemed to be a good fit. The decision was clear after our initial discussions, where you made a good impression when we talked and demonstrated impressive technical understanding and a clear vision of how to achieve our goals.",
      },
      {
        question:
          'Back when we started, all we had was a diagram and the question "how would you build this?". How would you describe the process from 0 to the MVP?',
        answer:
          "Having an established product meant we knew what we needed, but we wanted to have a clean view on things, so that we don't just reimplement what we already had, but that we really make sure we think about it again and look into the best practices for the solution. We focused initially on foundational work, establishing libraries, frameworks, and tools, including NextJS, Apollo, React, and Prisma. The early weeks were spent setting up the database, app, and storage structures. Once the foundation was laid, we moved to developing the APIs, backend logic, and UI, integrating third-party APIs for data handling and working closely with your team to incrementally complete the flow.",
      },
      {
        question: "How was communication managed in a fully remote setting?",
        answer:
          "We utilized Slack, Meet, Jira, and GitHub for communication and project management. Our initial phase included more detailed meetings for decision-making, then we transitioned to daily standups for quick sync-ups but we really tried to keep the meetings at a minimum so that we can all focus on developing. I think that worked very well, we managed to clarify most of the things though github, code reviews, through jira ticket comments, and, if necessary, Slack. But we barely had additional meeting on top. That made it possible that everybody worked in their own schedule. We made sure we had touchpoints, that we were available, but the work setup allowed everybody to work in their hours.",
      },
      {
        question: "What was the weekly meeting time?",
        answer:
          "We had 15 minutes standups, which mostly were not that long, and from time to time we had more things to discuss, but not more than 1 or 2 hours on average a week.",
      },
      {
        question: "How did the product scale after launching the MVP?",
        answer:
          "It worked well from day 1. We went live in the beginning of a critical phase, when many students come to our platform to submit their semester study certificates, which is a regular process that students have to do every half year. We were expecting relatively low traffic so that we can monitor that everything goes well, and that we could also switch back to the old platform if necessary, but we never had to use it. The user base is steadily growing. The platform has been stably running since day 1.",
      },
      {
        question:
          "As a developer yourself, how do you find the coding experience on the new platform?",
        answer:
          "It's very good. I am super happy with how well built the foundation is. I felt like it's more or less plug and play, to bring all the pieces we already had together. It's really easy to build more complex flows now based on the foundation we built.",
      },
      {
        question:
          "What advice do you have for others looking for a software agency?",
        answer:
          "We tried to find a good match in the beginning. We knew exactly what we needed and what we wanted to achieve, and we had a clear view on what external resources we need. It was a pretty good decision to not have just generic developers, but experts in those 2 specific fields (backend and frontend), that are decision makers. I really had the confidence to trust in you to make the right decision. The confidence you give, your ideas and suggestions made me feel this is something I could trust.",
      },
      {
        question: "Why would you recommend us to other customers?",
        answer:
          "Competence, confidence, communication skills, it was always very clear to communicate with you. You are very well structured, you made sure whatever we discussed was properly documented in Jira, Github. It was very nice for me, because I didn't feel like I had to manage the project and you would just do the tasks I assign to you, but you really figured out ways of what you should do, how you should do it and this was something I was really happy about. It was not my sole responsibility of knowing what to do and how to do it. You were proactive to do those things, which I really liked. From a tech perspective, you proved that you really know, you have a lot of experience how to set up things, how to scale things, and to make the right decision. I wouldn't doubt any technical decision that we have made in the last months.",
      },
    ],
  },
};

export const interviewsArray = Object.values(interviews);

export const getInterview = (id: string): Interview | undefined => {
  return interviews[id];
};

