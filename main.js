let category = [];
let product = [];
let productPrice = [];
let order = [];
let cart = [];
let cartPrice = 0;
let payment = [];
let soldProductAll = [];
let editItemId;
let inputs;
//---------------------BOOTSTRAP----------------//

// localStorage.clear();
const saveToStorage = (storageName, source) => localStorage.setItem(storageName, JSON.stringify(source));

const loadFromStorage = (storageName) => {
  let result = localStorage.getItem(storageName);
  return result ? JSON.parse(result) : [];
};

const loadData = () => {
  category = loadFromStorage("category");
  if (!category.length) {
    category = [
      {
        id: 1,
        name: "signatures",
      },
      {
        id: 2,
        name: "hot-coffees",
      },
      {
        id: 3,
        name: "cold-coffees",
      },
      {
        id: 4,
        name: "frozens",
      },
      {
        id: 5,
        name: "others-hot",
      },
      {
        id: 6,
        name: "others-cold",
      },
      {
        id: 7,
        name: "soft-drinks",
      },
      {
        id: 8,
        name: "3rd-waves",
      },
      {
        id: 9,
        name: "sweets",
      },
      {
        id: 10,
        name: "toasts-sandwiches",
      },
    ];
  }

  product = loadFromStorage("product");
  if (!product.length) {
    product = [
      {
        id: 1,
        categoryId: 2,
        name: "americano",
      },
      {
        id: 2,
        categoryId: 2,
        name: "mocha",
      },
      {
        id: 3,
        categoryId: 2,
        name: "cappuccino",
      },
      {
        id: 4,
        categoryId: 3,
        name: "ice-mocha",
      },
      {
        id: 5,
        categoryId: 3,
        name: "cold-brew",
      },
      {
        id: 6,
        categoryId: 3,
        name: "cappuccino-on-ice",
      },
      {
        id: 7,
        categoryId: 4,
        name: "frozen-pina-colada",
      },
      {
        id: 8,
        categoryId: 4,
        name: "frozen-mudslide",
      },
      {
        id: 9,
        categoryId: 4,
        name: "frozen-lime-daiquiri",
      },
      {
        id: 10,
        categoryId: 5,
        name: "tea",
      },
      {
        id: 11,
        categoryId: 5,
        name: "turkish-coffee",
      },
      {
        id: 12,
        categoryId: 5,
        name: "salep",
      },
      {
        id: 13,
        categoryId: 6,
        name: "lemonade",
      },
      {
        id: 14,
        categoryId: 6,
        name: "coke",
      },
      {
        id: 15,
        categoryId: 6,
        name: "fanta",
      },
      {
        id: 16,
        categoryId: 7,
        name: "ayran",
      },
      {
        id: 17,
        categoryId: 7,
        name: "orange-juice",
      },
      {
        id: 18,
        categoryId: 7,
        name: "apple-juice",
      },
      {
        id: 19,
        categoryId: 8,
        name: "mexican-coffee",
      },
      {
        id: 20,
        categoryId: 8,
        name: "colombian-coffee",
      },
      {
        id: 21,
        categoryId: 8,
        name: "brazilian-coffee",
      },
      {
        id: 22,
        categoryId: 9,
        name: "cheesecake",
      },
      {
        id: 23,
        categoryId: 9,
        name: "brownie",
      },
      {
        id: 24,
        categoryId: 9,
        name: "chocolate-cake",
      },
      {
        id: 25,
        categoryId: 10,
        name: "cheese-toast",
      },
      {
        id: 26,
        categoryId: 10,
        name: "mixed-toast",
      },
      {
        id: 27,
        categoryId: 10,
        name: "mixed-sandwich",
      },
    ];
  }

  productPrice = loadFromStorage("productPrice");
  if (!productPrice.length) {
    productPrice = [
      {
        id: 1,
        productId: 1,
        name: "small",
        price: 35,
        vat: 0.08,
      },
      {
        id: 2,
        productId: 1,
        name: "medium",
        price: 40,
        vat: 0.08,
      },
      {
        id: 3,
        productId: 1,
        name: "large",
        price: 45,
        vat: 0.08,
      },
      {
        id: 4,
        productId: 2,
        name: "small",
        price: 38,
        vat: 0.08,
      },
      {
        id: 5,
        productId: 2,
        name: "medium",
        price: 43,
        vat: 0.08,
      },
      {
        id: 6,
        productId: 2,
        name: "large",
        price: 48,
        vat: 0.08,
      },
      {
        id: 7,
        productId: 3,
        name: "small",
        price: 36,
        vat: 0.08,
      },
      {
        id: 8,
        productId: 3,
        name: "medium",
        price: 45,
        vat: 0.08,
      },
      {
        id: 9,
        productId: 3,
        name: "large",
        price: 54,
        vat: 0.08,
      },
      {
        id: 10,
        productId: 4,
        name: "small",
        price: 34,
        vat: 0.08,
      },
      {
        id: 11,
        productId: 4,
        name: "medium",
        price: 45,
        vat: 0.08,
      },
      {
        id: 12,
        productId: 4,
        name: "large",
        price: 55,
        vat: 0.08,
      },
      {
        id: 13,
        productId: 5,
        name: "small",
        price: 55,
        vat: 0.08,
      },
      {
        id: 14,
        productId: 5,
        name: "medium",
        price: 60,
        vat: 0.08,
      },
      {
        id: 15,
        productId: 5,
        name: "large",
        price: 65,
        vat: 0.08,
      },
      {
        id: 16,
        productId: 6,
        name: "small",
        price: 57,
        vat: 0.08,
      },
      {
        id: 17,
        productId: 6,
        name: "medium",
        price: 64,
        vat: 0.08,
      },
      {
        id: 18,
        productId: 6,
        name: "large",
        price: 73,
        vat: 0.08,
      },
      {
        id: 19,
        productId: 7,
        name: "small",
        price: 62,
        vat: 0.08,
      },
      {
        id: 20,
        productId: 7,
        name: "medium",
        price: 68,
        vat: 0.08,
      },
      {
        id: 21,
        productId: 7,
        name: "large",
        price: 74,
        vat: 0.08,
      },
      {
        id: 22,
        productId: 8,
        name: "small",
        price: 63,
        vat: 0.08,
      },
      {
        id: 23,
        productId: 8,
        name: "medium",
        price: 69,
        vat: 0.08,
      },
      {
        id: 24,
        productId: 8,
        name: "large",
        price: 75,
        vat: 0.08,
      },
      {
        id: 25,
        productId: 9,
        name: "small",
        price: 43,
        vat: 0.08,
      },
      {
        id: 26,
        productId: 9,
        name: "medium",
        price: 49,
        vat: 0.08,
      },
      {
        id: 27,
        productId: 9,
        name: "large",
        price: 54,
        vat: 0.08,
      },
      {
        id: 28,
        productId: 10,
        name: "small",
        price: 18,
        vat: 0.08,
      },
      {
        id: 29,
        productId: 10,
        name: "medium",
        price: 25,
        vat: 0.08,
      },
      {
        id: 30,
        productId: 10,
        name: "large",
        price: 32,
        vat: 0.08,
      },
      {
        id: 31,
        productId: 11,
        name: "small",
        price: 65,
        vat: 0.08,
      },
      {
        id: 32,
        productId: 11,
        name: "medium",
        price: 75,
        vat: 0.08,
      },
      {
        id: 33,
        productId: 11,
        name: "large",
        price: 85,
        vat: 0.08,
      },
      {
        id: 34,
        productId: 12,
        name: "small",
        price: 49,
        vat: 0.08,
      },
      {
        id: 35,
        productId: 12,
        name: "medium",
        price: 55,
        vat: 0.08,
      },
      {
        id: 36,
        productId: 12,
        name: "large",
        price: 60,
        vat: 0.08,
      },
      {
        id: 37,
        productId: 13,
        name: "small",
        price: 35,
        vat: 0.08,
      },
      {
        id: 38,
        productId: 13,
        name: "medium",
        price: 40,
        vat: 0.08,
      },
      {
        id: 39,
        productId: 13,
        name: "large",
        price: 45,
        vat: 0.08,
      },
      {
        id: 40,
        productId: 14,
        name: "small",
        price: 20,
        vat: 0.08,
      },
      {
        id: 41,
        productId: 14,
        name: "medium",
        price: 25,
        vat: 0.08,
      },
      {
        id: 42,
        productId: 14,
        name: "large",
        price: 30,
        vat: 0.08,
      },
      {
        id: 43,
        productId: 15,
        name: "small",
        price: 20,
        vat: 0.08,
      },
      {
        id: 44,
        productId: 15,
        name: "medium",
        price: 25,
        vat: 0.08,
      },
      {
        id: 45,
        productId: 15,
        name: "large",
        price: 30,
        vat: 0.08,
      },
      {
        id: 46,
        productId: 16,
        name: "small",
        price: 15,
        vat: 0.08,
      },
      {
        id: 47,
        productId: 16,
        name: "medium",
        price: 20,
        vat: 0.08,
      },
      {
        id: 48,
        productId: 16,
        name: "large",
        price: 25,
        vat: 0.08,
      },
      {
        id: 49,
        productId: 17,
        name: "small",
        price: 30,
        vat: 0.08,
      },
      {
        id: 50,
        productId: 17,
        name: "medium",
        price: 34,
        vat: 0.08,
      },
      {
        id: 51,
        productId: 17,
        name: "large",
        price: 38,
        vat: 0.08,
      },
      {
        id: 52,
        productId: 18,
        name: "small",
        price: 30,
        vat: 0.08,
      },
      {
        id: 53,
        productId: 18,
        name: "medium",
        price: 34,
        vat: 0.08,
      },
      {
        id: 54,
        productId: 18,
        name: "large",
        price: 39,
        vat: 0.08,
      },
      {
        id: 55,
        productId: 19,
        name: "small",
        price: 66,
        vat: 0.08,
      },
      {
        id: 56,
        productId: 19,
        name: "medium",
        price: 75,
        vat: 0.08,
      },
      {
        id: 57,
        productId: 19,
        name: "large",
        price: 83,
        vat: 0.08,
      },
      {
        id: 58,
        productId: 20,
        name: "small",
        price: 69,
        vat: 0.08,
      },
      {
        id: 59,
        productId: 20,
        name: "medium",
        price: 76,
        vat: 0.08,
      },
      {
        id: 60,
        productId: 20,
        name: "large",
        price: 86,
        vat: 0.08,
      },
      {
        id: 61,
        productId: 21,
        name: "small",
        price: 64,
        vat: 0.08,
      },
      {
        id: 62,
        productId: 21,
        name: "medium",
        price: 75,
        vat: 0.08,
      },
      {
        id: 63,
        productId: 21,
        name: "large",
        price: 86,
        vat: 0.08,
      },
      {
        id: 64,
        productId: 22,
        name: "small",
        price: 45,
        vat: 0.18,
      },
      {
        id: 65,
        productId: 22,
        name: "medium",
        price: 55,
        vat: 0.18,
      },
      {
        id: 66,
        productId: 22,
        name: "large",
        price: 65,
        vat: 0.18,
      },
      {
        id: 67,
        productId: 23,
        name: "small",
        price: 45,
        vat: 0.18,
      },
      {
        id: 68,
        productId: 23,
        name: "medium",
        price: 55,
        vat: 0.18,
      },
      {
        id: 69,
        productId: 23,
        name: "large",
        price: 65,
        vat: 0.18,
      },
      {
        id: 70,
        productId: 24,
        name: "small",
        price: 55,
        vat: 0.18,
      },
      {
        id: 71,
        productId: 24,
        name: "medium",
        price: 65,
        vat: 0.18,
      },
      {
        id: 72,
        productId: 24,
        name: "large",
        price: 75,
        vat: 0.18,
      },
      {
        id: 73,
        productId: 25,
        name: "small",
        price: 35,
        vat: 0.18,
      },
      {
        id: 74,
        productId: 25,
        name: "medium",
        price: 40,
        vat: 0.18,
      },
      {
        id: 75,
        productId: 25,
        name: "large",
        price: 45,
        vat: 0.18,
      },
      {
        id: 76,
        productId: 26,
        name: "small",
        price: 45,
        vat: 0.18,
      },
      {
        id: 77,
        productId: 26,
        name: "medium",
        price: 55,
        vat: 0.18,
      },
      {
        id: 78,
        productId: 26,
        name: "large",
        price: 65,
        vat: 0.18,
      },
      {
        id: 79,
        productId: 27,
        name: "small",
        price: 30,
        vat: 0.18,
      },
      {
        id: 80,
        productId: 27,
        name: "medium",
        price: 40,
        vat: 0.18,
      },
      {
        id: 81,
        productId: 27,
        name: "large",
        price: 50,
        vat: 0.18,
      },
    ];
  }

  order = loadFromStorage("order");
};
loadData();
const saveToStorageAll = () => {
  saveToStorage("category", category);
  saveToStorage("product", product);
  saveToStorage("productPrice", productPrice);
  saveToStorage("order", order);
};
saveToStorageAll();
//------------DATA CHANGES------------------//

