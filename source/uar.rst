.. include:: common.d

|UAR| – Dataarchiefformaten beheren
===================================

:Author: Raphael ‘kena’ Poss

.. contents::

Algemene begrippen
------------------

.. index:: archief
.. index:: compressie

Een *archief* is een verzameling van bestanden.

Ieder archiveringsprogramma heeft zijn eigen opslagformaat voor de
inhoud van archieven, oftevel *archiefformaat*.

Je kent al waarschijnlijk het ZIP formaat.  Je weet misschien al dat
ZIP een zogenaamd *gecomprimeerd* formaat is: de grootte van een ZIP
archief is vaak kleiner dan de bestanden erin. ZIP is in feite een
combinatie van een archiefformaat én een compressieformaat.

Er zijn verschillende archiefformaten, en in de informatica wordt
vaak archieveren en comprimeren als twee onafhankelijke stappen
beschouwd. Voor veel standaard archieveringscommando's op Unix is
compressie optioneel. Commando's bestaan ook om compressie uit te
voeren op willekeurige bestanden, niet alleen archieven.

Opslagformaten
--------------

.. index:: tar
.. index:: ustar
.. index:: ar
.. index:: cpio

De meest gangbare "pure" archiefformaten zijn:

===== ============== =============== ============= ============
Naam  Oorsprong      Standardisatie  Naamextensies Programma(s)
===== ============== =============== ============= ============
ustar Unix v7, 1979  POSIX           .tar          tar, pax
ar    Unix v1, 1971  POSIX           .a            ar
cpio  PWB/UNIX, 1977 POSIX (oud)     .cpio, .rpm   cpio, pax
===== ============== =============== ============= ============

.. index:: gzip
.. index:: xz
.. index:: compress

De meest gangbare "pure" compressieformaten zijn:

======== ========== ============ ============= =========================
Formaat  Algoritme  Oorsprong    Naamextensies Programma(s)
======== ========== ============ ============= =========================
xz       LZMA       Pavlov, 1999 .xz           xz
bzip2    BWT        Seward, 1996 .bz2          bzip2, bunzip2
gzip     LZ77       GNU, 1992    .gz           gzip, gunzip, zcat
compress LZW        4.3BSD, 1984 .Z            compress, uncompress
======== ========== ============ ============= =========================

Gecombineerde archieverings+compressieformaten:

======== ========== ============ ============= =========================
Formaat  Algoritme  Oorsprong    Naamextensies Programma(s)
======== ========== ============ ============= =========================
zip      (meerdere) PKWARE, 1989 .zip, .jar    zip, unzip
rar      LZSS/PPM   Roshal, 1993 .rar          rar, unrar
7-Zip    LZMA       Pavlov, 1999 .7z           p7zip
======== ========== ============ ============= =========================

De volgende bestandsnaamextensies zijn geen afzonderlijke formaten, ze
zijn alleen afkortingen voor de combinatie van tar met een
compressieprogramma:

=============== =============== ===============
Naamextensie    Gelijk aan      Gebruik met
=============== =============== ===============
.tgz            .tar.gz         tar -z, zcat | tar, tar | gzip -c
.tbz            .tar.bz2        tar -j, bzcat | tar, tar | bzip2 -c
.txz            .tar.xz         tar -J, xzcat | tar, tar | xz
=============== =============== ===============

Nieuw is beter vs. beschikbaarheid
----------------------------------

In het algemeen zijn recentelijkere formaten "beter": ieder formaat is
ooit ontwikkeld om bepaalde innovaties beschikbaar te maken voor
iedereen, dus hebben latere formaten vaak nieuwere features en/of
minder beperkingen.

Waarom zou je dan een "oudere" formaat gebruiken? **Omdat de tools
voor recentere formaten niet altijd beschikbaar zijn op een
willekeurige computer.**

In 2003 was bzip2 bijvoorbeeld een heel bekend goede
compressieprogramma maar het was nog niet gangbaar op de meeste unix
(en linux) systemen. In 2015 is xz heel wenselijk maar helaas nog niet
beschikbaar op veel computers.

In het algemeen kies je een formaat als volgt:

- als je bestanden beschikbaar moet maken aan een breder publiek, maak
  dan archieven in meerdere formaten. Het is bijvoorbeeld voor
  opensource projecten gebruikelijk om .tar.gz, .tar.bz2, .tar.xz en
  .zip tegelijk te publiceren.

