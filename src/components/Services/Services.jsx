import "./Services.css";

function Services() {
  const services = [
    {
      title: "Blood Donation",
      description: "Encouraging voluntary blood donation to save lives."
    },
    {
      title: "Disaster Relief",
      description: "Providing emergency relief during natural disasters."
    },
    {
      title: "First Aid Training",
      description: "Training people in first aid and emergency response."
    },
    {
      title: "Health Care",
      description: "Organizing health camps and medical assistance."
    },
    {
      title: "Youth Programs",
      description: "Engaging youth in humanitarian activities."
    },
    {
      title: "Community Welfare",
      description: "Supporting vulnerable communities with essential services."
    }
  ];

  return (
    <section className="services">

      <h2>Our Services</h2>

      <div className="service-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="icon-placeholder">
              Icon
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;