const addData = (newData, target) => target.push(newData);
const deleteData = (id, target) => {
  let index = target.indexOf(getData(id, target));
  if (index > -1) {
    target.splice(index, 1);
  }
};
const editData = (newData, id, target) => {
  deleteData(id, target), addData(newData, target);
};

//---------------DATA FORMATTERS---------------------//
const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const currencyFormatter = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });

//---------------LOGİC---------------------//

const insertOrder = () => {
  const id = order.length ? order[order.length - 1].id + 1 : 1;
  const orderDate = new Date();
  order.push({
    id: id,
    date: `${dateFormatter.format(orderDate)}`,
    total: totalCart(),
    vat: vatCart(),
    grantTotal: grantTotalCart(),
    contain: productCart(),
    payment: payment,
  });
  saveToStorage("order", order);
};

const getOrder = (id) => {
  if (!order.length) insertOrder();
  return id ? order.filter((item) => item.id == id)[0] : order[order.length - 1];
};

const getData = (id, source) => source.filter((data) => data.id == id)[0];

const filterData = (id, key, source) => source.filter((item) => item[key] == id);

const searchData = (name, source) => source.filter((item) => item.name.includes(name));

const cartHandler = () => {
  totalCart();
  vatCart();
  grantTotalCart();
  productCart();
  cartPrice = grantTotalCart();
};

