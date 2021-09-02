import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '../../components/Editor/Editor';
import Button from '../../components/Button'
import { ImageIcon, TrashIcon } from '../../components/Svgs';

const StepThree = (props) => {

    const { state, setState } = props;
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [image, setImage] = useState(null);

    const handleDeleteImage = () => {
        setImage(null);
    }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];

            setImage(img);
            setCreateObjectURL(URL.createObjectURL(img));
        }
    };

    const uploadToServer = async () => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/file", {
          method: "POST",
          body
        });
      };

    if (state.currentStep !== 3) {
        return null;
    }

    return (
        <div className="d-flex flex-column">
            <div>
                <h6> Upload Cover Image </h6>
                <p className="small text-muted">The first image audience will see at the top of your event page.  Upload your own or design one with canva </p>
            </div>
            <div>
                <div className="d-flex flex-column imageUploadBox">
                    {image ? (
                        <>
                            <img src={createObjectURL} alt="upload image" width={560} height={300} />
                            <button className="deleteBtn">
                                <div> <TrashIcon height={20} width={15} color={'var(--primary)'} /> </div>
                                <div className="small" onClick={() => handleDeleteImage()}> Delete </div>
                            </button>
                        </>
                    ) : (
                        <div className="row dottedBorder mx-2 my-3">
                            <div className="d-flex align-items-center justify-content-center col-md-6 col-sm-12">
                                <div className="d-flex flex-column align-items-center">
                                    <div style={{ marginBottom: '-1.1rem' }}> <ImageIcon /> </div>
                                    <input type="file" accept="image/*" className="file-input" onChange={(e) => uploadToClient(e)} />
                                    <div className="small text-muted"> Upload an Image </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-center col-md-6 col-sm-12">
                                <Button className="small text-center">
                                    <Link to="https://www.canva.com/" target="_blank" className="white-on-hover">
                                         Design With Canva
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="my-2 mx-1"><Button className="w-100 text-center" onClick={() => uploadToServer()}> Upload Now </Button></div>
                </div>
            </div>

            <div className="my-3">
                <h5> About the event </h5>

                <Editor className="my-3" setState={setState} state={state} field="about" />
            </div>
        </div>
    )
}

export default React.memo(StepThree);