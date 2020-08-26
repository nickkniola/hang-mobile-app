import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet, Button, Alert } from 'react-native';
import { Card, Input } from 'react-native-elements';

function Activity(props) {

    const [message, setMessage] = useState('');
    const [acceptmodal, setAcceptModal] = useState(false);
    const [messagemodal, setMessageModal] = useState(false);
    const [linkToHome, setLinkToHome] = useState(false);

    const toggleAcceptModal = () => setAcceptModal(!acceptmodal);
    const toggleMessageModal = () => setMessageModal(!messagemodal);
    const userAccepts = () => setLinkToHome(true);


    const changeMessage = (typedMessage) => setMessage({ typedMessage });


    const createAcceptAlert = () => {
        Alert.alert(
            "Hang",
            "You're All Set",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    const createMessageAlert = () => {
        Alert.alert(
            "Hang",
            "Message Sent",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    // let testing = '../../assets/images/nick.jpg'
    // if (props.name === 'Tom') {
    //     testing = '../../assets/images/tom.jpg';
    // } else if (props.name === 'Ali') {
    //     testing = '../../assets/images/ali.jpg';
    // } else if (props.name === 'Kathy') {
    //     testing = '../../assets/images/kathy.jpg';
    // }

    return (
        <View >
            <Card
                title="Activity Planned">
                <View>
                    <View>
                        {/* <Image
                            style={{ width: 50, height: 50 }}
                            source={require(testing)}

                        /> */}
                    </View>
                    <Text>{props.restaurant} {props.activity} in {props.location}</Text>
                    <Text>{props.date} at {props.time} with {props.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Accept"
                        onPress={createAcceptAlert}
                    />
                    <Button
                        title="Reject"
                        onPress={props.userReject}
                        color='red'
                    />
                </View>
                <View style="cardRow">
                    <Input
                        placeholder="Message Them Directly"
                        onChangeText={changeMessage}
                    />
                    <Button
                        title="Send Message"
                        onPress={createMessageAlert}
                    />
                </View>
            </Card>
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
    },
    cardItem: {
        flex: 1,
        margin: 10
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
    }
});

export default Activity;