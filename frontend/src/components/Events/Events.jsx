import "./Events.css";

function Events() {
  const events = [
    {
      title: "Blood Donation Camp",
      date: "15 August 2026",
      description: "Join our blood donation camp and help save lives."
    },
    {
      title: "First Aid Training",
      date: "22 August 2026",
      description: "Learn basic first aid skills from certified trainers."
    },
    {
      title: "Disaster Relief Program",
      date: "5 September 2026",
      description: "Community support and disaster relief awareness program."
    }
  ];

  return (
    <section className="events">
      <h2>Latest News & Events</h2>

      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <h4>{event.date}</h4>
            <p>{event.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;