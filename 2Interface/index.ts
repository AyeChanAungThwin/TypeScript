//Interface
console.log("--> Interface <--")

interface RectangleOptions {
    width: number;
    length: number;
    height?: number; //Optional
}

function drawRectangle(rect: RectangleOptions): void {
    let width: number = rect.width;
    let length: number = rect.length;
    let height: number = rect.height;

    if (!rect.height) {
        console.log("Drawing 2D Rectangle.");
    }
    else {
        console.log("Drawing 3D Rectangle.");
    }

    /*
    let count: number=0;
    if (rect.width) {
        count++;
    }
    if (rect.length) {
        count++;
    }
    if (rect.height) {
        count++;
    }
    console.log(`Drawing ${count}D Rectangle.`);
    */
}

const rect1: {
    width: number,
    length: number,
} = {
    width: 100,
    length: 50
};

const rect2: {
    width: number,
    length: number,
    height: number
} = {
    width: 100,
    length: 50,
    height: 10
};

drawRectangle(rect1);
drawRectangle(rect2);