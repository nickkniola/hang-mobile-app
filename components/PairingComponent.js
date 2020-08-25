import React, { useState, useRef } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { USERDATA } from '../shared/userData.js';
import { LOCATIONDATA } from '../shared/locationData.js';

function Pairing(props) {

    const [date, setDate] = useState('');
    const [newDate, setNewDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [name, setName] = useState('');
    const [shown, setShown] = useState(false);
    const [image, setImage] = useState('');
    const [userdata] = useState(USERDATA);
    const [locationdata] = useState(LOCATIONDATA);
    const [modalRejectPairing, setModalRejectPairing] = useState(false);

    const cardFocus = useRef(null);

    const userRejectPairing = () => {
        setModalRejectPairing(true);
        setTimeout(userReject2Pairing, 500)
    };
    const userReject2Pairing = () => {
        if (activity === 'food') {
            setActivity('');
            handleFood();
        }
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setModalRejectPairing(false);
    }

    const handleSubmit = event => {
        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        if (date.length > 5) {
            setNewDate(date.substr(5, 8))
        }
        setShown(true);
        setTimeout(scrollToBottom, 0);
        event.preventDefault();
    }

    const scrollToBottom = () => {
        cardFocus.current.scrollIntoView({
            behavior: "smooth"
        })
    };



    const randomNumber = () => Math.floor(Math.random() * 4);



    const handleActivity = event => {
        switch (event.target.value) {
            case 'Food':
                setActivity(event.target.value)
                handleFood();
                break;
            default:
                setRestaurant('');
                setActivity(event.target.value)
        }

    }

    const handleFood = () => {

        setRestaurant(
            locationdata.filter(obj => obj.city === location)[0]['name']
        );

    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }


    return (
        <View>

            <View>
                <Text h3 className="display-4 mb-1">Pairing</Text>
                <Text className="mb-4 lead">Select your activity and availability to get paired.</Text>
            </View>

            <Text h3 >Pairing </Text>
            <View>

                <View>
                    <Text>Date</Text>
                    <Input name="date" type="date" className="form-control" placeholder="0" draggable="true" value={date} onChange={e => setDate(e.target.value)} required />
                    <Text>Select a date</Text>
                </View>
                <View>
                    <Text>Time</Text>
                    <Input name="time" type="time" className="form-control" placeholder="0" draggable="true" value={time} onChange={e => setTime(e.target.value)} required />
                    <Text className="invalid-feedback">Select a time</Text>
                </View>

                <View>
                    <Text for="location">Location</Text>
                    <Input name="location" type="select" className="form-control" id="location" value={location} onChange={handleLocation} required>
                        <Text value="">Select...</Text>
                        <Text value="Chicago">Chicago</Text>
                        <Text value="Houston">Houston</Text>
                        <Text value="Los Angeles">Los Angeles</Text>
                        <Text value="New York City">New York City</Text>
                        <Text value="Philadelphia">Philadelphia</Text>
                        <Text value="San Francisco">San Francisco</Text>
                        <Text value="San Jose">San Jose</Text>
                    </Input>
                    <Text>Select a city</Text>
                </View>
                <View>
                    <Text for="activity">Activity</Text>
                    <Input name="activity" type="select" className="form-control" id="activity" value={activity} onChange={handleActivity} required>
                        <Text value="">Select...</Text>
                        <Text value="Sports">Sports</Text>
                        <Text value="Movie">Movie</Text>
                        <Text value="Food">Food</Text>
                        <Text value="Museum">Museum</Text>
                    </Input>
                    <Text>Select an activity</Text>
                </View>
                <Button
                    title="Select"
                    onPress={() => console.log('test')} />
            </View>


            {shown && <Activity date={newDate} time={time} activity={activity === "Food" ? " " : activity} location={location} name={name} restaurant={restaurant} image={image} userReject={userRejectPairing} modalReject={modalRejectPairing} />}

        </View>
    );
}




export default Pairing;