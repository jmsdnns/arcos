AC_INIT(
    [arcos-theme],
    [20180713],
    [https://github.com/jmsdnns/ArcOS/issues],
    [arcos-theme],
    [https://github.com/jmsdnns/ArcOS]
)

AC_CONFIG_AUX_DIR([build-aux])
AC_CONFIG_MACRO_DIR([m4])
AM_INIT_AUTOMAKE([no-dist-gzip dist-xz foreign])
AC_PROG_MKDIR_P

ARCOS_ENABLE([LIGHT],         [light],         [ArcOS Light],     [disable])
ARCOS_ENABLE([DARKER],        [darker],        [ArcOS Darker],    [disable])
ARCOS_ENABLE([DARK],          [dark],          [ArcOS Dark],      [disable])
ARCOS_ENABLE([GNOME_SHELL],   [gnome-shell],   [GNOME Shell],   [disable])
ARCOS_ENABLE([GTK2],          [gtk2],          [GTK2],          [disable])
ARCOS_ENABLE([GTK3],          [gtk3],          [GTK3],          [disable])
ARCOS_ENABLE([TRANSPARENCY],  [transparency],  [transparency],  [disable])

AS_IF([test "x$ENABLE_GNOME_SHELL$ENABLE_GTK3" != xnono], [ARCOS_GNOME])

AC_CONFIG_FILES([
    common/Makefile
    Makefile
])

AC_OUTPUT
