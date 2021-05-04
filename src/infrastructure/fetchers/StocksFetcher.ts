import googleFinance from "google-finance";
import HistoricalValue from "../../common/models/HistoricalValue";


interface quoteIf {
    close: number
}

class StocksFetcher {

    async getStock(stock_name): Promise<HistoricalValue[]> {

        let result:Array<HistoricalValue> = []

        for(let i=0;i<12;i++) {
            const historicalValue = new HistoricalValue(i);
            result.push(historicalValue)
        }
        return result;
    };

}

export default new StocksFetcher();
