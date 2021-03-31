import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        // send image to third party app imgbb
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Add your awesome event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;