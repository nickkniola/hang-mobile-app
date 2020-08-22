import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import DatePicker from 'react-datepicker';
import Activity from './ActivityComponent/ActivityComponent';
import { USERDATA } from '../shared/userData.js';

function Suggest(props) {

    const [date, setDate] = useState(new Date());
    const [newDate, setNewDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [userdata] = useState(USERDATA);
    const [shown, setShown] = useState(false);
    const [modalReject, setModalReject] = useState(false);

    const cardFocus = useRef(null);

    const userReject = () => {
        setModalReject(true);
        setTimeout(userReject2, 500)
    };
    const userReject2 = () => {
        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setActivity(userdata[randomNumber()].activity);
        setLocation(userdata[randomNumber()].location);
        setModalReject(false);
    }

    const handleSubmit = event => {
        let today = new Date();
        let hours = today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + (today.getMinutes());
        let month = today.getMonth() + 1;
        let day = today.getDate();

        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setTime(`${hours}:${minutes}`);
        setActivity(userdata[randomNumber()].activity);
        setLocation(userdata[randomNumber()].location);
        if (date.length > 5) {
            setNewDate(date.substr(5, 8));
        }
        if (!date) {
            setNewDate(`${month}-${day}`)
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


    return (
        <View>
            <Activity />
            {/* <View className="d-flex flex-column justify-content-center p-3">
                <Text h3>Suggestion</Text>
                <Text>Randomly get paired with an activity and partner.</Text>
            </View>
            <View className="p-4">
                <View onSubmit={handleSubmit}>
                    <View>
                        <DatePicker
                            selected={date}
                            onChange={setDate}
                        />
                    </View>
                    <Button>Select</Button>
                </View>
            </View>
            <View ref={cardFocus} />
            {shown && <Activity date={newDate} time={time} activity={activity} location={location} name={name} image={image} userReject={userReject} modalReject={modalReject} />} */}
        </View>
    );
}

export default Suggest;