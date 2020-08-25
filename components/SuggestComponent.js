import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
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
    const [modalReject, setModalReject] = useState(false);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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
        <View>
            <View>
                <Text h4>Suggestion</Text>
            </View>
            <View>
                <Text>Randomly get paired with an activity and partner.</Text>
            </View>
            <View >
                <View >
                    <Button onPress={showDatepicker} title="Select Date" />
                </View>
                <View>
                    <Button onPress={handleSubmit} title="Select" />
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
            {shown && <Activity date={newDate} time={time} activity={activity} location={location} name={name} image={image} userReject={userReject} modalReject={modalReject} />}
        </View>
    );
}

const styles = StyleSheet.create({
    profileImage: {
        width: 68,
        height: 68,
    },
    cardRow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 10,
        marginTop: 50,

    },
    item: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        marginTop: 0,
        marginBottom: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        justifyContent: "center",
        margin: 20
    },
    textinput: {
        margin: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containertwo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 20,
        marginHorizontal: 60,
        padding: 40,
    },
    testcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    testbutton: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    },
    buttonStyle: {
        marginHorizontal: 120

    },
    divider: {
        marginBottom: 30,
        marginTop: 10
    }
});

export default Suggest;