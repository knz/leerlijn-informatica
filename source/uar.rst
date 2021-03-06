.. include:: common.d

|UAR| – Dataarchiefformaten beheren
===================================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Algemene begrippen
------------------

.. index:: archief
.. index:: compressie

Een :def:`archief` is een verzameling van bestanden.

Ieder archiveringsprogramma heeft zijn eigen opslagformaat voor de
inhoud van archieven, oftevel :def:`archiefformaat`.

Je kent waarschijnlijk het ZIP formaat al.  Je weet misschien al dat
ZIP een zogenaamd :def:`gecomprimeerd` formaat is: de grootte van een ZIP
archief is vaak kleiner dan de bestanden erin. ZIP is in feite een
combinatie van een archiefformaat én een compressieformaat.

Er zijn verschillende archiefformaten, en in de informatica worden
archiveren en comprimeren vaak als twee onafhankelijke stappen
beschouwd. Voor veel standaard archiveringscommando's op Unix is
compressie optioneel. Er bestaan ook commando's om compressie uit te
voeren op willekeurige bestanden, niet alleen op archieven.

Opslagformaten
--------------

.. index:: tar
.. index:: ustar
.. index:: ar
.. index:: cpio

De meest gangbare "pure" archiefformaten zijn:

===== ============== =============== ============== ============
Naam  Oorsprong      Standardisatie  Naamextensies  Programma(s)
===== ============== =============== ============== ============
ustar Unix v7, 1979  POSIX           :file:`.tar`   |tar(1)|_, |pax(1)|_
ar    Unix v1, 1971  POSIX           :file:`.a`     |ar(1)|_
cpio  PWB/UNIX, 1977 POSIX (oud)     :file:`.cpio`,
                                     :file:`.rpm`   |cpio(1)|_, |pax(1)|_
===== ============== =============== ============== ============

.. index:: gzip
.. index:: xz
.. index:: compress

De meest gangbare "pure" compressieformaten zijn:

======== ========== ============ ============= =========================
Formaat  Algoritme  Oorsprong    Naamextensies Programma(s)
======== ========== ============ ============= =========================
xz       LZMA       Pavlov, 1999 :file:`.xz`   |xz(1)|_
bzip2    BWT        Seward, 1996 :file:`.bz2`  |bzip2(1)|_, |bunzip2(1)|_
gzip     LZ77       GNU, 1992    :file:`.gz`   |gzip(1)|_, |gunzip(1)|_, |zcat(1)|_
compress LZW        4.3BSD, 1984 :file:`.Z`    |compress(1)|_, |uncompress(1)|_
======== ========== ============ ============= =========================

Gecombineerde archiverings+compressieformaten:

======== ========== ============ ============= =========================
Formaat  Algoritme  Oorsprong    Naamextensies Programma(s)
======== ========== ============ ============= =========================
zip      (meerdere) PKWARE, 1989 :file:`.zip`,
                                 :file:`.jar`  zip, unzip
rar      LZSS/PPM   Roshal, 1993 :file:`.rar`  rar, unrar
7-Zip    LZMA       Pavlov, 1999 :file:`.7z`   p7zip
======== ========== ============ ============= =========================

De volgende bestandsnaamextensies zijn geen afzonderlijke formaten, ze
zijn alleen afkortingen voor de combinatie van tar met een
compressieprogramma:

=============== ================ ===============
Naamextensie    Gelijk aan       Gebruik met
=============== ================ ===============
:file:`.tgz`    :file:`.tar.gz`  tar -z, zcat | tar, tar | gzip -c
:file:`.tbz`    :file:`.tar.bz2` tar -j, bzcat | tar, tar | bzip2 -c
:file:`.txz`    :file:`.tar.xz`  tar -J, xzcat | tar, tar | xz
=============== ================ ===============

Nieuw is beter vs. beschikbaarheid
----------------------------------

Over het algemeen zijn recentelijkere formaten "beter": ieder formaat is
ooit ontwikkeld om bepaalde innovaties beschikbaar te maken voor
iedereen, dus hebben latere formaten vaak nieuwere features en/of
minder beperkingen.

Waarom zou je dan een "ouder" formaat gebruiken? **Omdat de tools
voor recentere formaten niet altijd beschikbaar zijn op een
willekeurige computer.**

In 2003 was |bzip2(1)|_ bijvoorbeeld een heel bekend en goed
compressieprogramma maar het was nog niet gangbaar op de meeste unix
(en Linux) systemen. In 2015 was |xz(1)|_ heel wenselijk maar helaas nog niet
beschikbaar op veel computers.

In het algemeen kies je een formaat als volgt:

- als je bestanden beschikbaar moet maken aan een breder publiek, maak
  dan archieven in meerdere formaten. Het is bijvoorbeeld voor
  opensource projecten gebruikelijk om :file:`.tar.gz`,
  :file:`.tar.bz2`, :file:`.tar.xz` en :file:`.zip` tegelijk te
  publiceren.

- als je een bestand maakt voor gebruik op korte termijn op
  dezelfde computer, maakt het niet uit; gebruik dan waar je aan
  gewend bent.

- als je bestanden moet inleveren voor werk of studie, gebruik dan het
  formaat aangeraden door je collega's / medestudenten / docenten. In
  de bachelor informatica, wordt vaak een "compressed tarball"
  gevraagd, dat betekent een tar archief gecomprimeerd met |gzip(1)|_
  of |bzip2(1)|_.

- als je bestanden wilt archiveren voor eigen backups op lange termijn,
  gebruik dan een formaat dat gestandaardiseerd is, waardoor de kans groot
  blijft dat compatibele tools blijven bestaan over meerdere jaren. Tar
  is vaak een goede keuze hiervoor.

Snelheid vs. compressiekracht
-----------------------------

Ieder compressiealgoritme kent parameters om de compressiekracht te controleren.

Een hogere compressiekracht levert kleinere resultaten, maar vergroot
de compressietijd.

Je kunt voor |compress(1)|_, |gzip(1)|_, |bzip2(1)|_, zip en |xz(1)|_
de compressiekracht aanpassen met een numerieke parameter tussen 0
(geen compressie) en 9 (maximale compressie).

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

Een enkel bestand comprimeren met gzip::

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

2. Je hebt een groot tar archief :file:`files.tar`, en wil zijn inhoud
   inspecteren zonder het uit te pakken. Hoe doe je dit?

   .. admonition:: Oplossing
      :class: toggle

      ::

         tar -tf files.tar  # evt. -tvf

3. Je hebt al een archief :file:`myfiles.tar` gemaakt, maar moet een
   :file:`.tgz` inleveren. Welk commando gebruik je?

   .. admonition:: Oplossing
      :class: toggle

      ::

         gzip myfiles.tar
         mv myfiles.tar.gz myfiles.tgz

4. Je krijgt een bestand :file:`readme.txt.gz`. Hoe lees je dit?

   .. admonition:: Oplossing
      :class: toggle

      ::

          gunzip readme.txt.gz; less readme.txt
          # of:
          zcat readme.txt | less
          # of:
          zless readme.txt.gz

5. Je wilt een gecomprimeerd archief maken met een hogere compressiekracht
   dan standaard, maar het commando |tar(1)|_ ondersteunt geen parameter om
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
