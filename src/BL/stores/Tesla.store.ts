import {action, observable} from "mobx";
import HistoricalValue from "../../common/models/HistoricalValue";


class TeslaStore {
    @observable
    historical_values: HistoricalValue[] = []
};

export default TeslaStore;
