let template = `
  <input oninput="setSaucijsPrice(event)" value="{{saucijsPrice}}" type="number" placeholder="saucijsPrice"></input>
  <input oninput="setQuantity(event)" value="{{quantity}}" type="number" placeholder="quantity"></input>
  <p>{{saucijsPrice}}</p>
  <p>{{quantity}}</p>
`;
let data = {
  saucijsPrice: 3,
  quantity: 10
};

function render() {
  let localTemplate = replaceVarsTemplate(template, data);
  $("#reactive-app").empty();
  $("#reactive-app").append(localTemplate);
}

function replaceVarsTemplate(text, object) {
  Object.entries(object).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`);
    if (text.match(regex)) {
      text = text.replace(new RegExp("{{" + key + "}}", "g"), value);
    }
  });

  return text;
}

function setSaucijsPrice(e) {
  data.saucijsPrice = e.target.value;
}

function setQuantity(e) {
  data.quantity = e.target.value;
}