export default function Page() {
  return (
    <main className={"h-full grid grid-cols-4 grid-rows-3"}>
      <div className={"border col-span-2 row-span-2 bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border col-span-2 bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border col-span-2 bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border bg-[url('/assets/nyp.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
      <div className={"border bg-[url('/assets/bee.jpg')] bg-cover"}>
        <div className={"h-full transition cursor-pointer hover:backdrop-blur-sm"}>Event</div>
      </div>
    </main>
  );
}