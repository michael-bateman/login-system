function account(form) {
	aaaaa = new Array("name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9");/* People's names who can reset members password */

	if(form.name.value == aaaaa[0]||form.name.value == aaaaa[1]||form.name.value == aaaaa[2]||form.name.value == aaaaa[3]||form.name.value == aaaaa[4]||form.name.value == aaaaa[5]||form.name.value == aaaaa[6]||form.name.value == aaaaa[7]||form.name.value == aaaaa[8]) {
		alert("The password is 'members'")/* Change this to your password */
	}
	else {
		alert("No such user exists. Please submit again e.x. FirstName LastName. If you are still having troubles, contact your Administrator")
	}
}