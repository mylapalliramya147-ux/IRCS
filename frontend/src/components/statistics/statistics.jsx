import "./Statistics.css";

function Statistics() {

  const stats = [
    { number: "1,50,000+", title: "Volunteers" },
    { number: "50,000+", title: "Blood Donations" },
    { number: "2,000+", title: "Disaster Responses" },
    { number: "500+", title: "Health Camps" }
  ];

  return (
    <section className="statistics">

      <h2>Our Impact</h2>

      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Statistics;