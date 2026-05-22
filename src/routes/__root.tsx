import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-forest px-4 text-white">
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="relative max-w-lg text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Off the trail</p>
        <h1 className="mt-3 font-display text-7xl font-bold md:text-9xl">404</h1>
        <h2 className="mt-2 font-display text-2xl">You've wandered off the map</h2>
        <p className="mt-3 text-sm text-white/70">
          Let's get you back to base camp — adventure is calling.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105">Back home</Link>
          <Link to="/adventures" className="rounded-full glass px-6 py-3 text-sm font-semibold">See adventures</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Try again</button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ricky Events — Tours & Travel | Curated Kenyan Adventures" },
      { name: "description", content: "Premium Kenyan adventures: hikes, cycling, camping, road trips and community escapes. Sit, we will set." },
      { name: "author", content: "Ricky Events" },
      { property: "og:title", content: "Ricky Events Tours & Travel" },
      { property: "og:description", content: "Curated experiences. Unforgettable memories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
