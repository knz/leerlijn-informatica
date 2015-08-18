.. include:: common.d

|UFS+| – Opslagbeheer
======================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Soorten bestandssysteem
-------------------------

.. index:: bestandssysteem
.. index:: filesystem

Een :def:`bestandssysteem` (Engels: :def:`filesystem`) is een opslagformaat
voor bestanden en mappen, die door een besturingssysteem wordt
gebruikt om de data te organiseren in een vast opslagmedium,
bijvoorbeeld een harde schijf.

Welke bestandssystemen bestaan er?
````````````````````````````````````

.. index:: Ext4, UFS, HFS+, UDF, FAT32, ISO9660, NTFS, ExFAT

De volgende bestandssystemen worden "standaard" ingesteld in
de meeste computers:

========== =======================================
Naam       Wordt gebruikt met
========== =======================================
Ext4_      Harde schijven op Linux
UFS_       Harde schijven op BSD systemen en oudere OS X
`HFS+`_    Harde schijven op nieuwe OS X
UDF_       Nieuwe data CDs, DVDs en Bluray
FAT32_     USB sticks, wisselschijven, oudere versies van Windows
ISO9660_   Oudere data CDs
NTFS_      Harde schijven op Windows
ExFAT_     Nieuwere USB sticks en geheugenkaartjes
========== =======================================

De volgende bestandssystemen zijn ook beschikbaar en hebben
verder interessante technische voordelen:

========== =======================================
Naam       Wordt gebruikt met
========== =======================================
XFS_       Goed voor mediabestanden en file servers
ZFS_       Goed voor gemengde gebruik
Btrfs_     Goed voor grote databases
========== =======================================

(Gebruik eventueel de links in de eerste kolom in deze tabel om meer
informatie over ieder bestandssysteem te krijgen.)

.. _Ext4: https://en.wikipedia.org/wiki/Ext4
.. _UFS: https://en.wikipedia.org/wiki/Unix_File_System
.. _`HFS+`: https://en.wikipedia.org/wiki/HFS_Plus
.. _UDF: https://en.wikipedia.org/wiki/Universal_Disk_Format
.. _FAT32: https://en.wikipedia.org/wiki/File_Allocation_Table#FAT32
.. _ISO9660: https://en.wikipedia.org/wiki/ISO_9660
.. _NTFS: https://en.wikipedia.org/wiki/NTFS
.. _ExFAT: https://en.wikipedia.org/wiki/ExFAT
.. _XFS: https://en.wikipedia.org/wiki/XFS
.. _ZFS: https://en.wikipedia.org/wiki/ZFS
.. _Btrfs: https://en.wikipedia.org/wiki/Btrfs

Bestandssysteem aankoppelen vanaf de commandolijn
-------------------------------------------------

.. index:: mount

:def:`"Mounten"` is het gangbare woord voor het beschikbaar maken en
aankoppelen van opslagmedia voor een unix besturingssysteem.

Een :def:`mountpoint` is een map waarop een bestandssysteem kan worden
gemount. Voordat een bestandssysteem kan worden gemount, moet het
mountpoint als map bestaan. Zodra een bestandssysteem is gemount
op een mountpoint, is die map bezet door dat bestandssysteem.

In de mountpointmap kunnen bestanden staan, voordat er een
bestandssysteem op is gemount. Zodra er een bestandssysteem op wordt
gemount, zijn de bestanden in de oorspronkelijke toestand van de
mountpointmap niet meer zichtbaar. Na het unmounten van het
bestandssysteem op dat mountpoint wordt de oorspronkelijke toestand
van de mountpointmap weer zichtbaar.

