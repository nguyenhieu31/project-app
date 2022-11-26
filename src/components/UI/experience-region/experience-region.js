import styled from "styled-components";
const ExperienceRegionStyle = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #181818;
  &>.title{
    text-align: center;
    &>h3{
      font-size: 3rem;
      font-weight: bold;
      margin: 4rem 0 1.5rem 0;
    }
  }
  &>.experience-slider{
    display: flex;
    gap: 1rem;
    &>.card{
      width: calc(100%/3);
      &>.card-image>img{
        width: 100%;
        border-radius: 2rem;
      }
    }
  }
`
const ExperienceRegion = () => {
  const ListExperience = [
    {
      image: "https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Library-Sites-AutobahnSharedLibrary/default/dw0e1a0be6/images/pdp/PopGrip-Secure.png",
      content: "Enjoy a secure grip so you can text with one hand, snap better photos, and watch cat videos hands-free. Functions as a convenient stand so you can watch videos on the fly."
    },
    {
      image: "https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Library-Sites-AutobahnSharedLibrary/default/dwf3af6409/images/pdp/PopGrip-Swappable.png",
      content: "Easily swap your grip's top -- just close the grip flat, press down and twist 90 degrees. Then you can swap in a new top or wirelessly charge your phone."
    },
    {
      image: "https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Library-Sites-AutobahnSharedLibrary/default/dw35ad8bed/images/pdp/PopGrip-Mount.png",
      content: "Use your phone hands-free. Use with a car, desk, wall, or flex mount. Creating video content just got way easier."
    }
  ]
  return (
    <ExperienceRegionStyle className="experience-region">
      <div className="title">
        <h3>Meet PopGrip</h3>
      </div>
      <div className="experience-slider">
        {ListExperience.map((item, index) => {
          const { image, content } = item;
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={image} alt="" />
              </div>
              <div className="card-content">
                <p>{content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </ExperienceRegionStyle>
  )
}
export default ExperienceRegion;