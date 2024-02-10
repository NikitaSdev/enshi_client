"use server";
import prisma from "@/configs/prisma.config";
import { FilterType } from "@/features/anime-filter/types";
export const getGenreFilters = async () => {
  const genres = await prisma.genre.findMany();
  return genres.map((genre) => ({
    id: genre.id,
    title: genre.title,
  })) as FilterType[];
};
