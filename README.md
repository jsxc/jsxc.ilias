# JavaScript XMPP Client for ILIAS

Homepage: http://www.jsxc.org

Bugtracker: https://github.com/sualko/jsxc/issues

Wiki: https://github.com/sualko/jsxc/wiki


## Installation

### Get the code
__a) Packed versions__

Download the latest version from [releases](https://github.com/sualko/jsxc.ilias/releases) and extract it to <code>ILIAS_DIR/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/</code>.

__b) Nightly version__
```
cd ILIAS_DIR/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/
git clone https://github.com/sualko/jsxc.ilias ijsxc
cd ijsxc
git submodule update --init --recursive
```

### Configuration
Rename <code>ijsxc/js/ijsxc.config.sample.js</code> to <code>ijsxc/js/ijsxc.config.js</code> and adjust the values for xmpp server, bosh url and xmpp domain and the values for webrtc in <code>ijsxc/ajax/getturncredentials.php</code>.