const totalCart = () =>
  cart
    .map((item) => item.price - item.price * item.vat)
    .reduce((total, current) => total + current, 0)
    .toFixed(2);
const vatCart = () =>
  cart
    .map((item) => item.price * item.vat)
    .reduce((total, current) => total + current, 0)
    .toFixed(2);
const grantTotalCart = () =>
  cart
    .map((item) => item.price)
    .reduce((total, current) => total + current, 0)
    .toFixed(2);
const productCart = () => cart.map((item) => item.id);

const paymentCart = (amount, method) => {
  cartPrice -= amount;
  payment.push({
    amount: amount,
    method: method,
  });
};

const soldAmountAll = () => {
  soldProductAll = [];
  let counts = {};
  order.map((order) =>
    order.contain.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    })
  );
  soldProductAll.push(counts);
  return soldProductAll[0];
};

const soldAmountSingle = (id) => soldAmountAll()[+id];

//--------------------------------------------------------------------UI-----------------------------------------------------------------//

//---------------------Search Bar---------------------//

const searchFunc = (e) => {
  $(".products").html("");
  if (e.target.value && e.target.value.length > 1) {
    searchData(e.target.value, product).map((item) =>
      $(".products").append(`<div class="col-4 p-2">
                  <button data-product="${item.id}" class="productBtn">${item.name.replaceAll("-", " ")}</button>
                </div>`)
    );
  }
};

