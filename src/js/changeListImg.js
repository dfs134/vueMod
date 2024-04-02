
export function changeList() {
  var idx = event.target.textContent;
  const EvtTarget = event.currentTarget;
  const bgColor = document.querySelectorAll(".row .col");
  const EvtChild = event.currentTarget.childNodes;
  bgColor.forEach(function (item) {
    if (item.classList.contains("border-2")) {
      item.classList.remove("border-2");
      item.children[0].classList.remove("bg-green");
    }
  });
  EvtTarget.classList.add("border-2");
  EvtChild[0].classList.add("bg-green");
  // console.log(img)
  console.log(idx)
  // this.img = idx;
}