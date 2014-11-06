<?php
require '../config.inc.php';

$config = $ijsxc_config['ice'];

$data = array ();
$data ['ttl'] = $config['ttl'] ?  : 3600 * 24; // one day (according to TURN-REST-API)
$data ['url'] = $config['url']; 
$data ['username'] = $config['username'] ?  : ($config['secret'] ? (time () + $data ['ttl']) . ':username'  : '');
$data ['credential'] = $config['credential'] ?  : ($config['secret'] ? base64_encode ( hash_hmac ( 'sha1', $data ['username'], $config['secret'], true ) ) : '');

echo json_encode($data);
?>
