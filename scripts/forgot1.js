function password(form) {
	username = new Array("admin1", "admin2", "members");

	if(form.userid.value == username[0]) {
		alert("Admin passwords cannot be reset. Please contact your Administrator to recover your password")/* Admin */
	}
	else if(form.userid.value == username[1]) {
		alert("Admin passwords cannot be reset. Please contact your Administrator to recover your password")/* Admin */
	}
	else if(form.userid.value == username[2]) {
		location.replace('find-account.html')/* Members reset password */
	}
	else {
		alert("No such user found")
	}
}