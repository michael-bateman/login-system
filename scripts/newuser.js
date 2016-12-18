function newuser(form) {
	registercode = new Array("907362", "432176");/* 1st code for admin, 2nd one for members code*/

	if(form.code.value == registercode[0]) {
		alert("Please contact your Administrator to recieve your admin username and password. The member site username is 'members' and password is 'ewbuccclub'")/* When you enter admin code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Username - 'members', password - 'ewbuccclub'")/* Member username and password*/
	}
	else {
		alert("Incorrect code. Please re-try or contact Michael for assistance.")/* No such user */
	}
}