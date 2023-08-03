function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    var skillsMemberValueLengthMax = skillsMember.getAttribute("maxlength");
    var skillsMemberValueLengthMaxInt = parseInt(skillsMemberValueLengthMax);
    var skillsMemberValueLengthMaxIntMinus = skillsMemberValueLengthMaxInt - skillsMemberValueLength;
    var skillsMemberValueLengthMaxIntMinusString = skillsMemberValueLengthMaxIntMinus.toString();
    var skillsMemberValueLengthMaxIntMinusStringLength = skillsMemberValueLengthMaxIntMinusString.length;
    var skillsMemberValueLengthMaxIntMinusStringLengthInt = parseInt(skillsMemberValueLengthMaxIntMinusStringLength);
    if (skillsMemberValueLengthMaxIntMinusStringLengthInt == 1) {
        skillsMemberValueLengthMaxIntMinusString = "0" + skillsMemberValueLengthMaxIntMinusString;
    }
    skills.innerHTML = skillsMemberValueLengthMaxIntMinusString;
}