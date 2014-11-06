<?php

include_once("./Services/UIComponent/classes/class.ilUIHookPluginGUI.php");
require_once('./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/config.inc.php');

/**
 * User interface hook class
 *
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version 1.0.0
 * @ingroup ServicesUIComponent
 */
class ilijsxcUIHookGUI extends ilUIHookPluginGUI
{

	private $webroot = './Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/';
	private $jsFiles = array(
			productive => array(
				'js/lib/jquery.ui.min.js',
			   'js/jsxc/lib/jquery.colorbox-min.js',
			   'js/jsxc/lib/jquery.slimscroll.js',
			   'js/jsxc/lib/jquery.fullscreen.js',
			   'js/jsxc/lib/jsxc.dep.min.js',
			   'js/jsxc/jsxc.min.js',
			   'js/ijsxc.js'
			),
			development => array(
				'js/lib/jquery.ui.min.js',
			   'js/jsxc/lib/jquery.colorbox-min.js',
			   'js/jsxc/lib/jquery.slimscroll.js',
			   'js/jsxc/lib/jquery.fullscreen.js',
			   'js/jsxc/lib/strophe.js',
			   'js/jsxc/lib/strophe.muc.js',
			   'js/jsxc/lib/strophe.disco.js',
			   'js/jsxc/lib/strophe.caps.js',
			   'js/jsxc/lib/strophe.vcard.js',
			   'js/jsxc/lib/strophe.jingle/strophe.jingle.js',
			   'js/jsxc/lib/strophe.jingle/strophe.jingle.session.js',
			   'js/jsxc/lib/strophe.jingle/strophe.jingle.sdp.js',
			   'js/jsxc/lib/strophe.jingle/strophe.jingle.adapter.js',
			   'js/jsxc/lib/otr/build/dep/salsa20.js',
			   'js/jsxc/lib/otr/build/dep/bigint.js',
			   'js/jsxc/lib/otr/build/dep/crypto.js',
			   'js/jsxc/lib/otr/build/dep/eventemitter.js',
			   'js/jsxc/lib/otr/build/otr.js',
			   'js/jsxc/jsxc.lib.js',
			   'js/jsxc/jsxc.lib.webrtc.js',
			   'js/ijsxc.js'
			)
	);
	
	private $cssFiles = array(
			'css/jquery-ui.min.css', 
			'css/jquery.colorbox.css', 
			'js/jsxc/jsxc.css', 
			'js/jsxc/jsxc.webrtc.css', 
			'css/jsxc.ilias.css'
	);
	
	/**
	 * Modify HTML output of GUI elements. Modifications modes are:
	 * - ilUIHookPluginGUI::KEEP (No modification)
	 * - ilUIHookPluginGUI::REPLACE (Replace default HTML with your HTML)
	 * - ilUIHookPluginGUI::APPEND (Append your HTML to the default HTML)
	 * - ilUIHookPluginGUI::PREPEND (Prepend your HTML to the default HTML)
	 *
	 * @param string $a_comp component
	 * @param string $a_part string that identifies the part of the UI that is handled
	 * @param string $a_par array of parameters (depend on $a_comp and $a_part)
	 *
	 * @return array array with entries "mode" => modification mode, "html" => your html
	 */
	function getHTML($a_comp, $a_part, $a_par = array())
	{
		global $ilCtrl, $ilUser, $ijsxc_config;

		$env = ($ijsxc_config['debug'] === true) ? 'development' : 'productive';

		if ($a_part == 'template_load' && !$ilCtrl->IsAsynch() && strtolower($a_par['tpl_id']) == 'tpl.main.html') {
			$html = '';
			
			foreach ($this->cssFiles as $file) {
				$html .= '<link href="'.$this->webroot.$file.'" media="all" rel="stylesheet" type="text/css" />';
			}
			
			foreach ($this->jsFiles[$env] as $file) {
				$html .= '<script src="'.$this->webroot.$file.'"></script>';
			}
			
			return array('mode' => ilUIHookPluginGUI::APPEND, 'html' => $html);
		}

		return array("mode" => ilUIHookPluginGUI::KEEP, "html" => "");
	}

}
?>
