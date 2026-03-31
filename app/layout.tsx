import type { ReactNode } from "react";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import { HallHeader } from "@/components/HallHeader";
import { SideColumnNav } from "@/components/SideColumnNav";
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_OG_IMAGE,
  APP_TITLE,
  APP_URL,
  BASE_APP_ID,
  TALENT_VERIFICATION,
  miniAppEmbed,
} from "@/lib/app-config";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={BASE_APP_ID} />
        <meta name="talentapp:project_verification" content={TALENT_VERIFICATION} />
        <meta name="fc:miniapp" content={JSON.stringify(miniAppEmbed)} />
        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content={APP_OG_IMAGE} />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP_TITLE} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content={APP_OG_IMAGE} />
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
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
