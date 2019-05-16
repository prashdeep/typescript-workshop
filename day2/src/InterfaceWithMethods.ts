interface OrderFood{
    placeOrder(food:string):number;
    viewStatus(orderId:number):string;
    updateOrder(orderId:number, ...food:string[] ):void;
    cancelOrder(orderId:number):void;
}

class Nandana implements OrderFood {

    placeOrder(food:string):number{
        return Math.round(Math.random()* 10000);
    };
    viewStatus(orderId:number):string{
        return "Pending";
    }
    updateOrder(orderId:number, ...food:string[] ):void{
        console.log(`updating ${orderId} with ${food}`);
    };
    cancelOrder(orderId:number):void{
        console.log(`Cancelling the order with orderId of ${orderId}`);
    }
}

let printOrder = function(order:OrderFood):number{
    return order.placeOrder('Pulav');
}

console.log(`${printOrder(new Nandana())}`);


