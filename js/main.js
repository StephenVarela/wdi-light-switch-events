

var bodyElement = document.querySelector('.light');

bodyElement.addEventListener('click', function(){
    var status_text = bodyElement.querySelector('.status')

    let switch_status = bodyElement.querySelector('.plate .switch')

    if(switch_status.classList.contains('on')){
      switch_status.classList.add("off");
      bodyElement.classList.add('dark');
      switch_status.classList.remove("on");
      bodyElement.classList.remove('light');
    }else if(switch_status.classList.contains('off')){
      switch_status.classList.add("on");
      bodyElement.classList.add('light');
      switch_status.classList.remove("off");
      bodyElement.classList.remove('dark');
    }

    if(switch_status.classList.contains('on')){
      status_text.innerText = "It's so bright in here!"
    }else if(switch_status.classList.contains('off')){
      status_text.innerText = "Hey! Who turned off the light!"
    }


});
