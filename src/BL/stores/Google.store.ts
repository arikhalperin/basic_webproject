import {action, observable} from "mobx";
import HistoricalValue from "../../common/models/HistoricalValue";
import {act} from "react-dom/test-utils";


class GoogleStore {
    @observable
    historical_values: HistoricalValue[] = []

    @action
    getStock = async (callbackFunc?: () => void) => {
        const {values} =  await StocskFetcher.getStock("GOOGLE");
        this.set_historical_values(values)
    }

    @action
    private set_historical_values(values: HistoricalValue[]) {
        this.historical_values = values
    };
};

export default GoogleStore;
