import React from "react";
import StudyPage from "@/app/archive/study/page";
import VolunteerPage from "@/app/archive/volunteer/page";
import AuPairPage from "@/app/archive/aupair/page";
import WorkPage from "@/app/archive/work/page";
import ImmigrationPage from "@/app/archive/immigration/page";

export type ArchiveEntry = {
  slug: string;
  title: string;
  description: string;
  Component: () => React.JSX.Element;
};

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "study",
    title: "留学咨询",
    description: "旧版留学咨询内容归档，已停止更新。",
    Component: StudyPage,
  },
  {
    slug: "volunteer",
    title: "国际志愿者",
    description: "旧版国际志愿者内容归档，已停止更新。",
    Component: VolunteerPage,
  },
  {
    slug: "aupair",
    title: "互惠生",
    description: "旧版互惠生内容归档，已停止更新。",
    Component: AuPairPage,
  },
  {
    slug: "work",
    title: "出国工作",
    description: "旧版出国工作内容归档，已停止更新。",
    Component: WorkPage,
  },
  {
    slug: "immigration",
    title: "移民",
    description: "旧版移民内容归档，已停止更新。",
    Component: ImmigrationPage,
  },
];

export const archiveEntryMap = new Map(
  archiveEntries.map((entry) => [entry.slug, entry])
);
