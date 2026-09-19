import Link from "next/link";
import {
  LayoutDashboard,
  CalendarDays,
  FolderKanban,
  Plus,
  ExternalLink,
} from "lucide-react";

export default  async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-slate-200 px-6">
            <div>
              <h1 className="text-lg font-bold text-[#155E4B]">
                Youth&apos;s Voice
              </h1>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Dashboard
            </p>

            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>

            <p className="mb-3 mt-7 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Content
            </p>

            <Link
              href="/admin/events"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <CalendarDays className="h-5 w-5" />
              Events
            </Link>

            <Link
              href="/admin/events/new"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <Plus className="h-5 w-5" />
              Add Event
            </Link>

            <Link
              href="/admin/programs"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <FolderKanban className="h-5 w-5" />
              Programs
            </Link>

            <Link
              href="/admin/programs/new"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <Plus className="h-5 w-5" />
              Add Program
            </Link>
          </nav>

          {/* Bottom */}
          <div className="border-t border-slate-200 p-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#F8FAF9] hover:text-[#155E4B]"
            >
              <ExternalLink className="h-5 w-5" />
              View Website
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Admin Panel
            </h2>
            <p className="text-sm text-slate-500">
              Manage Youth&apos;s Voice content
            </p>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex"
          >
            <ExternalLink className="h-4 w-4" />
            Website
          </Link>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}