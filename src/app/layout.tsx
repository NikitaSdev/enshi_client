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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
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
