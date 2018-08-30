const state = {
    //基金类型字典
    fundType:[{"tab":"债券型","val":"10200"},{"tab":"货币型","val":"10300"},{"tab":"混合型","val":"10400"},
    {"tab":"股票型","val":"10100"},{"tab":"理财型","val":"11300"}],
    bannerList:[],
    //收益率选项
    syList:[{name:"近一月涨幅",val:"isMonthRate",vals:"yieldrate1m"},{name:"近三月涨幅",val:"is_season_rate",vals:"yieldrate3m"},{name:"近六月涨幅",val:"is_half_year_rate",vals:"yieldrate6m"},
    {name:"近一年涨幅",val:"is_year_rate",vals:"yieldrate1y"}],
    hbsyList:[{name:"七日年化",val:"isSeven",vals:"annual_profit"}]
}
export default state;