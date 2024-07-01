import { FeaturedProjectCard } from "./featured-project";

export function FeaturedProjectsGrid() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <FeaturedProjectCard
        project={{
          description: "iurwyhfgr",
          id: "oifwrjufier",
          name: "ofruiefher",
          picture: "ufirferiufh",
          featured: true,
        }}
      />
      <FeaturedProjectCard
        project={{
          description: "iurwyhfgr",
          id: "oifwrjufier",
          name: "ofruiefher",
          picture: "ufirferiufh",
          featured: true,
        }}
      />
    </div>
  );
}
