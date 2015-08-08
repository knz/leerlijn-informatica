.. include:: common.d

|UCMD| – Basiscommando's
==========================

:Author: Raphael ‘kena’ Poss

De volgende secties introduceren een aantal verschillende
programma's. Vergeet niet |man(1)|_ raad te plegen voor meer
informatie.

.. contents::

Een deel van dit hoofdstuk is afgeleid van de `Introductie Unix`_.

Bestandssysteem
-----------------

.. index:: current directory
.. index:: pwd
.. index:: huidige map
.. index:: cd
.. index:: pad (filesysteem)
.. index:: filesysteem
.. index:: bestandssysteem
.. index:: thuismap
.. index:: home directory

Bestanden worden georganiseerd in mappen, met mappen binnen
mappen. Dit principe ken je al.

De bijzonderheden:

- ieder proces heeft een notie van "huidige map", of *working
  directory*. Als je een bestand noemt zonder te zeggen waar het zich
  vindt, gaat het proces dat bestand proberen te zoeken in de huidige
  map.

- het commando om je "huidige map" te controleren in een shell:
  :program:`cd`

  (heet ook "change directory")

  en om je huidige map te identificeren: :program:`pwd`

  ("print working directory")

- Het commando :program:`cd` zonder argumenten brengt je altijd naar
  je "thuismap" of *home directory*.

- In je shell wordt de afkorting "``~``" ook erkend voor je
  thuismap. Dus brengt :program:`cd ~` je ook terug naar je thuismap.

- Nieuwe processen hebben dezelfde working directory als hun
  ouderproces, maar kunnen het verder veranderen zonder die van de
  ouder te veranderen.

- Een *pad* is een naam naar een map of bestand *vanaf* de huidige
  map. Bijvoorbeeld :file:`Documents/hello.txt` refereert naar het
  bestand/map :file:`hello.txt` in de map :file:`Documents` vanuit de
  huidige map. Je kunt een *absoluut* pad noemen door met een "/" te
  beginnen. Bijvoorbeeld op de UvA machines refereert altijd
  :file:`/scratch` naar een map met veel ruimte, bijvoorbeeld voor
  experimenten.

  Opdracht: gebruik :program:`cd` dan :program:`pwd` om het absolute
  pad naar je thuismap te leren.

- Er is maar een grote boom van mappen: geen "schrijfletters".
  Verschillende opslagelementen worden benaderd door verschillende
  paden in de boom. Bijvoorbeeld op Android is de SD-kaart vaak te
  vinden in de map :file:`/sdcard`. Op OSX worden harde schrijven en
  geheugenkaartjes zichtbaar in de map :file:`/Volumes`. Meestal op andere
  soorten Unixsysstemen zijn opslagelementen zichtbaar in de map
  :file:`/mnt`.

- de bijzondere naam :file:`..` refereert altijd naar "een map omhoog".

- de bijzondere naam :file:`.` refereert altijd naar "deze map".

Basisoperaties op mappen en bestanden
--------------------------------------

.. index:: mkdir
.. index:: rmdir
.. index:: ls
.. index:: rm
.. index:: mv
.. index:: cp
.. index:: ln
.. index:: touch

============== =======================================
Programma      Beschrijving
============== =======================================
|mkdir(1)|_    Map aanmaken (*MaKe DIRectory*)
|rmdir(1)|_    Map verwijderen (*ReMove DIRectory*)
|ls(1)|_       Inhoud van map bekijken (*LiSt directory*)
|rm(1)|_       Bestand of map verwijderen (*ReMove*)
|mv(1)|_       Bestand of map hernoemen / verplaatsen (*MoVe*)
|cp(1)|_       Bestand of map kopiëren (*CoPy*)
|ln(1)|_       Extra naam (link) aanamaken (*LiNk*)
|touch(1)|_    Bestand aanraken of leeg bestand aanmaken
============== =======================================

Goed te weten:

- |mkdir(1)|_ faalt als de map al bestaat. Gebruik :program:`mkdir -p`
  voor "een map aanmaken, niets doen als het al bestaat".

- |rmdir(1)|_ faalt als de map niet leeg is. Gebruik :program:`rm -r`
  om recursief een map en zijn inhoud te verwijderen.

- |ls(1)|_ geeft meer details wanneer aangeroepen met :program:`ls
  -l`. Het kan sorteren met :program:`-t` (modificatietijd) en
  :program:`-S` (grootte).

- |rm(1)|_ is oorspronkelijk bedoeld om gewone bestanden te
  verwijderen. Gebruik :program:`rm -r` om recursief mappen en hun inhoud te
  verwijderen.

- |cp(1)|_ is oorspronkelijk bedoeld om gewone bestanden te
  kopiëren. Om mappen recursief te kopiëren, gebruik :program:`cp -R`.

- |cp(1)|_ zonder argument verandert de laatste modificatiedatum,
  aanmaakdatum en eigenaar van de kopie. Om deze eigenschappen te
  bewaren, gebruik :program:`cp -a`.

