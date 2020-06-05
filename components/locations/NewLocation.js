import {ScrollView} from "react-native";
import React, {useState} from "react";
import styles from "../styles/global";
import {Button, Divider} from 'react-native-paper';
import CoordinateInfo from "./CoordinateInfo";
import ApproximateAddress from "./ApproximateAddress";
import LocationFormInputs from "./LocationFormInputs";

const NewLocation = () => {
    const [dateLocated, setDateLocated] = useState('');
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [approxAddress, setApproxAddress] = useState('');

    const getCoordinates = () => {
        // Test values
        setDateLocated(new Date().toLocaleString());
        setLongitude(-47.152);
        setLatitude(+128.123);
        setApproxAddress('123 ABC ST NE, City, State 12345');
    };

    const addLocation = () => {
        console.log('Test output: new location added!');
    };

    return (
        <ScrollView style={styles.container}>
            <Button raised primary mode='contained' icon='map-search' color='green' style={styles.formControl}
                    onPress={getCoordinates}>Get
                Coordinates</Button>

            <CoordinateInfo dateLocated={dateLocated} longitude={longitude} latitude={latitude}/>

            <Divider style={styles.divider}/>

            <ApproximateAddress approxAddress={approxAddress}/>

            <Divider style={styles.divider}/>

            <LocationFormInputs/>

            <Button raised primary mode='contained' icon='map-marker-plus' style={styles.submitButton}
                    onPress={addLocation}>Add New Location</Button>
        </ScrollView>
    );
};

export default NewLocation;