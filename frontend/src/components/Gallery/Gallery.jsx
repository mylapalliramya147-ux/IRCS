import "./Gallery.css";

function Gallery() {

  const galleryItems = [
    "Image 1",
    "Image 2",
    "Image 3",
    "Image 4",
    "Image 5",
    "Image 6"
  ];

  return (
    <section className="gallery">

      <h2>Gallery</h2>

      <p>
        A glimpse of our humanitarian activities and community services.
      </p>

      <div className="gallery-container">

        {galleryItems.map((item, index) => (

          <div className="gallery-card" key={index}>
            {item}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;