(Uitleg afgeleid van https://nl.wikipedia.org/wiki/Mounten )

Om een apparaat aan te koppelen, zal je het programma |mount(8)|_
aanroepen.

1. eerst zorg ervoor dat er een mountpoint bestaat, bijvoorbeeld :file:`/mnt`::

      mkdir -p /mnt

2. dan gebruik je |mount(8)|_::

      mount /dev/XXXXX /mnt

.. index:: block device

|mount(8)|_, zoals de andere programma's van dit hoofdstuk, moeten
weten welk opslagelement je wilt gebruiken (mounten, wissen,
repareren). Dit geef je aan door middel van de naam van een *block
device*. Dit is een bijzondere naam in de map :file:`/dev` die een
schijf of opslagelement identificeert. Je leest er verder hieronder
over.

Vaak zal |mount(8)|_ automatisch het type van het bestandssysteem
detecteren. Als dit mislukt, kun je dat expliciet aangeven met de
volgende programma's:

=============== =========================== ========================== ==========================
Bestandssysteem Linux                       OS X                       FreeBSD
=============== =========================== ========================== ==========================
FAT32           :program:`mount -t vfat`    :program:`mount_msdos`     :program:`mount_msdosfs`
Ext4            :program:`mount -t ext4`    :program:`mount_fuse-ext2` :program:`mount -t ext2fs`
UFS             :program:`mount -t ufs`                                :program:`mount -t ufs`
UDF             :program:`mount -t udf`     :program:`mount_udf`       :program:`mount_udf`
NTFS            :program:`mount.ntfs`                                  :program:`mount_ntfs-fuse`
ExFAT           :program:`mount.exfat`      :program:`mount_exfat`
HFS+            :program:`mount -t hfsplus` :program:`mount -t hfs`
=============== =========================== ========================== ==========================

Commando's uitvoeren als beheerder
``````````````````````````````````

Je moet beheerder zijn om de verschillende programma's van dit
hoofdstuk te kunnen gebruiken.  Als gewone gebruiker kun je vak
individuele commando's aanroepen met de rechten van een beheerder door
middel van het programma :program:`sudo`. Bijvoorbeeld::

    sudo mount -t vfat /dev/sda1 /mnt

Uitzoeken welk block device hoort bij welk apparaat
````````````````````````````````````````````````````

.. index:: dmesg
.. index:: lsblk

Welke "block device" hoort bij welke apparaat hangt heel erg af van je
computer, je besturingssysteem en de koppelingsvolgorde van
opslagelementen.  Je kunt achterhalen wat de naam is van je
opslagelementen door middel van de volgende commando's:

================== =============================== ====================================
Besturingssysteem  Commando                        Kijk je dan naar
================== =============================== ====================================
Linux              :program:`lsblk`                linke kant
Linux              :program:`cat /proc/partitions` rechter kolom
Linux              :program:`dmesg | more`         begin van de regels waar je je apparaat herkent
OS X               :program:`diskutil list`        rechter kolom
FreeBSD            :program:`geom disk list`,      "Name"
                   :program:`geom label list`
FreeBSD            :program:`dmesg | more`         begin van de regels waar je je apparaat herkent
================== =============================== ====================================

Wanneer je de naam van je block device kent, kun je het gewenste
commando aanroepen. Bijvoorbeeld, als je USB stick :file:`/dev/sda1`
heeft als block device, kan je het mounten met:

.. code-block:: shell

   mount /dev/sda1 /mnt

Een nieuw bestandssysteem kiezen
-----------------------------------

Je hebt een nieuwe opslagapparaat en je moet kiezen met welk
bestandssysteem je het gaat gebruiken. Hoe doe je dat?

- als je de opslag alleen als intern schijf zal gebruiken, kies dan het
  gangbare bestandssysteem voor je besturingssysteem (bv. UFS, Ext4,
  HFS+, NTFS).

- als je de opslag zal gebruiken als wisselschijf, kan je kiezen voor
  FAT32 die het breedst ondersteunt is door meedere
  besturingssystemen.

- als je een DVD-R of DVD-RW wil branden, kies je dan voor UDF.

Welke bestandssystemen worden erkend door welke besturingssystemen?
`````````````````````````````````````````````````````````````````````

In de volgende tabel, "R" betekent "kan alleen lezen" en "R/W"
betekent "kan lezen en schrijven". Een sterretje
betekent dat extra stuurprogramma's nodig zijn.

=================== ======= === ===== ===== === ==== ===== ==== ==== ==== =====
Besturingssysteem   ISO9660 UDF FAT32 ExFAT UFS HFS+ NTFS  Ext4 XFS  ZFS  Btrfs
=================== ======= === ===== ===== === ==== ===== ==== ==== ==== =====
Linux (desktop)     R/W     R/W R/W   R/W*  R/W R/W* R/W*  R/W  R/W  R/W* R/W
Linux (Android)     R/W     R/W R/W   R/W*  R/W R/W* R     R/W  R/W*      R/W*
FreeBSD             R/W     R/W R/W   R/W*  R/W R*   R/W*  R/W  R    R/W
OS X                R/W     R/W R/W   R/W       R/W  R     R/W* R*   R/W*
Windows Vista+      R/W     R/W R/W   R/W            R/W   R*
Windows NT+         R           R/W                  R/W
=================== ======= === ===== ===== === ==== ===== ==== ==== ==== =====

Waarom bestaan er zoveel bestandssystemen?
````````````````````````````````````````````

Of "waarom gebruikt niet iedereen FAT32 of NTFS of HFS+?"

Sommige hebben bekende nadelen:

================= =========================================
Bestandssysteem   Grootste nadelen
================= =========================================
ISO9660           Schrijven is zeer onefficiënt
FAT32             Beperkt tot 16TB; ondersteunt geen symlinks; geen verschil tussen klein en hoofdletters in namen
ExFAT             Ontwikkelaar moet flink betalen aan Microsoft voor gebruik
HFS+              Zeer complex te implementeren, meestal weet alleen Apple hoe dit goed kan
NTFS              Ondersteunt symlinks alleen gedeeltelijk
================= =========================================

Bestandssysteem wissen of aanmaken
------------------------------------

.. index:: formatteren (opslag)
.. index:: newfs, mkfs

.. warning:: Pas op!

   De operaties hieronder kunnen de inhoud van je hele schijf wissen.
   Ook kun je per ongelijk de data uit de verkeerde schijf wissen als
   je een typfout maakt. Let goed op welke commando's je gebruikt.

Op Unix maak je een nieuw bestandssysteem aan met een of andere
variatie van het commando :program:`mkfs` (*MaKe FileSystem*). Het
aanmaken van een bestandssysteem verwijdert de huidige inhoud van
het opslagelement.

Er zijn echter vaak meerdere :program:`mkfs` programma's, een per
ondersteunde bestandssysteem:

================= ======================= =========================== ==========================
Bestandssysteem   Linux                   OS X                        FreeBSD
================= ======================= =========================== ==========================
FAT32             :program:`mkfs.vfat`    :program:`newfs_msdos`      :program:`newfs_msdos`
Ext4              :program:`mkfs.ext4`,   :program:`fuse-ext2.mke2fs` :program:`mkfs.ext4`,
                  :program:`mke2fs`                                   :program:`mke2fs`
UFS               :program:`mkfs.ufs`                                 :program:`newfs`
UDF               :program:`mkudffs`      :program:`newfs_udf`        :program:`mkisofs`
NTFS              :program:`mkfs.ntfs`                                :program:`mkntfs`
ExFAT             :program:`mkfs.exfat`   :program:`newfs_exfat`
HFS+              :program:`mkfs.hfsplus` :program:`newfs_hfs`
================= ======================= =========================== ==========================


Bestandssysteem verifiëren vanaf de commandolijn
--------------------------------------------------

Als de stroom uit valt, of als je een externe apparaat per ongeluk
ontkoppelt terwijl een programma er naar schrijft, kunnen fouten
ontstaan in het bestandssysteem.

Om dit te onderzoeken en eventueel fouten repareren, gebruik dan een
of andere variatie van het programma :program:`fsck` (*FileSystem
ChecK*).

================= ======================= =========================== ==========================
Bestandssysteem   Linux                   OS X                        FreeBSD
================= ======================= =========================== ==========================
FAT32             :program:`fsck.vfat`    :program:`fsck_msdos`       :program:`fsck_msdosfs`
Ext4              :program:`fsck.ext4`                                :program:`fsck_ext2fs`
UFS               :program:`fsck.ufs`                                 :program:`fsck_ufs`
UDF                                       :program:`fsck_udf`
NTFS              :program:`ntfsfix`                                  :program:`ntfsfix`
ExFAT             :program:`fsck.extfat`  :program:`fsck_exfat`
HFS+              :program:`fsck.hfsplus` :program:`fsck_hfs`
================= ======================= =========================== ==========================

Zoals :program:`mkfs`, verwachten de verschillende :program:`fsck` commando's de naam
van een block device als parameter.

(Zelf)evaluatie
---------------

1. Je koppelt een Windows harde schijf aan je Linux computer en het
   wordt niet automatisch herkend. Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      Eerst checken met :program:`lsblk` en :program:`dmesg` wat het
      systeem van de schijf vindt en wat zijn block device is.

      Dan proberen het bestandssysteem expliciet aan te geven voor het
      mounten met :program:`mount -t vfat`, :program:`mount.ntfs` en
      :program:`mount.exfat`.

      Dit moet eventueel met :program:`sudo` aan het begin om
      beheerderrechten te verlenen aan de verschillende commando's.

      .. note:: Als de commando's niet beschikbaar zijn, kan het zijn
         dat je Linuxsysteem de stuurprogramma's voor NTFS en/of ExFAT
         nog niet heeft. Raadpleeg je systeembeheerder en/of
         installeer eerst de benodigde tools.

2. Je wil een tweedehands USB sleutel hergebruiken, maar wil eerst
   zijn hele inhoud wissen. Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      Eerst checken met :program:`lsblk` en :program:`dmesg`
      om uit te zoeken wat zijn block device is.

      Dan :program:`mkfs.vfat` gebruiken.

      Dan :program:`mount` als je het meteen wilt gebruiken.

      Dit moet eventueel met :program:`sudo` aan het begin om
      beheerderrechten te verlenen aan de verschillende commando's.

      .. warning:: Goed opletten dat het commando de goede block devicenaam heeft,
         anders zal het de inhoud van een andere schijf wissen!

Verder inlezen
--------------

- Wikipedia. `Comparison of File Systems`__. Accessed August 2015.

  .. __: https://en.wikipedia.org/wiki/Comparison_of_file_systems

- C2 Wiki. `File System Alternatives`__. Accessed August 2015.

  .. __: http://c2.com/cgi/wiki?FileSystemAlternatives
