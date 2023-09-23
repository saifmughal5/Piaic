// Name     :   Mirza Saifullah Baig
//Roll no   :   PIAIC215319
//Batch     :   48
//City      :   Islamabad
//Email     :   saifullahbaigmughal@gmail.com

function carMaintenance(num: number) {
    console.log("Leave car at workshop");
    console.log("Do Grocery....");
    let result: Promise<string> = new Promise((resolve, reject) => {
        if (num > 3) {
            setTimeout(() => {
                console.log("Car is fixed");
                resolve("Your car is ready...");
            }, 3000);
        } else {
            reject("Car is not ready");
        }
    });
    return result;
}

function pickDress(num: number) {
    let result: Promise<string> = new Promise((resolve, reject) => {
        if (num > 3) {
            setTimeout(() => {
                console.log("dress is ironed");
                resolve("Your dress is ready...");
            }, 3000);
        } else {
            reject("dress is not ready");
        }
    });
    return result;
}

function attendEvent(num: number) {
    let result: Promise<string> = new Promise((resolve, reject) => {
        if (num > 3) {
            setTimeout(() => {
                resolve("Attend event...");
            }, 3000);
        } else {
            reject("event is not ended");
        }
    });
    return result;
}

let machanicResponce = carMaintenance(4);
machanicResponce
    .then((t: string) => {
        console.log("machinic responce...", t);
        return pickDress(5);
    })
    .then((t) => {
        console.log("laundry responce...", t);
        return attendEvent(5);
    })
    .then((t) => {
        console.log("now ", t);
    })
    .catch((err: any) => {
        console.log("error", err);
    });
