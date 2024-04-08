const Activities = () => {
    return ( 
    <section className="w-full py-12 md:py-16 xl:py-20">
        <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Activities</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              To inspire and educate the next generation of student entrepreneurs, providing them with the skills,
              resources, and network to launch and grow successful startups.
            </p>
          </div>
          <img
            alt="Team"
            className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/placeholder.svg"
            width="600"
          />
        </div>
      </section>
     );
}
 
export default Activities;