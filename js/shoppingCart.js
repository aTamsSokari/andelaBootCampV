$('.item')
  .bind('dragstart', function (e) {
    this.style.opacity = '0.6';  // this / e.target is the source node.
    e.dataTransfer.setData('text', this.id);
    $('h2').fadeIn('fast');
  })
  .hover(
    function () { $('div', this).fadeIn(); }, 
    function () { $('div', this).fadeOut(); }
    );

$('#cartItems')
  .bind('dragover', function (e) {
    e.preventDefault();
  })
  .bind('dragenter', function (e) {
    e.preventDefault();
  })
  .bind('drop', function (e) {
    var id = e.dataTransfer.getData('text'),
        item = $('#' + id),
        cartList = $("#cartItems ul"),
        total = $("#total span"),
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
        }()),
        quanInStore, quanInCart, quanLeft;

    $("h2").fadeOut('fast');

    if (emptyCart) {
      prevCartItem = $('<li />', {
        text: $('p:first', item).text(),
        data: { id: id }
      }).prepend($('<span />', {
        'class': 'quantity',
        text: '0'
      })).prepend($('<span />', {
        'class': 'price',
        text: price
      })).appendTo(cartList);
    }

    quanInStore = $('p:last span', item);
    quanLeft = parseInt(quanInStore.text(), 10) - 1;
    quanInCart = $('.quantity', prevCartItem);
    quanInCart.text(parseInt(quanInCart.text(), 10) + 1);
    quanInStore.text(quanLeft);

    if (quanLeft === 0) {
      item.fadeOut('fast');
    }

    total.text((parseFloat(total.text(), 10)));

    e.stopPropagation();
    return false;
  });