/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Aby Abraham";
var formattedName = HTMLheaderName.replace('%data%', name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').append(formattedName);
$('#header').append(formattedRole);