class StocksFetcher {

    async getStocks(stock_name): Promise<any> {
        try {


            return await this.get('/actions', {}, {sort, order, offset, max_elements});
        } catch (err) {
            throw err;
        }
    }

}

export default new StocksFetcher();
