export default function (number = "0") {
  const c = document.createElement("canvas");
  c.height = 57;
  const ctx = c.getContext("2d");
  ctx.font = "bold 50px Verdana";
  ctx.fillStyle = "#FFFFFFB3";
  ctx.fillText(number, 3, 50);
  return ctx.canvas.toDataURL();
}
