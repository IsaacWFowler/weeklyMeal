// JavaScript source code

function validate() {
	var username = document.getElementById("username_in").value;
	var password = document.getElementById("password_in").value;
	//This test should be to access the data base and see if the password matches the one associated with the username
	//Should also fail if username doesn't exist within the database
	//These are simply temporary test values to make sure that it works
	if (username == "test1" || username == "test2" && password == "test1") {
		localStorage.setItem("currentlyLoggedIn", username);
		alert("Login successful");
		window.open("weeklyMealHome.html");
		return false;
	} else {
		alert("Login failed");
	}
}


//related to createAccountPage.html
function create_account() {
	var new_username = document.getElementById("username").value;
	var new_password = document.getElementById("password").value;
	const new_allergens = document.getElementById("allergens").value.split(",");
	//pass these to the database
	//if a username is already in the database this fails
	//could display: alert("Username already exists...pick a new one");
	//Otherwise if successful then 
	localStorage.setItem("currentlyLoggedIn", new_username);
	alert("Account Created!");
	window.open("weeklyMealHome.html");

}


//related to weeklyMealEditProfile.html
function edit_account() {
	var new_password = document.getElementById("password").value;
	var add_allergen = document.getElementById("allergen_add").value;
	var remove_allergen = document.getElementById("allergen_remove").value;
	var add_ingredient = document.getElementById("ingredient_add").value;
	var add_ingredient_amount = document.getElementById("ingredient_add_amount").value;
	var remove_ingredient = document.getElementById("ingredient_remove").value;
	var remove_ingredient_amount = document.getElementById("ingredient_remove_amount").value;

	if (new_password && document.getElementById("password")) {
		//upload new_password
	}
	if (add_allergen && document.getElementById("allergen_add")) {
		//upload new allergen
	}
	if (remove_allergen && document.getElementById("allergen_remove")) {
		//remove the allergen property from this ingredient
	}
	if ((add_ingredient && document.getElementById("ingredient_add")) && (add_ingredient_amount && document.getElementById("ingredient_add_amount"))) {
		//upload the ingredient amount
		//if there already exists some of this ingredient then add this amount to it
	}
	if ((remove_ingredient && document.getElementById("ingredient_remove")) && (remove_ingredient_amount && document.getElementById("ingredient_remove_amount"))) {
		//upload the subtracted ingredient amount
	}
	alert("Changes made.");
}



//related to uploadMeal.html
function upload_meal() {
	var new_meal_name = document.getElementById("meal_name").value;
	var new_meal_type = document.getElementById("MealType").value;
	var ingredient1 = document.getElementById("ingredient1_name").value;
	var ingredient1_amt = parseInt(document.getElementById("ingredient1_amt").value);

	var ingredient2 = document.getElementById("ingredient2_name").value;
	var ingredient2_amt = parseInt(document.getElementById("ingredient2_amt").value);

	var ingredient3 = document.getElementById("ingredient3_name").value;
	var ingredient3_amt = parseInt(document.getElementById("ingredient3_amt").value);

	var ingredient4 = document.getElementById("ingredient4_name").value;
	var ingredient4_amt = parseInt(document.getElementById("ingredient4_amt").value);

	var ingredient5 = document.getElementById("ingredient5_name").value;
	var ingredient5_amt = parseInt(document.getElementById("ingredient5_amt").value);

	var ingredient6 = document.getElementById("ingredient6_name").value;
	var ingredient6_amt = parseInt(document.getElementById("ingredient6_amt").value);

	var b_meal = document.getElementById("breakfast_meal").checked;
	var l_meal = document.getElementById("lunch_meal").checked;
	var d_meal = document.getElementById("dinner_meal").checked;

	var meal_rating;
	var fav;

	if (new_meal_name && document.getElementById("meal_name")) {
		if (b_meal || l_meal || d_meal) {
			if ((ingredient1 && document.getElementById("ingredient1_name")) && (ingredient1_amt && document.getElementById("ingredient1_amt")) && (ingredient1_amt != 0)) {
				//Upload meal name, type, times, and first ingredient
				if ((ingredient2 && document.getElementById("ingredient2_name")) && (ingredient2_amt && document.getElementById("ingredient2_amt")) && (ingredient2_amt != 0)) {
					//Upload 2nd ingredient to same meal name
				}
				if ((ingredient3 && document.getElementById("ingredient3_name")) && (ingredient3_amt && document.getElementById("ingredient3_amt")) && (ingredient3_amt != 0)) {
					//Upload 3rd ingredient to same meal name
				}
				if ((ingredient4 && document.getElementById("ingredient4_name")) && (ingredient4_amt && document.getElementById("ingredient4_amt")) && (ingredient4_amt != 0)) {
					//Upload 4th ingredient to same meal name
				}
				if ((ingredient5 && document.getElementById("ingredient5_name")) && (ingredient5_amt && document.getElementById("ingredient5_amt")) && (ingredient5_amt != 0)) {
					//Upload 5th ingredient to same meal name
				}
				if ((ingredient6 && document.getElementById("ingredient6_name")) && (ingredient6_amt && document.getElementById("ingredient6_amt")) && (ingredient6_amt != 0)) {
					//Upload 6th ingredient to same meal name
				}

				//determine rating
				if (document.getElementById("rate_one").checked) {
					meal_rating = 1;
				} else if (document.getElementById("rate_two").checked) {
					meal_rating = 2;
				} else if (document.getElementById("rate_three").checked) {
					meal_rating = 3;
				} else if (document.getElementById("rate_four").checked) {
					meal_rating = 4;
				} else if (document.getElementById("rate_five").checked) {
					meal_rating = 5;
				} else {
					alert("Some error with the rating system");
					return false;
				}

				//determine if favorite
				if (document.getElementById("favorite").checked) {
					fav = true;
				}

				//Upload rating and favorite with association username and meal_name

				alert("Meal Uploaded");

			} else {
				alert("Meal must have at least 1 ingredient...or invalid amount entered");
			}
		} else {
			alert("Unable to upload meal: no time selected.");
		}
	} else {
		alert("Couldn't upload no meal name entered...");

	}


}