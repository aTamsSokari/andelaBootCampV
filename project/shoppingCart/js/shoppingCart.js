var dragSrcEl = null;

function dragStart(e) {
  this.style.opacity = '0.6';  // this / e.target is the source node.

  var dragSrcEl = this;
  $('h2').fadeIn('fast');

  e.dataTransfer.effectAllowed = 'copymove';
  e.dataTransfer.setData('text', this.id);
}

function dragOver(e) {
  evt.preventDefault();
  e.dataTransfer.dropEffect = 'copy';  // See the section on the DataTransfer object.
  return false;
}

function dragEnter(e) {
  if (event.target.id == cartItems) {
    event.target.style.background = 'brown';
  }
  evt.preventDefault();
}

function drop(e) {
  var id = e.dataTransfer.getData('text'),
      item = $('#' + id),
      cartList = $('#cartItems ul'),
      totalItems = $('#total span'),
      prevCartItem = null,
      emptyCart = (function () {
        var list = $('li', cartList),
					l = list.length,
					i;

        for (i = 0; i < l; i++) {
          var temp = $(l[i]);
          if (temp.data('id') === id) {
            prevCartItem = temp;
            return false;
          }
        }
        return true;
      }),
      quanInStore,
      quanInCart,
      quanLeft;

  $('h2').fadeOut('fast');

  if (emptyCart) {
    prevCartItem = $('<li />', {
      text: $('p:first', item).text(),
      data: { id: id }
    }).prepend($('<span />', {
      'class': 'quantity',
      text: '0'
    })).appendTo(cartList);
  }

  quanInStore = $('p:last span', item);
  quanLeft = parseInt(quanInStore.text(), 10) - 1;
  quanInCart = $('.quantity', prevItem);
  quanInCart.text(parseInt(quanInCart.text(), 10) + 1);
  quanInStore.text(quanLeft);

  if (quanLeft === 0) {
    item.fadeOut('fast');
  }

  total.text((parseFloat(total.text(), 10)));

  evt.stopPropagation();
  return false;

};
var items = document.querySelectorAll('.item');
[].forEach.call(items, function (items) {
  items.addEventListener('dragstart', dragStart, false);
});
$(items).hover(function () { $('div', this).fadeIn(); },
  function () {
    $('div', this).fadeOut();
  });


var cart = document.querySelector('#cartItems');
cart.addEventListener('dragenter', dragEnter, false);
cart.addEventListener('dragover', dragOver, false);
cart.addEventListener('drop', drop, false);