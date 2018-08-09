## ArcOS Fonts

FONTS_DIR="$HOME/.fonts"

if [ ! -d $FONTS_DIR ]; then
    mkdir $FONTS_DIR
fi

cp ./files/* $FONTS_DIR
