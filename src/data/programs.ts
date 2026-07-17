import { Program } from "@/types/programs/program";

export const programs: Program[] = [
  {
    slug: "project-maya",

    title: "Project MAYA",

    tagline:
      "Breaking Stigma. Empowering Futures.",

    category: "Menstrual Health",

    coverImage: "/programs/maya-cover.jpg",

overview:{
title:"Creating Awareness Through Education",

subtitle:"Empowering young people with knowledge and confidence.",

description:[

"Project MAYA was launched to address the lack of menstrual health education among adolescents and to challenge harmful stigma surrounding menstruation.",

"Through school workshops, community engagement, and youth-led advocacy, the program creates safe spaces where participants can learn, ask questions, and become advocates within their own communities.",

"Our long-term goal is to ensure that every young person has access to accurate information, dignity, and equal opportunities regardless of gender."

],

image:"/programs/maya-overview.jpg"
},

    objectives: [
      "Increase awareness",
      "Reduce stigma",
      "Improve access to information",
      "Build youth leadership",
    ],

    metrics: [
      {
        label: "Beneficiaries",
        value: "20,000+",
      },

      {
        label: "Sessions",
        value: "150+",
      },

      {
        label: "Volunteers",
        value: "500+",
      },
    ],

    gallery: [
      "/gallery/maya-1.jpg",
      "/gallery/maya-2.jpg",
      "/gallery/maya-3.jpg",
      "/gallery/maya-4.jpg",
    ],

    stories: [
      {
        name: "Ayesha",

        image: "/stories/ayesha.jpg",

        quote:
          "This program gave me confidence to talk openly about menstrual health.",
      },
    ],
  },
];