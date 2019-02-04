## New Profile

SCHEMA_KEY="org.gnome.Terminal.Legacy.Profile"
RELOC_KEY="/org/gnome/terminal/legacy/profiles"
PROFILE=$(uuidgen)
PROFILE_KEY="$SCHEMA_KEY:$RELOC_KEY:/:$PROFILE/"
gset="gsettings set $PROFILE_KEY"


## Behavior

$gset visible-name "ArcOS"
$gset login-shell true
$gset audible-bell false

$gset default-size-columns 84
$gset default-size-rows 46
$gset scrollbar-policy never
$gset scrollback-unlimited true
$gset allow-bold false


## Colors

$gset use-theme-colors "false"
$gset background-color "'#262B36'"
$gset foreground-color "'#D8DEE9'"
$gset palette "['#3B4252', '#BF616A', '#A3BE8C', '#EBCB8B', '#81A1C1', '#B48EAD', '#88C0D0', '#E5E9F0', '#4C566A', '#BF616A', '#A3BE8C', '#EBCB8B', '#81A1C1', '#B48EAD', '#8FBCBB', '#ECEFF4']"