$("#search").on("input", searchFunc);

//---------------------Category Section---------------------//

const categoryDisplay = () =>
  category.map((item) =>
    $(".categories").append(`<div class="col-6 p-2">
                <button data-category="${item.id}" class="categoryBtn">${item.name.replaceAll("-", " ")}</button>
              </div>`)
  );
categoryDisplay();
const categorySelector = (e) => {
  $(".products").html("");
  $(".product-prices").html("");
  productDisplay(e.target.dataset.category);
};
$(".categoryBtn").on("click", categorySelector);

//---------------------Product Section---------------------//

const productDisplay = (id) => {
  $(".products").html("");
  filterData(id, "categoryId", product).map((item) =>
    $(".products").append(`<div class="col-4 p-2">
                  <button data-product="${item.id}" class="productBtn">${item.name.replaceAll("-", " ")}</button>
                </div>`)
  );
  $(".productBtn").on("click", productSelector);
};
const productSelector = (e) => productPriceDisplay(e.target.dataset.product);

//---------------------Product Price Section---------------------//

const productPriceDisplay = (id) => {
  $(".product-prices").html("");
  filterData(id, "productId", productPrice).map((item) =>
    $(".product-prices").append(`<div class="col-4 p-2">
                  <button data-product-price="${item.id}" class="productPriceBtn">${getData(id, product).name.replaceAll("-", " ")}(${item.name})</button>
                </div>`)
  );
  $(".productPriceBtn").on("click", addCart);
};
const addCart = (e) => {
  addData(getData(e.target.dataset.productPrice, productPrice), cart);
  cartHandler();
  cartDisplay();
};

