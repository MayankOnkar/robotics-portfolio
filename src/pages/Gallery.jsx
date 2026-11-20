
const categories = [
  {
    title: "Team",
    description: "The people behind Gear Shift.",
    images: [
      {
        src: "/images/team/team-with-robot.jpg",
        caption: "Gear Shift team with our robot"
      }
    ]
  },
  {
    title: "Robot",
    description: "Our robot's design and development.",
    images: [
      {
        src: "/images/robot/robot-cad-render.png",
        caption: "Robot CAD render"
      },
      {
        src: "/images/robot/robot-assembled-on-workbench.jpg",
        caption: "Robot assembly"
      },
      {
        src: "/images/robot/gripper-detail.jpg",
        caption: "Gripper mechanism"
      },
      {
        src: "/images/robot/controller-electronics.jpg",
        caption: "Controller electronics"
      }
    ]
  },
  {
    title: "Regionals",
    description: "Our regional competition experience.",
    images: []
  },
  {
    title: "Nationals",
    description: "Our national competition journey.",
    images: []
  }
];

function Gallery() {
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
                  <img src={item.src} alt={item.caption} />
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
    </main>
  );
}

export default Gallery;
