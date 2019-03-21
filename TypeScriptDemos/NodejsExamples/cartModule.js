module.exports.shoppingCart = (function(){
    var list =[];//blank array...
    addItem = function(item){
        list.push(item)
    }
    
    deleteItem = function(id){
        var element = list.filter((e)=>e.id == id);
        var index = list.indexOf(element);
        list.splice(index, 1);
    }    

    getCart = function(){
        return list;
    }

    updateCart = function(item){
        for(let i =0; i < list.length; i++){
            if(list[i].id == item.id){
                list[i].name = item.name;
                list[i].price = item.price;
                list[i].quantity = item.quantity;
                return;//exits the function once the updating is completed...
            }
        } 
    }
    return{
        addItem : addItem,
        modify : updateCart,
        delete : deleteItem,
        getCart : getCart
    }
})();

module.exports.title="Nodejs Demos";
module.exports.developedBy ="Phaniraj";
module.exports.developedDate = new Date();