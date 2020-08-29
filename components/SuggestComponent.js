import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Activity from './ActivityComponent/ActivityComponent';
import { USERDATA } from '../shared/userData.js';

function Suggest(props) {

    // const [date, setDate] = useState(new Date());
    const [newDate, setNewDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [userdata] = useState(USERDATA);
    const [shown, setShown] = useState(false);


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const cardFocus = useRef(null);

    const userReject = () => {
        setTimeout(userReject2, 500)
    };
    const userReject2 = () => {
        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setActivity(userdata[randomNumber()].activity);
        setLocation(userdata[randomNumber()].location);
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
        let testDate = date.toString();
        if (testDate.length > 5) {
            setNewDate(testDate.substr(3, 8));
        }
        setShown(true);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };





    const randomNumber = () => Math.floor(Math.random() * 4);


    return (
        <View style={styles.container}>

            {!shown && <View >
                <View style={styles.view}>
                    <Button onPress={showDatepicker} title="Select Date" />
                </View>
                <View style={styles.view}>
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>}
            {shown && <Activity date={newDate} time={time} activity={activity} location={location} name={name} image={image} userReject={userReject} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    },
    view: {
        marginTop: 10
    }
});

export default Suggest;