- |ln(1)|_ kan twee soorten verwijzingen aanmaken, zogenoemd "hard" en
  "soft" links (ook *symbolic* genoemd). Soft links worden heel vak
  gebruikt om Unix software te bouwen. Raadpleeg de Wikipedia pagina's
  voor meer informatie:

  https://en.wikipedia.org/wiki/Hard_link

  https://en.wikipedia.org/wiki/Symbolic_link

- De hoofdrol van |touch(1)|_ is om de laatste modificatiedatum te
  veranderen naar de huidige tijd. Dit kan bijvoorbeeld een
  backupsysteem informeren om een bestand opnieuw te pakken.
  |touch(1)|_ wordt ook vaak gebruikt tijdens het automatiseren van
  complexe taken. Dit zal je later leren.

Bestandstatus inspecteren
-------------------------

.. index:: stat (command)
.. index:: file (command)
.. index:: modified, last modification date
.. index:: accessed, last access date
.. index:: created, creation date

============== =======================================
Programma      Beschrijving
============== =======================================
|stat(1)|_     Eigenschappen van bestand(en) weergeven
|file(1)|_     Bestandsinhoudtype identificeren
============== =======================================

Goed te weten:

- |stat(1)|_ (wordt vaak aangeroepen als :program:`stat -x`) geeft
  details over de aanmaakdatum, laatste modificatiedatum, laatste
  toegangsdatum, grootte, eigenaarschap en locatie van het object in
  de filesystem.

- **Op een Unixsysteem is de type van de data binnen een bestand niet
  bepaald door zijn bestandsnaamextensie**. Er kunt dus een JPEG beeld
  zich bevinden in een bestand genoemd :file:`hallo.exe`, of een
  draaibaar programma in een bestand :file:`pretty.jpg`.

- Het programma |file(1)|_ kijkt naar de data binnen een bestand om je
  te informeren over zijn type. Bijvoorbeeld

  .. code-block:: shell

     $ file hello.jpg
     hello.jpg: JPEG image data, JFIF standard 1.01

     $ mv hello.jpg hello.txt
     $ file hello.txt
     hello.txt: JPEG image data, JFIF standard 1.01

Inhoud van (tekst)bestanden inspecteren
---------------------------------------

======================= =========================================
Programma               Beschrijving
======================= =========================================
|cat(1)|_               Hele inhoud weergeven in een keer
|head(1)|_              Eerste regels van bestand weergeven
|tail(1)|_              Laatste regels van bestand weergeven
|more(1)|_ / |less(1)|_ Inhoud weergeven + pause tussen schermen
|sort(1)|_              Regels sorteren
|wc(1)|_                Regels, woorden en bytes tellen
|cut(1)|_               Kolommen selecteren
======================= =========================================

- met |more(1)|_ kan je niet terugscrollen tijdens de weergave. Met
  |less(1)|_ kan dat wel, maar |less(1)|_ heeft meer werkgeheugen nodig.

- Standaard pakken |head(1)|_ en |tail(1)|_ 10 regels uit hun input
  (aan het begin of aan het eind). Dit aantal kun je veranderen met
  een argument. Raadpleeg hun manpage voor meer informatie.

- commando's kunnen worden gecombineerd. Bijvoorbeeld:

  - :program:`ls -lS | head` print de 10 grootste bestanden in een
    map.

  - :program:`ls -l | more` pauseert tijdens de weergave van een grote
    map.

- |ls(1)|_ zonder argumenten en niet gecombineert print zijn uitvoer
  in kolommen. Als het wordt gecombineerd met een ander programma
  (bv. :program:`| less`) gebruikt het dan maar 1 kolom.  Om
  kolommen te forceren, gebruik dan :program:`ls -C`.

- Standaard telt |wc(1)|_ regels, woorden en bytes tegelijk. Om alleen
  regels te tellen, gebruik dan :program:`wc -l`.

- |cut(1)|_ kent twee hoofdvormen:

  - :program:`cut -cN-M` selecteert kolommen N tot M in de input. Een
    kolom is gedefinieerd door 1 character. Bijvoorbeeld:

    .. code-block:: shell

      $ ls
      Makefile  README.rst  build/  genlinks.py source/

      $ ls | cut -c1-3
      Mak
      REA
      bui
      gen
      sou

  - :program:`cut -dX -fN-M` selecteert kolommen N-M op basis van
    scheidingsteken X. Bijvoorbeeld:

    .. code-block:: shell

      $ cat /etc/passwd | tail -n 3
      _displaypolicyd:*:244:244::/var/empty:/usr/bin/false
      _astris:*:245:245::/var/db/astris:/usr/bin/false
      _krbfast:*:246:-2::/var/empty:/usr/bin/false

      $ cat /etc/passwd | tail -n 3 | cut -d: -f1
      _displaypolicyd
      _astris
      _krbfast

- |sort(1)|_ geeft het omgekeerde volgorde wanneer aangeroepen met
  :program:`sort -r`.

- |sort(1)|_ kan ook duplicaatregels verwijderen indien aangeroepen met
  :program:`sort -u`.

