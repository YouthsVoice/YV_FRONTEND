import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <Image src="/logo/YV_White.webp" alt="YV LOGO" width={400} height={100} />

            <p className="mt-4 text-white/80">
              Empowering youth and building
              stronger communities across
              Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Organization
            </h4>

            <div className="space-y-2 flex flex-col">
              <Link href="/about">About</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/impact">Impact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Get Involved
            </h4>

            <div className="space-y-2 flex flex-col">
              <Link href="/volunteer">Volunteer</Link>
              <Link href="/events">Events</Link>
              <Link href="/donate">Donate</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>yvfinfo@gmail.com</p>
            <p>Bangladesh</p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Youth&apos;s Voice.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}