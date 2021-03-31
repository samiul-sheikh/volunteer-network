import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Add your awesome event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" ref={register} />
                <br />
                <input name="exampleRequired" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;