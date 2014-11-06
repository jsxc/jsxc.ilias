<?php 
require '../config.inc.php';

$config = $ijsxc_config;

$json = json_encode(array(xmpp => $config['xmpp']));

echo $json;
?>