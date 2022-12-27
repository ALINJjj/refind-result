import { useState } from "react";
import "./UploadImage.css"
const UploadImage = () => {

    const [image, setImage] = useState('');
    const imageHandler = (event) => {
        console.log(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]))
    }
    console.log(!!image);
  return (
    <div className="image">
    <div className="group">
    <label htmlFor="img">Image : </label>
    {!!image ? <img className="image__pick" src = {image} /> : <div className="image__pick"></div>}

    </div>
      <input  onChange={imageHandler}  type="file" id="file" />

    </div>
  );
};
export default UploadImage;
