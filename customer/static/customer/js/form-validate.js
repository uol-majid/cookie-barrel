function valid_datas(f) {
  if (f.name.value == "") {
    jQuery("#form_status").html(
      '<span class="wrong">Your name must not be empty!</span>'
    );
    notice(f.name);
  } else if (f.email.value == "") {
    jQuery("#form_status").html(
      '<span class="wrong">Your email must not be empty and correct format!</span>'
    );
    notice(f.email);
    //}else if( f.phone.value == '' ){
    //jQuery('#form_status').html('<span class="wrong">Your phone must not be empty and correct format!</span>');
    //notice( f.phone );
  } else if (f.subject.value == "") {
    jQuery("#form_status").html(
      '<span class="wrong">Your subject must not be empty!</span>'
    );
    notice(f.subject);
  } else if (f.message.value == "") {
    jQuery("#form_status").html(
      '<span class="wrong">Your message must not be empty!</span>'
    );
    notice(f.message);
  } else {
    return true;
  }

  return false;
}

function notice(f) {
  jQuery("#cookies-contact-form").find("input,textarea").css("border", "none");
  f.style.border = "1px solid red";
  f.focus();
}

function valid_login(f) {
  if (f.username.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Username or Email must not be empty!</span>'
    );
    notice(f.username);
  } else if (f.password.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Password must not be empty!</span>'
    );
    notice(f.password);
  } else {
    // We can submit normally (no AJAX for login right now)
    return true;
  }

  return false;
}

function valid_signup(f) {
  if (f.username.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Username must not be empty!</span>'
    );
    notice(f.username);
  } else if (f.email.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Email must not be empty and must be valid!</span>'
    );
    notice(f.email);
  } else if (f.password1.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Password must not be empty!</span>'
    );
    notice(f.password1);
  } else if (f.password2.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Confirm Password must not be empty!</span>'
    );
    notice(f.password2);
  } else if (f.password1.value != f.password2.value) {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Passwords do not match!</span>'
    );
    notice(f.password2);
  } else {
    // We can submit normally (no AJAX for signup yet)
    return true;
  }

  return false;
}

function valid_forgot_password(f) {
  if (f.email.value == "") {
    jQuery("#login_signup_form_status").html(
      '<span class="wrong">Please enter your registered email address!</span>'
    );
    notice(f.email);
    return false;
  } else {
    return true;
  }
}
