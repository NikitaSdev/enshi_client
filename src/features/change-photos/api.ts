"use client";

import $api from "@/configs/axios.config";

class UploadService {
  public async upload(file: File, folder?: string) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await $api.post<{ url: string; name: string }[]>(
      `/file`,
      formData,
      {
        params: { folder },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
}

export const uploadService = new UploadService();
