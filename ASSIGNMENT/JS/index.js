var mobile = document.getElementById('input');
//otp sent to
function mobileInput(e) {
        
    var value = e.target.value;
    var pNum = document.getElementById('num');
    pNum.innerText = value;
        if (value.length !== 10 ) {
            pNum.innerText = '';

        }
    var pOtp = document.getElementById('otp-num');   
    pOtp.appendChild(pNum)
}
mobile.addEventListener('blur', mobileInput);
mobile.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        mobileInput(e);
    }
    if (e.keyCode === 8) {
        var value = e.target.value;
        var pNum = document.getElementById('num');
        pNum.innerText = value;
            if (value.length !== 10 ) {
                pNum.innerText = ''
            }
    }
    
})

//changing mobile number
var changeNum = document.getElementById('changeNum');
changeNum.addEventListener('click', changeMobile);
function changeMobile() {
    console.log('changing number')
    mobile.value = '';
    var pNum = document.getElementById('num');
    pNum.innerText = '';
};

function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
  }
  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 6) {
        getCodeBoxElement(index+ 1).focus();
      } else {
        getCodeBoxElement(index).blur();
        // Submit code
        //console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
  }
  function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement.value) {
          currentElement.focus();
          break;
      }
    }
  }