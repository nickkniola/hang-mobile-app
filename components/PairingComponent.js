import React, { useState, useRef } from 'react';
import { View, Button, Picker, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Activity from './ActivityComponent/ActivityComponent';
import { USERDATA } from '../shared/userData.js';
import { LOCATIONDATA } from '../shared/locationData.js';

function Pairing(props) {


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
    const [incompleteForm, setIncompleteForm] = useState(false);

    const cardFocus = useRef(null);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const userRejectPairing = () => {
        setModalRejectPairing(true);
        setTimeout(userReject2Pairing, 500)
    };
    const userReject2Pairing = () => {
        if (activity === 'food') {
            setActivity('Food');
            handleFood();
        }
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setModalRejectPairing(false);
    }

    const handleSubmit = event => {
        if (!activity || !location) {
            setIncompleteForm(true);
        } else {
            setIncompleteForm(false);
        }
        if (!location) { console.log('no location') }
        if (!date) { console.log('no date') }
        if (activity === 'food') { setActivity('') }
        const selectUserIndex = randomNumber()

        console.log(image);
        let ddate = date.toString();
        if (ddate.length > 5) {
            setNewDate(ddate.substr(3, 7))
        }
        setTime(ddate.substr(15, 6))
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        if (incompleteForm) { setShown(true) };
        event.preventDefault();
    }




    const randomNumber = () => Math.floor(Math.random() * 4);



    const handleActivity = event => {
        switch (event) {
            case 'Food':
                setActivity(event)
                handleFood();
                break;
            default:
                setRestaurant('');
                setActivity(event)
        }

    }

    const handleFood = () => {

        setRestaurant(
            locationdata.filter(obj => obj.city === location)[0]['name']
        );

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

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <ScrollView style={styles.container}>
            {/* <View>
                <Text h3 >Pairing</Text>
                <Text>Select your activity and availability to get paired.</Text>
            </View> */}
            {!shown && <View>
                <View style={styles.view}>
                    <Text h4>Date</Text>
                    <View>
                        <Button
                            title="Select Date"
                            onPress={showDatepicker}
                        />
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
                </View>
                <View style={styles.view}>
                    <Text h4>Time</Text>
                    <Button
                        title="Select Time"
                        onPress={showTimepicker}
                    />
                </View>
                <View style={styles.view}>
                    <Text h4 for="location">Location</Text>
                    <Picker
                        selectedValue={location}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => setLocation(itemValue)}
                    >
                        <Picker.Item label="Select..." value="" />
                        <Picker.Item label="Chicago" value="Chicago" />
                        <Picker.Item label="Houston" value="Houston" />
                        <Picker.Item label="Los Angeles" value="Los Angeles" />
                        <Picker.Item label="New York City" value="New York City" />
                        <Picker.Item label="Philadelphia" value="Philadelphia" />
                        <Picker.Item label="San Francisco" value="San Francisco" />
                        <Picker.Item label="San Jose" value="San Jose" />
                    </Picker>
                </View>
                <View style={styles.view}>
                    <Text h4 for="activity">Activity</Text>
                    <Picker
                        selectedValue={activity}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => handleActivity(itemValue)}
                    >
                        <Picker.Item label="Select..." value="" />
                        <Picker.Item label="Sports" value="Sports" />
                        <Picker.Item label="Movie" value="Movie" />
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="Museum" value="Museum" />
                    </Picker>
                </View>
                <View>
                    <Button
                        title="Submit"
                        onPress={handleSubmit} />
                </View>
            </View>}
            {incompleteForm && <Text>Must fill out form completely</Text>}

            {!incompleteForm && shown && <Activity date={newDate} time={time} activity={activity === "Food" ? "" : activity} location={location} name={name} restaurant={restaurant} image={image} userReject={userRejectPairing} />}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    view: {
        marginTop: 10
    }
});


export default Pairing;