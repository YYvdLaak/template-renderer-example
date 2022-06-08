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

// Implement your reactive system here!



/**
 * HELPER FUNCTIONS
 */

// Render the template with dynamic data in the html page
function render() {
  let localTemplate = replaceVarsTemplate(template, data);
  $("#reactive-app").empty();
  $("#reactive-app").append(localTemplate);
}

// Replace the vars in the template ( {{ }} ) by their dynamic data fields from data{}
function replaceVarsTemplate(text, object) {
  Object.entries(object).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`);
    if (text.match(regex)) {
      text = text.replace(new RegExp("{{" + key + "}}", "g"), value);
    }
  });

  return text;
}

// Event handler to set saucijsPrice field from input
function setSaucijsPrice(e) {
  data.saucijsPrice = e.target.value;
}

// Event handler to set quantity field from input
function setQuantity(e) {
  data.quantity = e.target.value;
}