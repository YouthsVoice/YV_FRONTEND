"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, TextField } from "@mui/material";
import { motion } from "framer-motion";

const sections = ["home", "updates", "contact"];

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 🔹 Scroll spy to highlight active section
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.getBoundingClientRect().top;
          if (offset < window.innerHeight / 2) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* HEADER */}
      <AppBar position="sticky" sx={{ background: "#0F0F0F" }}>
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="font-bold">Hack to Hire</Typography>
          <div className="space-x-6">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item ? "text-purple-400" : "text-white"
                } hover:text-purple-400 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full after:mt-1`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Hack to Hire Coding Fest
        </motion.h1>
        <p className="mt-6 text-lg text-gray-300">Code the Future | Voice the Change</p>
        <Button
          variant="contained"
          sx={{ mt: 4, background: "linear-gradient(90deg,#8B5CF6,#6366F1)" }}
          onClick={() => scrollTo("updates")}
        >
          See Updates
        </Button>
      </section>

      {/* UPDATES SECTION */}
      <section id="updates" className="py-20 bg-[#161616]">
        <Container className="text-center">
          <Typography variant="h4" className="mb-10 font-bold">
            Latest Updates
          </Typography>
          <p className="text-gray-400 mb-6">
            Follow <span className="text-purple-400 font-semibold">#codeforyv</span> on Facebook
            to see all the latest posts and updates shared by the community.
          </p>
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(90deg,#8B5CF6,#6366F1)" }}
            href="https://www.facebook.com/hashtag/codeforyv"
            target="_blank"
          >
            View Hashtag on Facebook →
          </Button>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <Container className="max-w-2xl text-center">
          <Typography variant="h4" className="mb-6 font-bold">Contact Us</Typography>
          <form className="space-y-6">
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ background: "linear-gradient(90deg,#8B5CF6,#6366F1)" }}
            >
              Send Message
            </Button>
          </form>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Youth&apos;s Voice | Powered by Career Hacks
      </footer>
    </div>
  );
};

export default LandingPage;
