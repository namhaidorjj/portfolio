import React from 'react'

export const Header = () => {
  return (
    <div className="navigationBar">
    <div className="liftNav">
      <img src="/1.png" height={30} />
    </div>
    <div className="rightNav">
      <div className="sectionNav">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
      <div className="modeAndDownloud">
        <img class="w-6 h-6 items-center" src="/rem.png" width={36} />
        <p className="downButton">Download CV</p>
      </div>
    </div>
  </div>
  )
}
