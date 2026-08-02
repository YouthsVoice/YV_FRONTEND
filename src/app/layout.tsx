import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Youth's Voice - Let's create the revolution",
  description: "Youth powered social impact organisation working to create a fairer and more equitable society?",
  authors:[{name: "Md. Sajid Hossain",},{name:"Youth's Voice", url: "https://youthsvoice.org/"}],
  keywords:["youths voice", "youthsvoice", "youths voice organization", "youths voice ngo", "youths voice non-profit", "youths voice non-profit organization", "youths voice non-profit ngo", "youths voice non-profit organization ngo", "youths voice non-profit organization ngo in bangladesh", "youths voice non-profit organization ngo in bangladesh for education", "youths voice non-profit organization ngo in bangladesh for health", "youths voice non-profit organization ngo in bangladesh for families","youth volunteering organization bangladesh", "youth volunteering organization bangladesh for education", "youth volunteering organization bangladesh for health", "youth volunteering organization bangladesh for families", "youth volunteering organization bangladesh for children", "youth volunteering organization bangladesh for youth", "youth volunteering organization bangladesh for community development", "youth volunteering organization bangladesh for social development", "youth volunteering organization bangladesh for economic development", "youth volunteering organization bangladesh for environmental development","project chawnapiyaju", "fight against winter","menstrual hygiene management", "menstrual hygiene management bangladesh", "menstrual hygiene management ngo bangladesh", "menstrual hygiene management non-profit organization bangladesh", "menstrual hygiene management non-profit organization ngo bangladesh", "menstrual hygiene management" , "YV" ,"yv","ywf","YWF", "reel for red", "film festival" , "art exehibition"],
  icons:{
    icon:"/logo.svg"
  },
  metadataBase: new URL("https://youthsvoice.org" ),

  openGraph: {
    title: "Youth's Voice - Let's create the revolution",
    description: "A Non-profit organization working to support families, education, and health.",
    url:"https://youthsvoice.org",
    siteName:"Youth' Voice ",
    images:[{
      url : "/logo/og-image.png",
      width: 1200,
      height: 630,
      alt: "Youth's Voice - Let's create the revolution",

    }],
    type: "website",
  
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth's Voice - Let's create the revolution",
    description: "A Non-profit organization working to support families, education, and health.",
    images: ["/logo/og-image.png"],
    creator: "@youthsvoice",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}