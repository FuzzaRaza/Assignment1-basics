function carDetail(modelName,manufacturer,color?:string,...argts:string[]){
    interface Car_specs{
        modelName:string;
        manufacturer:string;
        color?:string;
    }
    if (color!= null)
    {
    console.log(modelName,manufacturer,color,argts)
    }
    else{
        console.log(modelName,manufacturer,argts);
    }
    return argts;
    
}
carDetail("passo","toyota",'black');
carDetail("passo","toyota");
carDetail("passo","toyota",'black','registered:2019','owner:xyz');
