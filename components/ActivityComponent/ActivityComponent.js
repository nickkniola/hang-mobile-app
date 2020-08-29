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
        <View>
            <Card
                title="Activity Planned">
                <View style={styles.container}>
                    <Text style={styles.textCenter}>{props.restaurant} {props.activity} in {props.location}</Text>
                    <Text style={styles.textCenter}>{props.date} at {props.time} with {props.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonItem}>
                        <Button
                            title="Accept"
                            onPress={createAcceptAlert}
                        />
                    </View>
                    <View style={styles.buttonItem}>
                        <Button
                            style={styles.buttonItem}
                            title="Reject"
                            onPress={props.userReject}
                            color='red'
                        />
                    </View>
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
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    },
    view: {
        marginTop: 10
    },
    buttonContainer: {
        justifyContent: "center",
        flexDirection: "row",
        margin: 10,
        padding: 30
    },
    buttonItem: {
        marginHorizontal: 10,
        minWidth: 80
    },
    textCenter: {
        textAlign: 'center'

    }
});

export default Activity;