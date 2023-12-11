import React from "react";

export const MainText = () => {
  return (
    <div class="bg-gray-50 h-[962px] pt-24 pb-24">
      <div className="flex justify-center pb-[48px]">
        <p className="w-[105px] h-7 flex bg-gray-200 items-center justify-center rounded-xl">
          About me
        </p>
      </div>

      <div className="flex gap-12">
        <div className="w-[584px] h-[694px] ">
          <img className="w-[400px] h-[480px]" src="./text-img.png" />
        </div>
        <div className="w-[584px] h-[694px] flex flex-col gap-4">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div>
            <div className="flex">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
            </div>
            <div className="flex">
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
