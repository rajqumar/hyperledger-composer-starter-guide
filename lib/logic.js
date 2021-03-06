import { BADQUERY } from "dns";

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */

 async function tradeCommodity(trade){
    //set the new owner of the commodity
    trade.commodity.owner = trade.newOwner;
    let assetRegistry = await getAssetRegistry('org.acme.mynetwork.Commodity');
    
    //emit a notification that a trade has occurred
    let tradeNotification = getFactory().newEvent('org.acme.mynetwork', 'TradeNotification');
    tradeNotification.commodity = trade.commodity;
    emit(tradeNotification);

    await assetRegistry.update(trade.commodity);
 }

 /**
 * Remove all high volume commodities
 * @param {org.acme.mynetwork.RemoveHighQuantityCommodities} remove - the remove to be processed
 * @transaction
 */

 async function removeHighQuantityCommodities(remove) {
     let assetRegistry = await getAssetRegistry('org.acme.mynetwork.Commodity');
     let results = await query('selectCommoditiesWithHighQuantity');

     for(let n =0; n < results.length; n++){
        let trade = results[n];

        //emit a notification that a trade was removed
        let removeNotification = getFactory().newEvent('org.acme.mynetwork', 'RemoveNotification');
        removeNotification.commodity = trade;
        emit(removeNotification);
        await assetRegistry.remove(trade);
     }
 }