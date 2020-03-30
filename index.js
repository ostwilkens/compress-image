function process(el) {
  const files = [...el.files];
  new Compress().compress(files).then((conversions) => {
    const { photo } = conversions[0];
    const url = URL.createObjectURL(photo.data);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = photo.name;
    a.click();
    window.URL.revokeObjectURL(url);
  })
}
