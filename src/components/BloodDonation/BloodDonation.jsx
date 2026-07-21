import "./BloodDonation.css";

function BloodDonation() {
  return (
    <section className="blood-donation">

      <div className="blood-left">

        <h2>Donate Blood, Save Lives</h2>

        <p>
          Every drop of blood you donate can save someone's life.
          Join the Indian Red Cross Society in creating a healthier
          and stronger community through voluntary blood donation.
        </p>

        <ul>
          <li>✔ Safe and Simple Process</li>
          <li>✔ Helps Accident Victims</li>
          <li>✔ Supports Emergency Medical Care</li>
          <li>✔ Strengthens Community Health</li>
        </ul>

        <button>Donate Now</button>

      </div>

      <div className="blood-right">

        <div className="image-placeholder">
          Blood Donation Image
        </div>

      </div>

    </section>
  );
}

export default BloodDonation;