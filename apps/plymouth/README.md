# Plymouth

* [Plymouth Scripting](https://freedesktop.org/wiki/Software/Plymouth/Scripts/)
* [Running Plymouth post-boot](
https://wiki.ubuntu.com/Plymouth#Running_Plymouth_.22post-boot.22)


## Current Setup

```
$ update-alternative --query default.plymouth
$ update-alternative --query text.plymouth
```


## Running Plymouth

Root, with two terminals.

Terminal 1

```shell
$ sudo plymouthd --debug --tty=`tty` --no-daemon
```

Terminal 2

```
$ sudo plymouth show-splash
$ sudo plymouth message --text="take five"
$ sudo plymouth ask-for-password --prompt "We need a password"
$ sudo plymouth --quit
```


## Installing Theme

Install your theme as an alternative

```shell
$ sudo update-alternatives \
    --install \
        /usr/share/plymouth/themes/default.plymouth \
        default.plymouth \
        /your/path/to/arcos/apps/plymouth/arcos-logo/arcos-logo.plymouth
```

Update your config, rebuild initramfs, and that's it.

```
$ sudo update-alternatives --config default.plymouth
$ sudo update-initramfs -u
```


### Installing Fallback Themes

If you want to define a fallback, in case the first fails to load.

_It is unfortunate to see the word "slave" used in this command._

Graphical theme

```shell
$ update-alternatives \
    --install \
        /usr/share/plymouth/themes/default.plymouth \
        default.plymouth \
        /usr/share/plymouth/themes/arcos-logo/arcos-logo.plymouth \
        150 \
    --slave \
        /usr/share/plymouth/themes/default.grub \
        default.plymouth.grub \
        /usr/share/plymouth/themes/arcos-logo/arcos-logo.grub

$ update-alternatives \
    --install \
        /usr/share/plymouth/themes/default.plymouth \
        default.plymouth \
        /usr/share/plymouth/themes/ubuntu-logo/ubuntu-logo.plymouth \
        100 \
    --slave \
        /usr/share/plymouth/themes/default.grub \
        default.plymouth.grub \
        /usr/share/plymouth/themes/ubuntu-logo/ubuntu-logo.grub
```

Text Theme

```
$ update-alternatives \
    --install \
        /usr/share/plymouth/themes/text.plymouth \
        text.plymouth \
        /usr/share/plymouth/themes/arcos-text/arcos-text.plymouth \
        60

$ update-alternatives \
    --install \
        /usr/share/plymouth/themes/text.plymouth \
        text.plymouth \
        /usr/share/plymouth/themes/ubuntu-text/ubuntu-text.plymouth \
        50
```
