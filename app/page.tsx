import Slide from "./components/Slide";

export default function Home() {
  const data = [
    {
      title: "ATHLETS",
      desktop_image: "graphic-desktop-1.svg",
      tablet_image: "graphic-tablet-1.svg",
      mobile_image: "graphic-mobile-1.svg",
      list: [
        {
          title: "CONNECTION",
          description:
            "Connect with coaches directly, you can ping coaches to view profile.",
        },
        {
          title: "COLLABORATION",
          description:
            "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
        },
        {
          title: "GROWTH",
          description:
            "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
        },
      ],
    },
    {
      title: "PLAYERS",
      desktop_image: "graphic-desktop-2.svg",
      tablet_image: "graphic-tablet-2.svg",
      mobile_image: "graphic-mobile-2.svg",
      list: [
        {
          title: "CONNECTION",
          description:
            "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
        },
        {
          title: "COLLABORATION",
          description:
            "Work with recruiter to increase your chances of finding talented athlete.",
        },
        {
          title: "GROWTH",
          description: "Save your time, recruit proper athlets for your team. ",
        },
      ],
    },
  ];
  return (
    <main className="flex h-screen overflow-x-hidden flex-col items-center justify-between ">
      {data.map((it, id) => (
        <Slide key={"slide" + id} {...it} />
      ))}
    </main>
  );
}
