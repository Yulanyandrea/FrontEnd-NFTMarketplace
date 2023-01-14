import './style.scss';

const EditImage = () => {
  return (
    <main className="editimage">
      <section className="editimage-profile">
        <h3 className="editimage-profile_title">Change your profile picture</h3>
        <div className="editimage-profile_img">
          <img alt="profile_picture" />
        </div>
        <button className="editimage-profile_btn" type="button">Upload Profile</button>
      </section>
      <section className="editimage-cover">
        <h3 className="editimage-cover_title">Change your cover photo</h3>
        <div className="editimage-cover_img">
          <img alt="image_cover" />
        </div>
        <button className="editimage-cover_btn" type="button">Upload Cover</button>
      </section>
    </main>
  );
};

export default EditImage;
