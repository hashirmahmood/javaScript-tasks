const information = (manufacturer, model, color, headlight) => {
  return (object = {
    company: manufacturer,
    model: model,
    color: color,
    headlight: headlight,
  });
};
let car1 = information("honda", 2019, "black", "HID");
let car2 = information("toyota", 2021, "white", "LED");
let car3 = information("suzuki", 2022, "grey", "HID");

console.log(car1);
console.log(car2);
console.log(car3);
