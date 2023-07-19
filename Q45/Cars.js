function carDetail(modelName, manufacturer, color) {
    var argts = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        argts[_i - 3] = arguments[_i];
    }
    if (color != null) {
        console.log(modelName, manufacturer, color, argts);
    }
    else {
        console.log(modelName, manufacturer, argts);
    }
    return argts;
}
carDetail("passo", "toyota", 'black');
carDetail("passo", "toyota");
carDetail("passo", "toyota", 'black', 'registered:2019', 'owner:xyz');
