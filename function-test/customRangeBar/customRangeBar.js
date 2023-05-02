document.querySelectorAll(".__range-step").forEach(function (ctrl) {
  var el = ctrl.querySelector("input");
  var output = ctrl.querySelector("output");
  var newPoint, newPlace, offset;
  el.oninput = function () {
    // colorize step options
    ctrl.querySelectorAll("option").forEach(function (opt) {
      opt.style.height = "20px";
      opt.style.width = "1px";
      opt.style.backgroundColor = "#000";
      //   if (opt.value <= el.valueAsNumber) opt.style.backgroundColor = "#48530d";
      //   else opt.style.backgroundColor = "#a4b162";
    });
  };
  el.oninput();
});

document.querySelectorAll(".__test1").forEach(function (ctrl) {
  var el = ctrl.querySelector("input");
  var output = ctrl.querySelector("output");
  var newPoint, newPlace, offset;
  el.oninput = function () {
    // colorize step options
    ctrl.querySelectorAll("option").forEach(function (opt) {
      console.log(opt);
      opt.style.height = "20px";
      opt.style.width = "1px";
      opt.style.backgroundColor = "#000";
      //   if (opt.value <= el.valueAsNumber) opt.style.backgroundColor = "#48530d";
      //   else opt.style.backgroundColor = "#a4b162";
    });
  };
  el.oninput();
});