const removeCart = (e) => {
  if (cart.filter((item) => item.id == e.target.dataset.productPrice).length > 1) {
    deleteData(getData(e.target.dataset.productPrice, productPrice).id, cart);
    cartHandler();
    cartDisplay();
  }
};
const deleteCart = (e) => {
  let newCart = [...new Set(cart)];
  deleteData(getData(e.target.dataset.productPrice, productPrice).id, newCart);
  cart = newCart;
  cartHandler();
  cartDisplay();
};

//---------------------Cart Section---------------------//

const cartDisplay = () => {
  $(".cart").html("");
  cart.map((item) => {
    if (document.querySelector(`p[data-product-price="${item.id}"]`)) {
      amountCart(item.id);
      paymentDisplay();
    } else {
      $(".cart").append(
        `<li class="d-flex justify-content-between"><p class="w-75 d-flex justify-content-between" data-product-price="${item.id}">${getData(item.productId, product).name.replaceAll("-", " ")}(${
          item.name
        })<span>${currencyFormatter.format(item.price)}</span></p>  <div><button class="incrementBtn" data-product-price="${item.id}">+</button> <button class="decrementBtn" data-product-price="${
          item.id
        }">-</button> <button class="delBtn" data-product-price="${item.id}">Del</button></div>`
      );
    }
  });
  $(".incrementBtn").on("click", addCart);
  $(".decrementBtn").on("click", removeCart);
  $(".delBtn").on("click", deleteCart);
  paymentDisplay();
};

const amountCart = (id) => {
  let itemIncrement = document.querySelector(`p[data-product-price="${id}"]`);
  itemIncrement.innerText = `${getData(getData(id, productPrice).productId, product).name.replaceAll("-", " ")}(${getData(id, productPrice).name}) (${filterData(id, "id", cart).length})`;
  let price = document.createElement("span");
  let priceText = document.createTextNode(`${currencyFormatter.format(filterData(id, "id", cart).length * getData(id, productPrice).price)}`);
  price.appendChild(priceText);
  itemIncrement.appendChild(price);
};

//---------------------Payment Section---------------------//

const paymentFunc = () => {
  if (+$("#payment-amount").val() <= cartPrice) {
    paymentCart($("#payment-amount").val(), $("#payment-method").val());
    paymentDisplay();
  }
};

$("#paymentBtn").on("click", paymentFunc);

const paymentDisplay = () => {
  $(".cart-granttotal").html(`${currencyFormatter.format(cartPrice)}`);
};

const finishOrder = () => {
  if (cartPrice == 0 && cart.length > 0) {
    insertOrder();
    cart = [];
    cartPrice = 0;
    payment = [];
    cartDisplay();
    $(".products").html("");
    $(".product-prices").html("");
    saveToStorageAll();
  }
};
$("#finishOrderBtn").on("click", finishOrder);

const cancelOrder = () => {
  cart = [];
  cartPrice = 0;
  cartDisplay();
  $(".products").html("");
  $(".product-prices").html("");
};
$("#cancelOrderBtn").on("click", cancelOrder);

//---------------------------------------------------Edit Section------------------------------------------//

const addBtnFunc = (e) => {
  switch (e.target.dataset.source) {
    case "category":
      $(".edit-category").prepend(`<tr>
                      <th scope="row"><input data-id="${category.length + 1}" data-source="category" /></th>
                      <td><input data-id="${category.length + 1}" data-source="category" /></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${category.length + 1}" data-source="category" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${category.length + 1}" data-source="category" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${category.length + 1}" data-source="category" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`);
      $(`input[data-id="${category.length + 1}"][data-source="category"]`)
        .first()
        .val(category.length + 1);
      $(`.saveBtn[data-id="${category.length + 1}"][data-source="category"]`).css("display", "inline-block");
      break;
    case "product":
      $(".edit-product").prepend(`<tr>
                      <th scope="row"><input data-id="${product.length + 1}" data-source="product" /></th>
                      <td><input data-id="${product.length + 1}" data-source="product" /></td>
                      <td><input data-id="${product.length + 1}" data-source="product" /></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${product.length + 1}" data-source="product" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${product.length + 1}" data-source="product" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${product.length + 1}" data-source="product" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`);
      $(`input[data-id="${product.length + 1}"][data-source="product"]`)
        .first()
        .val(product.length + 1);
      $(`.saveBtn[data-id="${product.length + 1}"][data-source="product"]`).css("display", "inline-block");
      break;
    case "productPrice":
      $(".edit-product-price").prepend(`<tr>
                      <th scope="row"><input data-id="${productPrice.length + 1}" data-source="productPrice" /></th>
                      <td><input data-id="${productPrice.length + 1}" data-source="productPrice" /></td>
                      <td><input data-id="${productPrice.length + 1}" data-source="productPrice" /></td>
                      <td><input data-id="${productPrice.length + 1}" data-source="productPrice" /></td>
                      <td><input data-id="${productPrice.length + 1}" data-source="productPrice" /></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${productPrice.length + 1}" data-source="productPrice" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${productPrice.length + 1}" data-source="productPrice" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${productPrice.length + 1}" data-source="productPrice" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`);
      $(`input[data-id="${productPrice.length + 1}"][data-source="productPrice"]`)
        .first()
        .val(productPrice.length + 1);
      $(`.saveBtn[data-id="${productPrice.length + 1}"][data-source="productPrice"]`).css("display", "inline-block");
      break;
  }
  $(".saveBtn").on("click", editSave);
};

