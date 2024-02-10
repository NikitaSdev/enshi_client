"use server";

import { MainContainer } from "@/shared/containers/main-container";
import { ChangeCredentials } from "@/widgets/change-credentials";

export const SettingsPage = () => {
  return (
    <MainContainer>
      <main>
        <ChangeCredentials />
      </main>
    </MainContainer>
  );
};
