import React from 'react'

export const Main = () => {
  return (
    <div className="mainDiscription">
          <div class=" flex flex-col gap-10">
            <div>
              <h1 className="titleText">Hi, I’m Sagar 👋</h1>
              <p className="praText">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div class="flex flex-col gap-y-1 ">
              <p class="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Ahmedabad, India
              </p>
              <div class="flex gap-2 items-center">
                <div className="w-6 h-6  flex items-center justify-center">
                  <p class="w-2 h-2 flex rounded-2xl bg-green-400 flex  "></p>
                </div>
                Available for new projects
              </div>
            </div>
            <div class="flex flex-row  gap-4 ">
              <img src="/git.png" />
              <img src="/x.png" />
              <img src="/fgn.png" />
            </div>
            <div></div>
          </div>
          <div className="photo">
            <img src="/12.png" className="indiaBro" />
          </div>
        </div>
  )
}
