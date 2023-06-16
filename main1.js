data = ''

function post_data() {

    content = `
    <nav>
        <img src="https://haiyan-productions.github.io/xpricon/images/main_logo.png" alt="">
    </nav>
    <div id="loading_div">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
    </div>
    `
    document.querySelector('body').innerHTML = content;

    const url = 'https://script.google.com/macros/s/AKfycbwmqw9p7EJJP4pnwKJ5t-L_9bRnu1BrCtymuTtqcggT1l5Z-IvLK4Hw4Vgjy2tU76UkvQ/exec?name='+data;

    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Request sent successfully!');
            } else {
                console.error('Error:', response.status);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });




    setTimeout(function () {
        content = `
    <nav>
        <img src="https://haiyan-productions.github.io/xpricon/images/main_logo.png" alt="">
    </nav>

    <div class="last_div ">
        <div style="text-align: center;">
          <p>Thank you for taking the time to participate in this survey. Your valuable insights will shape the future of password management with Xpricon!</p>
          
        <img src="https://static.vecteezy.com/system/resources/thumbnails/017/745/757/small/heart-love-emoji-3d-png.png" alt="">
    </div>
      </div>

    <div class="footer">
        If you would like to obtain more information, please feel free to contact us at <span>xpricon@gmail.com</span> .
    </div>
    `
        document.querySelector('body').innerHTML = content;
        console.log(data)

    }, 500)


}








function submit_funtion() {
    data = ''

    var theme = document.querySelector('input[name="theme"]:checked');

    var app_type = document.querySelector('input[name="app_type"]:checked');

    var database_type = document.querySelector('input[name="database_type"]:checked');

    var paswd_reset = document.querySelector('input[name="paswd_reset"]:checked');

    var trail_passwords = document.querySelector('input[name="trail_passwords"]:checked');

    var pricing = document.querySelector('input[name="pricing"]:checked');

    var password_analysis = document.querySelector('input[name="password_analysis"]:checked');

    var password_generator = document.querySelector('input[name="password_generator"]:checked');


    var addition_suggestion = document.getElementById("more_suggestion").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;


    if (theme) {
        data += theme.value;
        data += '||';
    }
    else { alert('Please select Theme option.'); return }

    if (app_type) {
        data += app_type.value;
        data += '||';
    }
    else { alert('Please select App Type option.'); return }

    if (database_type) {
        data += database_type.value;
        data += '||';
    }
    else { alert('Please select database type option.'); return }

    if (paswd_reset) {
        data += paswd_reset.value;
        data += '||';
    }
    else { alert('Please select Password reset option.'); return }

    if (trail_passwords) {
        data += trail_passwords.value;
        data += '||';
    }
    else { alert('Please select Trail Passwords option.'); return }

    if (pricing) {
        data += pricing.value;
        data += '||';
    }
    else { alert('Please select Pricing option.'); return }

    if (password_analysis) {
        data += password_analysis.value;
        data += '||';
    }
    else { alert('Please select Password Analysis option.'); return }

    if (password_generator) {
        data += password_generator.value;
        data += '||';
    }
    else { alert('Please select Password Generator option.'); return }

    if (addition_suggestion == '') {
        data += 'none||';
    }
    else {
        data += addition_suggestion;
        data += '||'
    }

    if (phone == '') {
        data += 'none||';
    }
    else {
        data += phone;
        data += '||'
    }

    if (email == '') {
        data += 'none';
    }
    else {
        data += email;
    }


    post_data()


}

