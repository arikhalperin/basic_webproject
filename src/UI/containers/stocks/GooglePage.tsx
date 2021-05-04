import React, { useEffect, useMemo, useState } from 'react';
import {observer, Provider} from 'mobx-react';
import rootStores from "../../../BL/stores";
import {LoadingProvider} from "../../react-contexts/LoadingContext";
import BlockUi from "react-block-ui";
import styles from "../App.module.scss";
import GoogleStore from "../../../BL/stores/Google.store";
import {GOOGLE_STORE} from "../../../BL/consts/store";


const googleStore: GoogleStore = rootStores[GOOGLE_STORE];



const GooglePage = observer(() => {
    const [isLoading, setIsLoading] = useState(false);

    const {historical_values} = googleStore;

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        console.log(historical_values);
    }, [historical_values])

    const fetchData = async () => {
        setIsLoading(true);
        await googleStore.getStock();
        console.log(historical_values)
        console.log(googleStore.historical_values)
        setIsLoading(false);
    }

    let values_display = (<></>);

    if(!isLoading && googleStore.historical_values[0]!=undefined) {
        values_display = (<div style={{fontSize: '32px', color: "black", padding: '50px'}}>
            <p>January: {googleStore.historical_values[0].value}</p>
            <p>February: {googleStore.historical_values[1].value}</p>
            <p>March: {googleStore.historical_values[2].value}</p>
            <p>April: {googleStore.historical_values[3].value}</p>
            <p>May: {googleStore.historical_values[4].value}</p>
            <p>June: {googleStore.historical_values[5].value}</p>
            <p>July: {googleStore.historical_values[6].value}</p>
            <p>August: {googleStore.historical_values[7].value}</p>
            <p>September: {googleStore.historical_values[8].value}</p>
            <p>October: {googleStore.historical_values[9].value}</p>
            <p>November: {googleStore.historical_values[10].value}</p>
            <p>December: {googleStore.historical_values[11].value}</p>
        </div>)
    }

    return (<>
        <div style={{fontSize: '64px', color: "white", padding: '200px'}}>
            Google
        </div>
            {values_display}
        </>);
});

export default GooglePage;
