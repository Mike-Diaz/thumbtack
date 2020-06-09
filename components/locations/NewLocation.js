import {ScrollView} from "react-native";
import React, {useState} from "react";
import styles from "../styles/global";
import {Button, Divider} from 'react-native-paper';
import CoordinateInfo from "./CoordinateInfo";
import ApproximateAddress from "./ApproximateAddress";
import LocationFormInputs from "./LocationFormInputs";
import { storeData } from '../DataStorage';
import Map from '../Map';

const NewLocation = () => {
    const [dateLocated, setDateLocated] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [approxAddress, setApproxAddress] = useState('');

    const getCoordinates = (pE) => {
        // Test values
        setDateLocated(new Date().toLocaleString());
        setLongitude(pE.nativeEvent.coordinate.longitude); // '-134.20000'
        setLatitude(pE.nativeEvent.coordinate.latitude); // '+48.61670'
        console.log(pE)
        setApproxAddress('New Location test Address');
    };

    const addLocation = () => {

        let locationObject = {
            dateLocated,
            longitude,
            latitude,
            approxAddress
        }

        storeData(locationObject);
        console.log('Test output: new location added!');
    };

    // markers={{longitude, latitude}}

    return (
        <ScrollView style={styles.container}>
            <Map onPressEvent={e => getCoordinates(e)} ></Map> 
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
