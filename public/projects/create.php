<?php
$conn = null;
$conn = checkDbConnection();
$aboutme = new Aboutme($conn);
if (array_key_exists("aboutmeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$aboutme->aboutme_description = checkIndex($data, "aboutme_description");
$aboutme->aboutme_startYear = checkIndex($data, "aboutme_startYear");
$aboutme->aboutme_endYear = checkIndex($data, "aboutme_endYear");
$aboutme->aboutme_course = checkIndex($data, "aboutme_course");
$aboutme->aboutme_school = checkIndex($data, "aboutme_school");


/* isNameExist($aboutme, $aboutme->aboutme_title); */

$query = checkCreate($aboutme);
returnSuccess($aboutme, "aboutme", $query);