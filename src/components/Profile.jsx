import profileImage from '../assets/profile.jpg';

function Profile({ name, title, bio }) {
  return (
    <section className="profile-section">
      <div className="profile-card">
        <img loading= "lazy" src={profileImage} alt={name} />

        <div className="profile-content">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>{bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;