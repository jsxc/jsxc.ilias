<?php

include_once("./Services/UIComponent/classes/class.ilUserInterfaceHookPlugin.php");
 
/**
 * Example user interface plugin
 *
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version $Id$
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
