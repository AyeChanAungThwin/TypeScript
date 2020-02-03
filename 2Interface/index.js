//Interface
console.log("--> Interface <--");
function drawRectangle(rect) {
    var width = rect.width;
    var length = rect.length;
    var height = rect.height;
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
var rect1 = {
    width: 100,
    length: 50
};
var rect2 = {
    width: 100,
    length: 50,
    height: 10
};
drawRectangle(rect1);
drawRectangle(rect2);
