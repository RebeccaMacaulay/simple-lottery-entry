import type { ReactNode } from "react";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import { HallHeader } from "@/components/HallHeader";
import { SideColumnNav } from "@/components/SideColumnNav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69cb45e4a7654b8774320f2c" />
        <meta
          name="talentapp:project_verification"
          content="bdfc81907c33e7fa480ec5415e31fd2cc509382c1b23e4d48db566bb8a9af1e303fa5dd94479b55f15e5cb9e1977a6ef039858639537c4fbb1e91ba3b91e5410"
        />
        <title>simple-lottery-entry</title>
        <meta
          name="description"
          content="A Base mini app for elegant one-time lottery registration."
        />
      </head>
      <body>
        <AppProviders>
          <div className="app-shell">
            <div className="app-frame">
              <HallHeader />
              <div className="desktop-shell">
                <aside className="side-column">
                  <SideColumnNav />
                </aside>
                <main className="main-stage">{children}</main>
              </div>
            </div>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}


