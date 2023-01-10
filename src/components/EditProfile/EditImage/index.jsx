import './style.scss';

const EditImage = () => {
  return (
    <div className="editimage">
      <div>
        <h3>Change your profile picture</h3>
        <div>
          <p>image</p>
        </div>
        <button type="button">Upload Profile</button>
      </div>
      <div>
        <h3>Change your cover photo</h3>
        <div>
          <p>image</p>
        </div>
        <button type="button">Upload Cover</button>
      </div>
    </div>
  );
};

export default EditImage;
