$('.item')
  .bind('dragstart', function (evt) {
    evt.dataTransfer.setData('text', this.id);
    $('h2').fadeIn('fast');
  })
  .hover(function () { $('div', this).fadeIn(); },
  function () { $('div', this).fadeOut(); }
);

$('#cartItems')
	.bind('dragover', function (evt) {
	  evt.preventDefault();
	})
	.bind('dragenter', function (evt) {
	  evt.preventDefault();
	})
  .bind('drop', function (evt) {
    var id = evt.dataTransfer.getData('text'),
      item = $('#' + id),
			cartList = $("#cartItems ul"),
			prevCartItem = null,
			notInCart = (function () {
			  var lis = $('li', cartList),
					len = lis.length,
					i;

			  for (i = 0; i < len; i++) {
			    var temp = $(lis[i]);
			    if (temp.data('id') === id) {
			      prevCartItem = temp;
			      return false;
			    }
			  }
			  return true;
			}()),
			quantLeftEl, quantBoughtEl, quantLeft;

    $("h2").fadeOut('fast');

  if (notInCart) {
    prevCartItem = $('<li />', {
      text : $('p:first', item).text(),
      data : { id : id }
    }).prepend($('<span />', {
      'class' : 'quantity',
      text : '0'
    })).prepend($('<span />', {
      'class' : 'price',
      text : price
    })).appendTo(cartList);
  }

  quantLeftEl = $('p:last span', item);
  quantLeft   = parseInt(quantLeftEl.text(), 10) - 1;
  quantBoughtEl = $('.quantity', prevCartItem);
  quantBoughtEl.text(parseInt(quantBoughtEl.text(), 10) + 1);
  quantLeftEl.text(quantLeft);

  if (quantLeft === 0) {
    item.fadeOut('fast');
  }

  total.text((parseFloat(total.text(), 10) + parseFloat(price.split('$')[1])).toFixed(2));

  evt.stopPropagation();
  return false;
  });

//event functions from html5rocks.com's tutorial

//to start drag
function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

//to carry out enter, hover, leave
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

//handle drop and drag End
function handleDrop(e) {
  // this / e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }
  // See the section on the DataTransfer object.

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}


var item = document.querySelectorAll('.item');
[].forEach.call(item, function (item) {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});



