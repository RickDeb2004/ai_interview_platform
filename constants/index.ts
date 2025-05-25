import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];


// export const generator = {
//   name: "interview_flow",
//   nodes: [
//     {
//       name: "start",
//       type: "conversation",
//       isStart: true,
//       metadata: {
//         position: { x: 25.578143123445045, y: -112.6147408625659 },
//       },
//       prompt: "Ask users what kind about what voice agent they want to build",
//       voice: {
//         model: "aura-2",
//         voiceId: "thalia",
//         provider: "deepgram",
//       },
//       variableExtractionPlan: {
//         output: [
//           {
//             enum: [],
//             type: "string",
//             title: "role",
//             description: "What role would you like to train for ? ",
//           },
//           {
//             enum: [],
//             type: "string",
//             title: "type",
//             description: "Are you aiming for a technical, behavioral or mixed interview?",
//           },
//           {
//             enum: [],
//             type: "string",
//             title: "level",
//             description: "The job experience level.",
//           },
//           {
//             enum: [],
//             type: "string",
//             title: "techstack",
//             description:
//               "A list of technologies to cover during job interview. For example, React,Next.js, Express.js , Node and so on...",
//           },
//           {
//             enum: [],
//             type: "number",
//             title: "amount",
//             description: "How many questions would you like to generate?",
//           },
//         ],
//       },
//       messagePlan: { firstMessage: "Hey there!" },
//     },
//     {
//       name: "conversation_1",
//       type: "conversation",
//       metadata: { position: { x: 27.050514221191406, y: 284.3015785217285 } },
//       prompt: "Say that the interview will be generated shortly.",
//       voice: {
//         model: "aura-2",
//         voiceId: "thalia",
//         provider: "deepgram",
//       },
//       variableExtractionPlan: { output: [] },
//     },
//     {
//       name: "hangup_1747512399374",
//       type: "hangup",
//       metadata: { position: { x: -928.1252642303392, y: 1565.318271074339 } },
//       messagePlan: { firstMessage: "" },
//     },
//     {
//       name: "apiRequest_1747896543866",
//       type: "apiRequest",
//       metadata: { position: { x: 29.067490751886737, y: 680.6636417357101 } },
//       method: "POST",
//       url: "https://ai-interview-platform-umber.vercel.app/api/vapi/generate",
//       headers: {
//         type: "object",
//         properties: {},
//       },
//       body: {
//         type: "object",
//         properties: {
//           role: { type: "string", value: "{{role}}", description: "" },
//           type: { type: "string", value: "{{type}}", description: "" },
//           level: { type: "string", value: "{{level}}", description: "" },
//           amount: { type: "string", value: "{{amount}}", description: "" },
//           userid: { type: "string", value: "{{userid}}", description: "" },
//           techstack: { type: "string", value: "{{techstack}}", description: "" },
//         },
//       },
//       output: {
//         type: "object",
//         properties: {},
//       },
//       mode: "blocking",
//       hooks: [],
//     },
//     {
//       name: "conversation_1747897459633",
//       type: "conversation",
//       metadata: { position: { x: 33.20663083878412, y: 1030.0199800846597 } },
//       prompt:
//         "Thank the user for the conversation and inform them that the interview has been generated successfully.",
//     },
//     {
//       name: "hangup_1747897572696",
//       type: "hangup",
//       metadata: { position: { x: 123.28701487108049, y: 1503.5194651005288 } },
//     },
//   ],
//   edges: [
//     {
//       from: "start",
//       to: "conversation_1",
//       condition: { type: "ai", prompt: "" },
//     },
//     {
//       from: "conversation_1",
//       to: "apiRequest_1747896543866",
//       condition: { type: "ai", prompt: "" },
//     },
//     {
//       from: "apiRequest_1747896543866",
//       to: "conversation_1747897459633",
//       condition: { type: "ai", prompt: "" },
//     },
//     {
//       from: "conversation_1747897459633",
//       to: "hangup_1747897572696",
//       condition: { type: "ai", prompt: "" },
//     },
//   ],
//   model: {
//     model: "gpt-4o",
//     provider: "openai",
//     temperature: 0.7,
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a voice assistant helping with creating new AI interviewers . Your task is to collect data from the user. Remember that this is a voice conversation -do not use any special characters.",
//       },
//     ],
//   },
// };


export const generator = {
  name: "interview_flow",
  nodes: [
    {
      name: "start",
      type: "conversation",
      isStart: true,
      metadata: {
        position: {
          x:  25.578143123445045,
          y:  -112.6147408625659,
        },
      },
      prompt:
        "Ask users what kind about what voice agent they want to build",
      voice: {
        model: "aura-2",
        voiceId: "thalia",
        provider: "deepgram",
      },
      variableExtractionPlan: {
        output: [
          {
            title: "level",
            description: "The job experience level.",
            type: "string",
            enum: [],
          },
          {
            title: "amount",
            description: "How many questions would you like to generate?",
            type: "number",
            enum: [],
          },
          {
            title: "techstack",
            description:
              "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on...",
            type: "string",
            enum: [],
          },
          {
            title: "role",
            description:
              "What role should would you like to train for? ",
            type: "string",
            enum: [],
          },
          {
            title: "type",
            description: "Are you aiming for a technical, behavioral or mixed interview? ",
            type: "string",
            enum: [],
          },
        ],
      },
    },
    {
      name: "apiRequest_1747896543866",
      type: "apiRequest",
      metadata: {
        position: {
          x:  29.067490751886737,
          y:  680.6636417357101,
        },
      },
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
      headers: {
        type: "object",
        properties: {},
      },
      body: {
        type: "object",
        properties: {
          role: {
            type: "string",
            description: "",
            value: "{{ role }}",
          },
          level: {
            type: "string",
            description: "",
            value: "{{ level }}",
          },
          type: {
            type: "string",
            description: "",
            value: "{{ type }}",
          },
          amount: {
            type: "number",
            description: "",
            value: "{{ amount }}",
          },
          userid: {
            type: "string",
            description: "",
            value: "{{ userid }}",
          },
          techstack: {
            type: "string",
            description: "",
            value: "{{ techstack }}",
          },
        },
      },
      output: {
        type: "object",
        properties: {},
      },
      mode: "blocking",
      hooks: [],
    },
    {
      name: "conversation_1747897459633",
      type: "conversation",
      metadata: {
        position: {
          x: 33.20663083878412,
          y: 1030.0199800846597,
        },
      },
      prompt:
        "Thank the user for the conversation and inform them that the interview was generated successfully.",
      voice: {
        provider: "deepgram",
        voiceId: "thalia",
        model: "aura-2",
      },
    },
    {
      name: "conversation_1747744490967",
      type: "conversation",
      metadata: {
        position: {
          x: -11.165436030430953,
          y: 484.94857971060617,
        },
      },
      prompt: "Say that the Interview will be generated shortly.",
      voice: {
        provider: "deepgram",
        voiceId: "thalia",
        model: "aura-2",
      },
    },
    {
      name: "hangup_1747897572696",
      type: "hangup",
      metadata: {
        position: {
          x: 123.28701487108049,
          y: 1503.5194651005288,
        },
      },
    },
  ],
  edges: [
    {
      from: "apiRequest_1747896543866",
      to: "conversation_1747897459633",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
    {
      from: "start",
      to: "conversation_1",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
    {
      from: "conversation_1",
      to: "apiRequest_1747896543866",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
    {
      from: "conversation_1747897459633",
      to: "hangup_1747897572696",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
  ],
};
