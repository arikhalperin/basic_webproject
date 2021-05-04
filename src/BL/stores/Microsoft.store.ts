import {action, observable} from "mobx";
import HistoricalValue from "../../common/models/HistoricalValue";


class MicrosoftStore {
    @observable
    historical_values: HistoricalValue[] = []
};

export default MicrosoftStore;
