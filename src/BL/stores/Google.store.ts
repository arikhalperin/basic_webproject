import {action, observable} from "mobx";
import HistoricalValue from "../../common/models/HistoricalValue";
import StocksFetcher from "../../infrastructure/fetchers/StocksFetcher";



class GoogleStore {
    @observable
    historical_values: HistoricalValue[] = []

    @action
    getStock = async () => {
        const values =  await StocksFetcher.getStock("google");
        this.set_historical_values(values)
    }

    @action
    private set_historical_values(values) {
        this.historical_values = values;
    };
};

export default GoogleStore;
