
const Main = (props) => {
    const {image, locationHref, place, areaOfInterest, time, about} = props
    
  return (
    <main>
        <div className="card">
        <div>
        <img src={`${image}`} alt={place} />
      </div>
      <div>
        <div className="location">
          <img src={Location} alt="" />
          <p>{place}</p>
          <a href={locationHref}>
            View on Google Maps
          </a>
        </div>
        <h1>{areaOfInterest}</h1>
        <p className="strong">{time}</p>
        <p className="about">
            {about}
        </p>
      </div>
        </div>
      <hr />
    </main>
  );
};

export default Main;
