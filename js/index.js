// Bài 1
function sum(a, b) {
  a = Number(a);
  b = Number(b);
  var result = a + b;
  if (Number.isNaN(result)) {
    return document.write("<p>Bài 1: <br>a hoặc b không phải số</p>");
  } else {
    return document.write(
      "<p>Bài 1: <br>" + a + " + " + b + " = " + result + "</p>"
    );
  }
}
sum(1.5, "2.5");
// Bài 2
// cách 1

Object.prototype.getCurrency = function (unit) {
  if (Number.isNaN(Number(this))) {
    return console.error(this + " Not a Number");
  } else if (typeof unit !== "string") {
    return console.error("Unit must be String");
  }
  var price = Number(this);
  return price.toLocaleString() + " " + unit;
};

// cách 2

Object.prototype.getCurrency2 = function (unit) {
  if (Number.isNaN(Number(this))) {
    return console.error(this + "Not a Number");
  } else if (typeof unit !== "string") {
    return console.error("Unit must be String");
  }
  var price = this.toString().split("").reverse();
  var result = price.reduce(function (prev, _, index) {
    if (index % 3 === 0) {
      prev.push(
        price
          .slice(index, index + 3)
          .reverse()
          .join("")
      );
    }
    return prev;
  }, []);
  return result.reverse().join(",") + " " + unit;
};
var price = 12000000;
document.write("<p>Bài 2: <br>" + price.getCurrency("d") + "</p>");

// Bài 3
document.write("<p>Bài 3: Console</p>");
Array.prototype.push2 = function (value) {
  this[this.length] = value;
};

var arr = [1, 2];
arr.push2(3);
console.log("Bài 3:", arr);

// Bài 4
document.write("<p>Bài 4: Console</p>");
Array.prototype.filter2 = function (callback) {
  if (typeof callback === "function") {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr[newArr.length] = this[i];
      }
    }
    return newArr;
  }
};

var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];

customers = customers.filter2(function (customer) {
  return !customer.includes("customer2@gmail.com");
});
console.log("Bài 4:", customers);

// Bài 5
document.write("<p>Bài 5:</p>");

var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function makeOptions(categories, level = 0) {
  var option = categories
    .map(function (item) {
      var prev = "";
      if (level === 1) {
        prev = "--|";
      } else if (level === 2) {
        prev = "--|--|";
      }
      if (item.children) {
        var children = makeOptions(item.children, level + 1);
      } else {
        var children = "";
      }
      return (
        `<option value="${item.id}">${prev}${item.name}</option>` + children
      );
    })
    .join("");
  return option;
}

document.write(`<select>
<option value = 0>Chọn chuyên mục</option>
${makeOptions(categories)}
</select>`);
