import { ServiceWorkerRegister } from "@/shared/service-worker";
import type { Metadata } from "next";
import { AuthProvider } from "@/providers/auth-provider";
import { ColorModeProvider } from "@/shared/context/color-mode";
import { Footer } from "@/widgets/footer";
import { NavBar } from "@/widgets/navbar";
import { PalleteTheme } from "@/assets/pallete-theme";
import { Wrapper } from "@/shared/containers/root-wrapper";
import { StylesProvider } from "@/providers/styles-provider";
import { TanstackProvider } from "@/providers/tanstack-provider";
import NextTopLoader from "nextjs-toploader";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Enshi.",
  description:
    "Enshi. — это бесплатный сайт по просмотру аниме который может похвастаться простым и привлекательным интерфейсом, удобным фильтром который поможет найти аниме по вашему вкусу! Смотри аниме с любимой озвучкой на Enshi.",
  keywords: [
    "аниме",
    "фильмы",
    "онлайн сервис",
    "просмотр",
    "видео",
    "энши",
    "Enshi",
    "смотреть аниме",
    "аниме онлайн",
    "топ аниме",
  ],
};

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--montserrat-font",
  display: "swap",
});

export const aqum = localFont({
  weight: "700",
  variable: "--font-aqum",
  src: "../../public/fonts/Aqum.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Script
        id={"yandex-metrika"}
        async
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(93902630, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
        }}
      />
      <body className={`${aqum.variable} ${montserrat.variable}`}>
        <NextTopLoader color="#8C53FD" />
        <ServiceWorkerRegister />
        <TanstackProvider>
          <AuthProvider>
            <ColorModeProvider>
              <PalleteTheme>
                <StylesProvider>
                  <Wrapper>
                    <NavBar />
                    {children}
                    <Footer />
                  </Wrapper>
                </StylesProvider>
              </PalleteTheme>
            </ColorModeProvider>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
