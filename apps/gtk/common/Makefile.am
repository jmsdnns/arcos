if !ENABLE_TRANSPARENCY
themelightdir   = $(datadir)/ArcOS-Light-solid
themedarkerdir  = $(datadir)/ArcOS-Darker-solid
themedarkdir    = $(datadir)/ArcOS-Dark-solid
else
themelightdir   = $(datadir)/ArcOS-Light
themedarkerdir  = $(datadir)/ArcOS-Darker
themedarkdir    = $(datadir)/ArcOS-Dark
endif

ithemelightdir  = $(DESTDIR)$(themelightdir)
ithemedarkerdir = $(DESTDIR)$(themedarkerdir)
ithemedarkdir   = $(DESTDIR)$(themedarkdir)

install-exec-hook:

install-data-local:

if ENABLE_LIGHT
	$(MKDIR_P) $(ithemelightdir)
	cp $(srcdir)/index.theme-light $(ithemelightdir)/index.theme
endif # ENABLE_LIGHT

if ENABLE_DARKER
	$(MKDIR_P) $(ithemedarkerdir)
	cp $(srcdir)/index.theme-darker $(ithemedarkerdir)/index.theme
endif # ENABLE_LIGHT

if ENABLE_DARK
	$(MKDIR_P) $(ithemedarkdir)
	cp $(srcdir)/index.theme-dark $(ithemedarkdir)/index.theme
endif # ENABLE_DARK

if ENABLE_GNOME_SHELL
	$(MKDIR_P) $(ithemelightdir)/gnome-shell

	cd $(srcdir)/gnome-shell/$(GNOME_VERSION) && cp -R \
		common-assets \
		light-assets \
		$(ithemelightdir)/gnome-shell

	cd $(srcdir)/gnome-shell/$(GNOME_VERSION) && cp \
		gnome-shell-light.css \
		$(ithemelightdir)/gnome-shell/gnome-shell.css

if ENABLE_DARK
	$(MKDIR_P) $(ithemedarkdir)/gnome-shell

	cd $(srcdir)/gnome-shell/$(GNOME_VERSION) && cp -R \
		common-assets \
		dark-assets \
		$(ithemedarkdir)/gnome-shell

	cd $(srcdir)/gnome-shell/$(GNOME_VERSION) && cp \
		gnome-shell-dark.css \
		$(ithemedarkdir)/gnome-shell/gnome-shell.css
endif # ENABLE_DARK

endif # ENABLE_GNOME_SHELL


if ENABLE_GTK2

if ENABLE_LIGHT
	$(MKDIR_P) $(ithemelightdir)/gtk-2.0

	cd $(srcdir)/gtk-2.0 && cp -R \
		assets \
		menubar-toolbar \
		*.rc \
		gtkrc \
		$(ithemelightdir)/gtk-2.0
endif # ENABLE_LIGHT

if ENABLE_DARKER
	$(MKDIR_P) $(ithemedarkerdir)/gtk-2.0

	cd $(srcdir)/gtk-2.0 && cp -R \
		assets \
		menubar-toolbar \
		*.rc \
		$(ithemedarkerdir)/gtk-2.0

	cd $(srcdir)/gtk-2.0 && cp -R \
		gtkrc-darker \
		$(ithemedarkerdir)/gtk-2.0/gtkrc
endif # ENABLE_DARKER

if ENABLE_DARK
	$(MKDIR_P) $(ithemedarkdir)/gtk-2.0

	cd $(srcdir)/gtk-2.0 && cp -R \
		menubar-toolbar \
		*.rc \
		$(ithemedarkdir)/gtk-2.0

	cd $(srcdir)/gtk-2.0 && cp -R \
		assets-dark \
		$(ithemedarkdir)/gtk-2.0/assets

	cd $(srcdir)/gtk-2.0 && cp -R \
		gtkrc-dark \
		$(ithemedarkdir)/gtk-2.0/gtkrc
endif # ENABLE_DARK

endif # ENABLE_GTK2


if ENABLE_GTK3

if ENABLE_LIGHT
	$(MKDIR_P) $(ithemelightdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0 && cp \
        thumbnail-light.png \
        $(ithemelightdir)/gtk-3.0/thumbnail.png

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		assets \
		gtk-dark.css \
		$(ithemelightdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp \
       gtk-light.css \
       $(ithemelightdir)/gtk-3.0/gtk.css
endif # ENABLE_LIGHT

if ENABLE_DARKER
	$(MKDIR_P) $(ithemedarkerdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0 && cp \
        thumbnail-light.png \
        $(ithemedarkerdir)/gtk-3.0/thumbnail.png

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		assets \
		gtk-dark.css \
		$(ithemedarkerdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp \
		gtk-darker.css \
		$(ithemedarkerdir)/gtk-3.0/gtk.css
endif # ENABLE_DARKER

if ENABLE_DARK
	$(MKDIR_P) $(ithemedarkdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0 && cp \
        thumbnail-dark.png \
        $(ithemedarkdir)/gtk-3.0/thumbnail.png

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		assets \
		$(ithemedarkdir)/gtk-3.0

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp \
		gtk-dark.css \
		$(ithemedarkdir)/gtk-3.0/gtk.css
endif # ENABLE_DARK

if !ENABLE_TRANSPARENCY

if ENABLE_LIGHT
	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		gtk-solid.css \
		$(ithemelightdir)/gtk-3.0/gtk.css

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		gtk-solid-dark.css \
		$(ithemelightdir)/gtk-3.0/gtk-dark.css
endif # ENABLE_LIGHT

if ENABLE_DARKER
	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		gtk-solid-darker.css \
		$(ithemedarkerdir)/gtk-3.0/gtk.css

	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		gtk-solid-dark.css \
		$(ithemedarkerdir)/gtk-3.0/gtk-dark.css
endif # ENABLE_DARKER

if ENABLE_DARK
	cd $(srcdir)/gtk-3.0/$(GNOME_VERSION) && cp -R \
		gtk-solid-dark.css \
		$(ithemedarkdir)/gtk-3.0/gtk.css
endif # ENABLE_DARK

endif #!ENABLE_TRANSPARENCY

endif # ENABLE_GTK3


uninstall-local:
	rm -rf $(ithemelightdir)

if ENABLE_DARKER
	rm -rf $(ithemedarkerdir)
endif # ENABLE_DARKER

if ENABLE_DARK
	rm -rf $(ithemedarkdir)
endif # ENABLE_DARK


EXTRA_DIST = $(srcdir)/gnome-shell \
	     $(srcdir)/gtk-2.0 \
	     $(srcdir)/gtk-3.0 \
	     $(srcdir)/metacity-1 \
	     $(srcdir)/index.theme-light \
	     $(srcdir)/index.theme-darker \
	     $(srcdir)/index.theme-dark
