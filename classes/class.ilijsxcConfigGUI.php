<?php

include_once("./Services/Component/classes/class.ilPluginConfigGUI.php");
 
/**
 * Example configuration user interface class
 *
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version $Id$
 *
 */
class ilijsxcConfigGUI extends ilPluginConfigGUI
{
	/**
	* Handles all commmands, default is "configure"
	*/
	function performCommand($cmd)
	{

		switch ($cmd)
		{
			case "configure":
			case "save":
				$this->$cmd();
				break;

		}
	}

	/**
	 * Configure screen
	 */
	function configure()
	{
		global $tpl;

		$form = $this->initConfigurationForm();
		$tpl->setContent($form->getHTML());
	}
	
	//
	// From here on, this is just an example implementation using
	// a standard form (without saving anything)
	//
	
	/**
	 * Init configuration form.
	 *
	 * @return object form object
	 */
	public function initConfigurationForm()
	{
		global $lng, $ilCtrl;
		
		$pl = $this->getPluginObject();
	
		include_once("Services/Form/classes/class.ilPropertyFormGUI.php");
		$form = new ilPropertyFormGUI();
	
		// setting 1 (a checkbox)
		$cb = new ilCheckboxInputGUI($pl->txt("setting_1"), "setting_1");
		$form->addItem($cb);
		
		// setting 2 (text)
		$ti = new ilTextInputGUI($pl->txt("setting_2"), "setting_2");
		$ti->setRequired(true);
		$ti->setMaxLength(10);
		$ti->setSize(10);
		$form->addItem($ti);
	
		$form->addCommandButton("save", $lng->txt("save"));
	                
		$form->setTitle($pl->txt("example_plugin_configuration"));
		$form->setFormAction($ilCtrl->getFormAction($this));
		
		return $form;
	}
	
	/**
	 * Save form input (currently does not save anything to db)
	 *
	 */
	public function save()
	{
		global $tpl, $lng, $ilCtrl;
	
		$pl = $this->getPluginObject();
		
		$form = $this->initConfigurationForm();
		if ($form->checkInput())
		{
			$set1 = $form->getInput("setting_1");
			$set2 = $form->getInput("setting_2");
	
			// @todo: implement saving to db
			
			ilUtil::sendSuccess($pl->txt("saving_invoked"), true);
			$ilCtrl->redirect($this, "configure");
		}
		else
		{
			$form->setValuesByPost();
			$tpl->setContent($form->getHtml());
		}
	}

}
?>
