<?php
require_once(dirname(__FILE__) . '/../config.php');
$PAGE->set_context(get_context_instance(CONTEXT_SYSTEM));
$PAGE->set_url('/cook/tooltip.php');
$PAGE->requires->js('/cook/tooltip.js', true);
echo $OUTPUT->header();
?>
<img id="logo" src="../theme/image.php?theme=standard&image=moodlelogo" title="Moodle Logo" />
<?php
echo $OUTPUT->footer();
?>