$(".addBtn").on("click", addBtnFunc);

const editFiller = () => {
  $(".edit-category").html("");
  $(".edit-product").html("");
  $(".edit-product-price").html("");
  category.map((item) =>
    $(".edit-category").append(`<tr>
                      <th scope="row"><span data-id="${item.id}" data-source="category" class="editable">${item.id}</span></th>
                      <td><span data-id="${item.id}" data-source="category" class="editable">${item.name}</span></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${item.id}" data-source="category" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${item.id}" data-source="category" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${item.id}" data-source="category" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`)
  );
  product.map((item) =>
    $(".edit-product").append(`<tr>
                      <th scope="row"><span data-id="${item.id}" data-source="product" class="editable">${item.id}</span></th>
                      <td><span data-id="${item.id}" data-source="product" class="editable">${item.categoryId}</span></td>
                      <td><span data-id="${item.id}" data-source="product" class="editable">${item.name}</span></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${item.id}" data-source="product" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${item.id}" data-source="product" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${item.id}" data-source="product" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`)
  );
  productPrice.map((item) =>
    $(".edit-product-price").append(`<tr>
                      <th scope="row"><span data-id="${item.id}" data-source="productPrice" class="editable">${item.id}</span></th>
                      <td><span data-id="${item.id}" data-source="productPrice" class="editable">${item.productId}</span></td>
                      <td><span data-id="${item.id}" data-source="productPrice" class="editable">${item.name}</span></td>
                      <td><span data-id="${item.id}" data-source="productPrice" class="editable">${item.price}</span></td>
                      <td><span data-id="${item.id}" data-source="productPrice" class="editable">${item.vat}</span></td>
                      <td>
                        <div class="edit-buttons">
                          <button data-id="${item.id}" data-source="productPrice" class="btn btn-info editBtn">Edit</button>
                          <button data-id="${item.id}" data-source="productPrice" class="btn btn-success saveBtn">Save</button>
                          <button data-id="${item.id}" data-source="productPrice" class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                      </td>
                    </tr>`)
  );
  $(".editBtn").on("click", editChange);
  $(".saveBtn").on("click", editSave);
  $(".deleteBtn").on("click", editDelete);
};