Bestanden en mappen zoeken
--------------------------

=========== ============================
Programma   Beschrijving
=========== ============================
|find(1)|_  Zoeken op naam of eigenschappen
|grep(1)|_  Zoeken op inhoud
=========== ============================

- Met |find(1)|_ geef je altijd als eerste parameter het pad naar de
  map waar je wilt beginnen met zoeken. Vaak is het :program:`find .`
  (zoeken vanaf huidige map), :program:`find ~` (zoeken overal in
  thuismap) of :program:`find /` (zoeken op hele
  bestandssysteem).

- Om te zoeken op basis van naam of eigenschappen worden de volgende
  vormen het vaakst gebruikt:

  .. code-block:: shell

       # zoek naar een exacte naam
       find . -name bestandsnaam.txt

       # zoeken naar een naamsdeel. Pas op,
       # de aanhangtekens zijn belangrijk.
       find . -name "*naamsdeel*"

       # zoeken naar bestanden grooter dan 100 kbytes
       find . -size +100k

       # zoeken naar bestanden veranderd
       # sinds 10 minuten geleden:
       find . -mtime -10m

  .. note:: |find(1)|_ kent veel meer vormen, je kunt zelfs meerdere
     condities combineren. Lees er evt. verder over in de manpage.

- In tegenstelling met |find(1)|_, met |grep(1)|_ komt het te zoeken
  woord eerst en dan pas de paden naar de te inspecteren bestanden of
  mappen.

- De meest gebruikte vorm van |grep(1)|_ is met een enkel woord,
  bijvoorbeeld:

  .. code-block:: shell

       # zoek naar "root" in bestand /etc/passwd
       $ grep root /etc/passwd
       root:*:0:0:System Administrator:/var/root:/bin/sh
       daemon:*:1:1:System Services:/var/root:/usr/bin/false
       _cvmsroot:*:212:212:CVMS Root:/var/empty:/usr/bin/false

- Je kunt |grep(1)|_ eenvoudig combineren met |head(1)|_ of andere
  commando's, bijvoorbeeld:

  .. code-block:: shell

       # tel hoeveel regels in /etc/passwd "krb" bevatten:
       $ cat /etc/passwd | grep krb | wc -l
       7

       # print de laatste regel in /etc/passwd
       # die "krb" bevat:
       $ cat /etc/passwd | grep krb | tail -n 1
       _krbfast:*:246:-2:Kerberos FAST Account:/var/empty:/usr/bin/false

(Zelf)evaluatie
---------------

1. Je huidige map is :file:`/home/hai`. Na het commando :program:`cd
   ../../etc/./../var`, wat is je huidige map?

   .. admonition:: Oplossing
      :class: toggle

      :file:`/var`

2. Je huidige map is :file:`/`. Na het commando :program:`cd ..`, wat
   is je huidige map?

   .. admonition:: Oplossing
      :class: toggle

      :file:`/`  (want :file:`/` is zijn eigen bovenmap)

3. Een logbestand groeit wanneer applicaties meldingen schrijven aan
   het eind van het bestand. Welk kommando gebruik je om
   de laatste 10 logberichten van :file:`app.log` te printen?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         tail app.log

4. Het commando :program:`rm foo` faalt met de melding "rm: foo: is a
   directory". Wat doe je om het te verwijderen?

   .. admonition:: Oplossing
      :class: toggle

      Eerst kijken met |ls(1)|_ of :file:`foo` belangrijke bestanden
      bevat. Dan eventueel :program:`rm -r`.

5. Hoe maak je een backup van je projectmap :file:`opdracht` in map
   :file:`/backups/20150808`?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         mkdir -p /backups/20150808
         cp -a opdracht /backups/20150808

      .. note:: Het is belangrijk om :program:`-a` te gebruiken met
         |cp(1)|_ omdat anders worden de bestandseigenschappen niet goed
         bewaard.

6. Welk commando gebruik je om de naam van alle gebruikers (eerste
   kolom in :file:`/etc/passwd`) die een een "o" in hun naam hebben, in
   omgekeerde volgorde weer te geven?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         cat /etc/passwd | cut -d: -f1 | grep o | sort -r

7. Welk commando gebruik je om te tellen hoeveel regels met het woord
   "hello" zich bevinden in :file:`roman1.txt` en :file:`roman2.txt`
   samengevoegd?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         cat roman1.txt roman2.txt | grep hello | wc -l

         # eventueel ook:
         grep hello roman1.txt roman2.txt | wc -l

Verder inlezen
--------------

- University of Surrey. `UNIX Tutorial for Beginners`__. 2001.

  .. __: http://www.ee.surrey.ac.uk/Teaching/Unix/index.html

- Colin Barschel. `Unix Toolbox`__, 2007-2012.

  .. __: http://cb.vu/unixtoolbox.xhtml

- Raphael Poss. `Introductie Unix`_, 2013.

  .. _`Introductie Unix`: http://science.raphael.poss.name/intro-unix.html
