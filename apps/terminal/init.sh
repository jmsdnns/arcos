## ArcOS Terminal
## --------------
## by Jms Dnns


## Lofi Getopts

NEW_PROFILE=NO
APPLY_COLORS=NO

for i in "$@"; do
case $i in
    -n|--new)
    NEW_PROFILE=YES
    shift # past argument=value
    ;;
    -c|--colors)
    APPLY_COLORS=YES
    shift # past argument=value
    ;;
    *)
    # unknown option
    ;;
esac
done


## GSettings

SCHEMA_KEY="org.gnome.Terminal.Legacy.Profile"
RELOC_KEY="/org/gnome/terminal/legacy/profiles"
DEFAULT_PROFILE=$(gsettings get org.gnome.Terminal.ProfilesList default)
PROFILE_KEY="$SCHEMA_KEY:$RELOC_KEY:/:$DEFAULT_PROFILE/"
gset="gsettings set $PROFILE_KEY"


## Profile

DEFAULT_PROFILE=$(gsettings get org.gnome.Terminal.ProfilesList default)
PROFILE_KEY="$SCHEMA_KEY:$RELOC_KEY:/:$DEFAULT_PROFILE/"
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

if [[ "$APPLY_COLORS" = "YES" ]]; then
    echo "WITH COLORS"
    $gset use-theme-colors "false"
    $gset background-color "'#262B36'"
    $gset foreground-color "'#D8DEE9'"
    $gset palette "['#3B4252', '#BF616A', '#A3BE8C', '#EBCB8B', '#81A1C1', '#B48EAD', '#88C0D0', '#E5E9F0', '#4C566A', '#BF616A', '#A3BE8C', '#EBCB8B', '#81A1C1', '#B48EAD', '#8FBCBB', '#ECEFF4']"
else
    echo "NO COLORS"
fi
