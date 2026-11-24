import { useEffect, useState } from "react";

import assetPath from "../utils/assetPath";

const categories = [
  {
    title: "Team",
    description: "The people behind Gear Shift.",
    images: [
      {
        src:  assetPath("/images/team/team-with-robot.jpg"),
        caption: "Gear Shift team with our robot"
      }
    ]
  },
  {
    title: "Robot",
    description: "Our robot's design and development.",
    images: [
      {
        src: assetPath("/images/robot/robot-cad-render.png"),
        caption: "Robot CAD render"
      },
      {
        src: assetPath("/images/robot/robot-assembled-on-workbench.jpg"),
        caption: "Robot assembly"
      },
      {
        src: assetPath("/images/robot/gripper-detail.jpg"),
        caption: "Gripper mechanism"
      },
      {
        src: assetPath("/images/robot/controller-electronics.JPG"),
        caption: "Controller electronics"
      }
    ]
  },


{
  title: "Regionals",
  description: "Our regional competition experience.",
  images: [
    "IMG_9281", "IMG_9284", "IMG_9285", "IMG_9286",
    "IMG_9288", "IMG_9293", "IMG_9299", "IMG_9300",
    "IMG_9305", "IMG_9306", "IMG_9307", "IMG_9314",
    "IMG_9316", "IMG_9318", "IMG_9324", "IMG_9331",
    "IMG_9344", "IMG_9345", "IMG_9351", "IMG_9353",
    "IMG_9356", "IMG_9362", "IMG_9365", "IMG_9369",
    "IMG_9376", "IMG_9393", "IMG_9401", "IMG_9404",
    "IMG_9405", "IMG_9415", "IMG_9418", "IMG_9421"
  ].map((filename, index) => ({
  src: `/images/competitions/${filename}.jpeg`,
  thumbnail: `/images/competitions/thumbnail/${filename}_50percent.jpeg`,
  caption: `Regional competition — Photo ${String(index + 1).padStart(2, "0")}`
}))
},


  {
    title: "Nationals",
    description: "Our national competition journey.",
    images: []
  }
];

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
  if (!selectedImage) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSelectedImage(null);
    }

    const category = categories.find(
      (item) => item.title === selectedImage.categoryTitle
    );

    if (!category) return;

    const currentIndex = category.images.findIndex(
      (item) => item.src === selectedImage.src
    );

    if (event.key === "ArrowLeft" && currentIndex > 0) {
      setSelectedImage({
        ...category.images[currentIndex - 1],
        categoryTitle: category.title
      });
    }

    if (
      event.key === "ArrowRight" &&
      currentIndex < category.images.length - 1
    ) {
      setSelectedImage({
        ...category.images[currentIndex + 1],
        categoryTitle: category.title
      });
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);




  return (
    <main className="inner-page">
      <p className="eyebrow">GEAR SHIFT / MOMENTS</p>
      <h1>Our Gallery.</h1>
      <p className="page-intro">
        A collection of the people, ideas and engineering
        moments that make our journey.
      </p>

      {categories.map((category) => (
        <section className="gallery-category" key={category.title}>
          <h2>{category.title}</h2>
          <p>{category.description}</p>

          <div className="gallery-grid">
            {category.images.length > 0 ? (
              category.images.map((item) => (
                <figure className="gallery-card" key={item.src}>

                  {/*<img src={item.src} alt={item.caption} />*/}

                    <button
                      type="button"
                      className="gallery-image-button"
                      

                      onClick={() =>
                        setSelectedImage({
                          ...item,
                          categoryTitle: category.title
                        })
                      }


                      aria-label={`Enlarge ${item.caption}`}
                    >
                      <img
                      src={item.thumbnail || item.src}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                    />
                    </button>              

                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))
            ) : (
              <p className="gallery-empty">
                Competition photographs will be added here.
              </p>
            )}
          </div>
        </section>
      ))}

{selectedImage && (
  <div
    className="lightbox-overlay"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="lightbox-content"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photograph"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="lightbox-close"
        type="button"
        onClick={() => setSelectedImage(null)}
        aria-label="Close photo viewer"
      >
        &times;
      </button>

      <img
        src={selectedImage.src}
        alt={selectedImage.caption}
      />

      <p>{selectedImage.caption}</p>
    </div>
  </div>
)}



    </main>
  );
}

export default Gallery;
