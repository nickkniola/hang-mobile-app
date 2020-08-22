import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';


function Activity(props) {

    const [acceptmodal, setAcceptModal] = useState(false);
    const [messagemodal, setMessageModal] = useState(false);
    const [linkToHome, setLinkToHome] = useState(false);

    const toggleAcceptModal = () => setAcceptModal(!acceptmodal);
    const toggleMessageModal = () => setMessageModal(!messagemodal);
    const userAccepts = () => setLinkToHome(true);

    // if (linkToHome) {
    //     return (<Redirect push to="/home" />);
    // }

    return (
        <View className="activity py-5">
            <Card
                title="Activity Planned"
                containerStyle={styles.cardRow}>
                <View>
                    <View style={styles.cardRow} className={props.modalReject ? 'change' : 'initial'}>
                        {/* <Image
                                source={{ uri: props.image }}
                                style={styles.profileImage}
                            /> */}
                        <Text>{props.restaurant} {props.activity} in {props.location}</Text>
                        <Text>{props.date} at {props.time} with {props.name}</Text>
                    </View>

                    <View style={styles.cardRow}>

                        <Button
                            title="Accept"
                            onClick={toggleAcceptModal}
                        />


                        <Button
                            title="Reject"
                            onClick={props.userReject}
                            color='red'
                        />

                    </View>

                    <View style="cardRow">
                        <Input
                            placeholder="Message Them Directly"
                            onChangeText={() => console.log('test')}
                        />
                        <Button
                            title="Send Message"
                            onClick={toggleMessageModal}
                        />
                    </View>
                    {/* <Modal isOpen={acceptmodal} toggle={toggleAcceptModal}>
                        <Text><Image source={"/assets/images/hang_logo.png"} />Hang</Text>
                        <Text>
                            You’re all set! You will be notified if the other user also accepts.
                            </Text>
                        <Button title="Solid Button" onClick={userAccepts}>Cool</Button>
                    </Modal>
                    <Modal isOpen={messagemodal} toggle={toggleMessageModal}>
                        <Text className="justify-content-center"><Image source={"/assets/images/hang_logo.png"} />Hang</Text>
                        <Text className="text-center">
                            Message Sent
                            </Text>
                        <Button title="Solid Button" onClick={toggleMessageModal}>Cool</Button>
                    </Modal> */}
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
        margin: 20,
        padding: 20,
        minWidth: 200
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
        maxWidth: 100
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