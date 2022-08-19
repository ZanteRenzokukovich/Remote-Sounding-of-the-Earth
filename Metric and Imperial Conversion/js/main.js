let iconC = querySelector('.accordion-collapse collapse');
let iconO = querySelector('.accordion-collapse collapse show');

const changeClosed = {
  .accordion-button:not(.collapsed)::after { content: "\f085", font-weight: 900, font-family: "Font Awesome 6 Free", background-image: none }
}

const changeOpen = {
  .accordion-button.collapsed::after { content: "\f013", font-weight: 900, font-family: "Font Awesome 6 Free", background-image: none }
}

