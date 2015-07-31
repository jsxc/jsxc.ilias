<?php

include_once("./Services/UIComponent/classes/class.ilUserInterfaceHookPlugin.php");
 
/**
 * Example user interface plugin
 *
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version 2.1.0
 *
 */
class ilijsxcPlugin extends ilUserInterfaceHookPlugin
{
	function getPluginName()
	{
		return "ijsxc";
	}
}

?>
