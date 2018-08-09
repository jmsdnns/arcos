# ArcOS 

A complete OS theme, built for GNOME and inspired by [Arc](https://github.com/horst3180/Arc-theme).


## One Theme, Many Layers

ArcOS is a single theme implemented for multiple graphical systems. The idea is to apply a consistent look and feel to your boot loader, your login screen, and your desktop UI. From boot to shutdown.

Themes are provided for:

- Plymouth
- GDM
- GTK
- Gnome Terminal (soon)
- Mouse Cursors (soon)


# Building ArcOS

ArcOS uses both sass for styles and gulp for building everything. Just run `gulp`.

```
$ gulp
[11:12:54] Using gulpfile ~/Projects/arcos/gulpfile.js
[11:12:54] Starting ...
```

The themes are stored in `arcos/rendered/` as they are completed.

## Cleaning

```
$ gulp clean
```

# Installing

Copy `arcos/rendered/*` to `~/.themes`.

# Screenshots

## ArcOS-Light

![Desktop](https://github.com/jmsdnns/arcos/raw/master/screenshots/desktop-light.png)


![Overview](https://github.com/jmsdnns/arcos/raw/master/screenshots/overview-light.png)

![App List](https://github.com/jmsdnns/arcos/raw/master/screenshots/applist-light.png)

![Search](https://github.com/jmsdnns/arcos/raw/master/screenshots/search-light.png)

## ArcOS-Dark

![Desktop](https://github.com/jmsdnns/arcos/raw/master/screenshots/desktop-dark.png)


![Overview](https://github.com/jmsdnns/arcos/raw/master/screenshots/overview-dark.png)

![App List](https://github.com/jmsdnns/arcos/raw/master/screenshots/applist-dark.png)

![Search](https://github.com/jmsdnns/arcos/raw/master/screenshots/search-dark.png)