- als je een bestand maakt voor gebruik alleen op korte termijn op
  dezelfde computer, het maakt niet uit; gebruik dan waar je aan gewend bent.

- als je bestanden moet inleveren voor werk of studie, gebruik dan het
  formaat aangeraden door je collega's / medestudenten / docenten. In
  de bachelor informatica, wordt vaak een "compressed tarball" gevraagd,
  dat betekent een tar archief gecomprimeerd met gzip of bzip2.

- als je bestanden wil archiveren voor eigen backups op lange termijn,
  gebruik dan een formaat die gestandardiseerd is, waarvoor de kans groot
  blijft dat compatibele tools blijven bestaan over meerdere jaren. Tar
  is vaak een goede keuze hiervoor.

Snelheid vs. compressiekracht
-----------------------------

Ieder compressiealgoritme kent parameters om de compressiekracht te controleren.

Een hogere compressiekracht levert kleinere resultaten, maar vergroot
de compressietijd.

Je kunt voor compress, gzip, bzip2, zip en xz de compressiekracht
aanpassen door een numerieke parameter tussen 0 (geen compressie) en 9
(maximale compressie).

Gebruikelijke commando's
------------------------

Verzameling commando's voor archieveren:

============== ======= ========== =========
Operatie       tar     zip        ar
============== ======= ========== =========
Aanmaken       tar -c  zip add    ar c
Uitpakken      tar -x  unzip      ar x
Toevoegen      tar -r  zip add    ar r
Updaten        tar -u  zip update ar u
Inspecteren    tar -t  unzip -l   ar t
Details        tar -tv unzip -v   ar tv
============== ======= ========== =========

Archiveren met compressie:

=========== ===============
Formaat     Commando
=========== ===============
xz          tar -J,  tar | xz
bzip2       tar -j,  tar | bzip2
gzip        tar -z,  tar | gzip
compress    tar -Z,  tar | compress
=========== ===============

Voorbeelden
-----------

Een enkel bestand comprimeren door gzip::

   gzip file.txt

Een map archieveren met tar zonder compressie::

   tar -cf archief.tar  map/

Een map archieveren met tar en gzip compressie::

   tar -czf archief.tar.gz  map/
   # gelijk aan:
   tar -cf- map/ | gzip -c >archief.tar.gz

De inhoud van een ongecomprimeerd tar archief inspecteren::

   tar -tvf archief.tar

Zelfde voor een gecomprimeerd archief::

   tar -tzvf archief.tar.gz

(Zelf)evaluatie
---------------

1. Welk archiefformaat wordt bedoeld wanneer er gesproken wordt over
   "compressed tarballs"?

   .. admonition:: Oplossing
      :class: toggle

      Een gecomprimeerd tar-archief.

2. Je hebt een groot tar archief ``files.tar``, en wil zijn inhoud
   inspecteren zonder het uit te pakken. Hoe doe je dit?

   .. admonition:: Oplossing
      :class: toggle

      ::

         tar -tf files.tar  # evt. -tvf

3. Je hebt al een archief ``myfiles.tar`` gemaakt, maar moet een
   ``.tgz`` inleveren. Welk commando gebruik je?

   .. admonition:: Oplossing
      :class: toggle

      ::

         gzip myfiles.tar
         mv myfiles.tar.gz myfiles.tgz

4. Je krijgt een bestand ``readme.txt.gz``. Hoe lees je dit?

   .. admonition:: Oplossing
      :class: toggle

      ::

          gunzip readme.txt.gz; less readme.txt
          # of:
          zcat readme.txt | less
          # of:
          zless readme.txt.gz

5. Je wil een gecomprimeerd archief maken met een hogere compressiekracht
   dan standaard, maar het commando "tar" ondersteunt geen parameter om
   de compressiekracht aan te passen. Hoe doe je het dan?

   .. admonition:: Oplossing
      :class: toggle

      ::

         tar -cf-  map/ | gzip -c -9 >archief.tar.gz

Verder inlezen
--------------

- FreeBSD man pages |ar(1)|_, |tar(1)|_, |gzip(1)|_, |bzip2(1)|_, |xz(1)|_

- Linux man pages `ar(1)`__, `tar(1)`__, `gzip(1)`__, `bzip2(1)`__, `xz(1)`__

  .. __: http://linux.die.net/man/1/ar
  .. __: http://linux.die.net/man/1/tar
  .. __: http://linux.die.net/man/1/gzip
  .. __: http://linux.die.net/man/1/bzip2
  .. __: http://linux.die.net/man/1/xz
