import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { image1, image2, image3, image4 } from "./images/images";

function App() {
  const slideImages = [
    {
      url: image1,
      caption: "Slide 1",
    },
    {
      url: image2,
      caption: "Slide 2",
    },
    {
      url: image3,
      caption: "Slide 3",
    },
    {
      url: image4,
      caption: "Slide 4",
    },
  ];
  return (
    <div className="container">
      <div className="slide-container">
        <Slide>
          {slideImages.map((image, index) => (
            <div className="each-fade" key={index}>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${image.url})`,
                  height: "500px",
                  width: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <span>{image.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default App;