const editChange = (e) => {
  let changingData = document.querySelectorAll(`span[data-id="${e.target.dataset.id}"][data-source="${e.target.dataset.source}"]`);
  changingData.forEach((item) => {
    let editInput = $(`<input data-id="${e.target.dataset.id}" data-source="${e.target.dataset.source}" />`).val($(item).text());
    $(item).replaceWith(editInput);
  });
  $(`.saveBtn[data-id="${e.target.dataset.id}"][data-source="${e.target.dataset.source}"]`).css("display", "inline-block");
};
const editSave = (e) => {
  inputs = document.querySelectorAll(`input[data-id="${e.target.dataset.id}"][data-source="${e.target.dataset.source}"]`);
  switch (e.target.dataset.source) {
    case "category":
      editData({ id: +inputs[0].value, name: inputs[1].value }, e.target.dataset.id, category);
      break;
    case "product":
      editData({ id: +inputs[0].value, categoryId: +inputs[1].value, name: inputs[2].value }, e.target.dataset.id, product);
      break;
    case "productPrice":
      editData({ id: +inputs[0].value, productId: +inputs[1].value, name: inputs[2].value, price: +inputs[3].value, vat: +inputs[4].value }, e.target.dataset.id, productPrice);
      break;
  }
  inputs.forEach((item) => {
    let savedData = $(`<span data-id="${e.target.dataset.id}" data-source="${e.target.dataset.source}"/>${$(item).val()}</span>`);
    $(item).replaceWith(savedData);
  });
  $(`.saveBtn[data-id="${e.target.dataset.id}"][data-source="${e.target.dataset.source}"]`).css("display", "none");
  category.sort((a, b) => a.id - b.id);
  product.sort((a, b) => a.id - b.id);
  productPrice.sort((a, b) => a.id - b.id);
  saveToStorageAll();
  // editFiller();
};
const editDelete = (e) => {
  switch (e.target.dataset.source) {
    case "category":
      deleteData(e.target.dataset.id, category);
      break;
    case "product":
      deleteData(e.target.dataset.id, product);
      break;
    case "productPrice":
      deleteData(e.target.dataset.id, productPrice);
      break;
  }
  category.sort((a, b) => a.id - b.id);
  product.sort((a, b) => a.id - b.id);
  productPrice.sort((a, b) => a.id - b.id);
  saveToStorageAll();
  editFiller();
};
$("#pills-profile-tab").on("click", editFiller);

// //---------------------Add Section---------------------//

// $("#edit-category-id1").val(`${category.length + 1}`);

// const addDataCategoryBtnFunc = () => {
//   let categoryIdInput = $("#edit-category-id1").val();
//   let categoryNameInput = $("#edit-category-name1").val();
//   addData({ id: +categoryIdInput, name: categoryNameInput }, category);
//   saveToStorageAll();
//   $("#edit-category-id1").val(`${category.length + 1}`);
// };

// $(".addDataBtn1").on("click", addDataCategoryBtnFunc);

// $("#edit-product-id1").val(`${product.length + 1}`);

// const addDataProductBtnFunc = () => {
//   let productIdInput = $("#edit-product-id1").val();
//   let categoryIdInput = $("#edit-product-catid1").val();
//   let productNameInput = $("#edit-product-name1").val();
//   addData({ id: +productIdInput, categoryId: +categoryIdInput, name: productNameInput }, product);
//   saveToStorageAll();
//   $("#edit-product-id1").val(`${product.length + 1}`);
// };

// $(".addDataBtn2").on("click", addDataProductBtnFunc);

// $("#edit-product-price-id1").val(`${productPrice.length + 1}`);
// const addDataProductPriceBtnFunc = () => {
//   let productPriceIdInput = $("#edit-product-price-id1").val();
//   let productPriceProductIdInput = $("#edit-product-price-productid1").val();
//   let productPriceNameInput = $("#edit-product-price-name1").val();
//   let productPricePriceInput = $("#edit-product-price-price1").val();
//   let productPriceVatInput = $("#edit-product-price-vat").val();
//   addData({ id: +productPriceIdInput, productId: +productPriceProductIdInput, name: productPriceNameInput, price: +productPricePriceInput, vat: +productPriceVatInput }, productPrice);
//   saveToStorageAll();
//   $("#edit-product-price-id1").val(`${productPrice.length + 1}`);
// };

// $(".addDataBtn3").on("click", addDataProductPriceBtnFunc);

// //---------------------Delete Section---------------------//

// const deleteFiller = (e) => {
//   let editItem;
//   let editId = e.target.value;
//   if (e.target.dataset.source == "category") {
//     editItem = getData(editId, category);
//     $("#delete-category-id2").val(editItem.id);
//     $("#delete-category-name2").val(editItem.name);
//   } else if (e.target.dataset.source == "product") {
//     editItem = getData(editId, product);
//     $("#delete-product-id2").val(editItem.id);
//     $("#delete-product-catid2").val(editItem.categoryId);
//     $("#delete-product-name2").val(editItem.name);
//   } else if (e.target.dataset.source == "productPrice") {
//     editItem = getData(editId, productPrice);
//     $("#delete-product-price-id2").val(editItem.id);
//     $("#delete-product-price-productid2").val(editItem.productId);
//     $("#delete-product-price-name2").val(editItem.name);
//     $("#delete-product-price-price2").val(editItem.price);
//     $("#delete-product-price-vat2").val(editItem.vat);
//   }
// };

