<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
if (array_key_exists("skillsid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$skills->skills_title = checkIndex($data, "skills_title");
$skills->skills_image = checkIndex($data, "skills_image");
$skills->skills_category = checkIndex($data, "skills_category");
$skills->skills_description = checkIndex($data, "skills_description");
$skills->skills_publish_date = checkIndex($data, "skills_publish_date");
$skills->skills_is_active = 1;
$skills->skills_created = date("Y-m-d H:i:s");
$skills->skills_datetime = date("Y-m-d H:i:s");

/* isNameExist($skills, $skills->skills_title); */

$query = checkCreate($skills);
returnSuccess($skills, "skills", $query);