import React from 'react';
import Event from '../Event/Event';

const events = [
    {
        name: 'Child Support',
        imageUrl: 'childSupport.png'
    },
    {
        name: 'Animal Shelter',
        imageUrl: 'animalShelter.png'
    },
    {
        name: 'Bird House',
        imageUrl: 'birdHouse.png'
    },
    {
        name: 'Good Student',
        imageUrl: 'goodEducation.png'
    },
    {
        name: 'Animal Shelter',
        imageUrl: 'animalShelter.png'
    },
    {
        name: 'Child Support',
        imageUrl: 'childSupport.png'
    },
    {
        name: 'Child Support',
        imageUrl: 'childSupport.png'
    },
    {
        name: 'Child Support',
        imageUrl: 'childSupport.png'
    }
];

const Home = () => {
    return (
        <div className="row">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;