// const deleteDataBtnFunc = (e) => {
//   if (e.target.dataset.source == "category") {
//     deleteData(+$("#delete-category-id2").val(), category);
//   } else if (e.target.dataset.source == "product") {
//     deleteData(+$("#delete-product-id2").val(), product);
//   } else if (e.target.dataset.source == "productPrice") {
//     deleteData(+$("#delete-product-price-id2").val(), productPrice);
//   }
//   saveToStorageAll();
// };

// $("#delete-category-id2").on("input", deleteFiller);
// $("#delete-product-id2").on("input", deleteFiller);
// $("#delete-product-price-id2").on("input", deleteFiller);
// $(".deleteDataBtn").on("click", deleteDataBtnFunc);

// //---------------------Edit Section---------------------//
// const editFiller = (e) => {
//   let editItem;
//   let editId = e.target.value;
//   if (e.target.dataset.source == "category") {
//     editItem = getData(editId, category);
//     $("#edit-category-id2").val(editItem.id);
//     $("#edit-category-name2").val(editItem.name);
//   } else if (e.target.dataset.source == "product") {
//     editItem = getData(editId, product);
//     $("#edit-product-id2").val(editItem.id);
//     $("#edit-product-catid2").val(editItem.categoryId);
//     $("#edit-product-name2").val(editItem.name);
//   } else if (e.target.dataset.source == "productPrice") {
//     editItem = getData(editId, productPrice);
//     $("#edit-product-price-id2").val(editItem.id);
//     $("#edit-product-price-productid2").val(editItem.productId);
//     $("#edit-product-price-name2").val(editItem.name);
//     $("#edit-product-price-price2").val(editItem.price);
//     $("#edit-product-price-vat2").val(editItem.vat);
//   }
// };
// const editDataBtnFunc = (e) => {
//   let editItem;
//   if (e.target.dataset.source == "category") {
//     editItem = { id: +$("#edit-category-id2").val(), name: $("#edit-category-name2").val() };
//     editData(editItem, editItem.id, category);
//   } else if (e.target.dataset.source == "product") {
//     editItem = { id: +$("#edit-product-id2").val(), categoryId: $("#edit-product-catid2").val(), name: $("#edit-product-name2").val() };
//     editData(editItem, editItem.id, product);
//   } else if (e.target.dataset.source == "productPrice") {
//     editItem = {
//       id: +$("#edit-product-price-id2").val(),
//       productId: $("#edit-product-price-productid2").val(),
//       name: $("#edit-product-price-name2").val(),
//       price: +$("#edit-product-price-price2").val(),
//       vat: +$("#edit-product-price-vat2").val(),
//     };
//     editData(editItem, editItem.id, productPrice);
//   }
//   saveToStorageAll();
// };

// $("#edit-category-id2").on("input", editFiller);
// $("#edit-product-id2").on("input", editFiller);
// $("#edit-product-price-id2").on("input", editFiller);

// $(".editDataBtn1").on("click", editDataBtnFunc);
// $(".editDataBtn2").on("click", editDataBtnFunc);
// $(".editDataBtn3").on("click", editDataBtnFunc);

//---------------------Order History Section---------------------//

const orderDisplay = () => {
  $(".orders").html("");
  order.map((order) => {
    $(".orders").append(`<tr>
                  <th scope="row">${order.id}</th>
                  <td>${order.date}</td>
                  <td>${currencyFormatter.format(order.total)}</td>
                  <td>${currencyFormatter.format(order.vat)}</td>
                  <td>${currencyFormatter.format(order.grantTotal)}</td>
                  <td>${order.contain}</td>
                  <td>${order.payment.map((order) => `${currencyFormatter.format(order.amount)}-${order.method}`)}</td>
                </tr>`);
  });
};
$("#pills-contact-tab").on("click", orderDisplay);

//---------------------Product Statistics Section---------------------//

const productStatisticsDisplay = () => {
  $(".product-statistics").html("");
  productPrice.map((item) => {
    $(".product-statistics").append(`<tr>
                  <th scope="row">${item.id}</th>
                  <td>${getData(item.productId, product).name}</td>
                  <td>${item.name}</td>
                  <td>${soldAmountSingle(item.id) ? soldAmountSingle(item.id) : 0}</td>
                  <td>${currencyFormatter.format(soldAmountSingle(item.id) ? soldAmountSingle(item.id) * item.price : 0)}</td>
                </tr>`);
  });
};
$("#pills-product-tab").on("click", productStatisticsDisplay);
