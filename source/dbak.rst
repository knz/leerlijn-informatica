.. include:: common.d

|DBAK| – Back-ups (basis)
=========================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Waarom moet je back-ups hebben?
-------------------------------

.. index:: back-ups

De belangrijkste redenen:

- **crash van de computer** - de data kan onleesbaar worden als een programma faalt tijdens het schrijven. Statistisch een paar keer per jaar.
- **hardwarefout in opslagapparaat** - schijven worden oud en kunnen falen zonder waarschuwing. Statistisch een keer per 1-2 jaar.
- **diefstal** - het gebeurt, helaas. Statistisch een keer per 3-10 jaar.

Je **zal ongetwijfeld data verliezen** tenmijnste een keer tijdens je studie, en meerdere keer daarna.

Back-ups moet je zien als een **verzekering**: het lijkt niet nodig te
zijn totdat een probleem ontstaat, en dan is het te laat om ermee te
beginnen.

.. note:: Tijdens je studie **kan je niet "data verlies" gebruiken
   als excuus voor laat inleveren**, tenzij er spraak is van diefstal
   gemeld bij de politie. Het is je eigen verantwoordelijkheid om
   jezelf back-ups te regelen en ervoor zorgen dat je back-ups altijd
   goed up-to-date en bruikbaar zijn.

In de praktijk
--------------

Vroeger moesten mensen handmatig en regelmatig hun data kopiëren naar
externe opslag om back-ups te maken. Dit was onpraktisch en
tijdberovend, en back-ups waren dus vaak vergeten.

Gelukkig hebben we nu veel verschillende tools om back-ups automatisch te
regelen. We maken verder een onderscheid tussen:

- echte :def:`back-up programma's`, die alle bestanden kunnen opnemen en meerdere
  versies van de gearchiveerde bestanden over tijd kunnen bijhouden;

- :def:`bestandssynchronisatieprogramma's`, die de inhoud van een bepaalde map
  identiek houdt tussen meerdere computers, maar waar je vaak niet meer
  naar oudere versies van een bestand kunt kijken.

- :def:`versiebeheerprogramma's`, die lokaal meerdere versies van een map
  bijhouden, met eventueel synchronisatie met andere computers.

In de praktijk worden alle 3 soorten programma's tegelijk gebruikt, 
voor verschillende soorten documenten:

======================= ========================================
Soort programma         Waarvoor?
======================= ========================================
Echte back-up           Systeemconfiguratie, geïnstalleerde toepassingen
Bestandssynchronisatie  Foto's, muziek, enz
Versiebeheer            Werkdocumenten, broncode, rapportages, scripties
======================= ========================================

Back-up programma's
-------------------

.. index:: Time Machine
.. index:: tarsnap
.. index:: rsnapshot
.. index:: rsync

- Back-up programma met GUI ingebouwd in besturingssysteem, met
  lokale kopiëen op eigen opslagapparaten:

  - `Déjà Dup`__ / duplicity__ voor Ubuntu

   .. __: https://apps.ubuntu.com/cat/applications/deja-dup/
   .. __: http://duplicity.nongnu.org/

  - `Time Machine`__ voor OS X

   .. __: https://support.apple.com/nl-nl/HT201250

- Back-up programma ingebouwd in besturingssysteem, met
  kopiëen op de computers van het bedrijf:

  - Cloud Sync in Android (bij Google dus in de VS)
  - iCloud in iOS / OS X (bij Apple dus in de VS)

- Niet-interactieve back-up programma's voor unix, voor eigen opslag of
  tussen eigen computers:

  - rsnapshot__

    .. __: http://rsnapshot.org/

  - rsync__

    .. __: https://rsync.samba.org/

- Niet-interactieve back-up programma's voor unix, met kopiëen op de computers
  van het bedrijf:

  - tarsnap__ (opslag bij Amazon op meerdere plekken in de wereld)

    .. __: http://www.tarsnap.com/

Bestandssynchronisatie
----------------------

.. index:: SURFdrive
.. index:: Dropbox
.. index:: Google Drive
.. index:: iCloud

- Bestandssynchronisatieprogramma's tussen je verschillende computers
  en die van het bedrijf die het programma maakt:

  - SURFdrive__ (opslag in Nederland - **je krijgt daar als UvA student
    automatisch een account**)
  
    .. __: http://surfdrive.surf.nl/

  - Dropbox__ (opslag in de VS)

    .. __: http://www.dropbox.com/

  - `Google Drive`__ (opslag in de VS)

    .. __: http://drive.google.com/

  - iCloud__ voor iOS / OS X (opslag in de VS)

    .. __: http://www.icloud.com/

- Bestandssynchronisatieprogramma's tussen alleen je verschillende computers,
  zonder de data te verspreiden naar derde partijen:

  - ownCloud__

   .. __: https://owncloud.org/

  - `Bittorent Sync`__

   .. __: https://www.getsync.com/

Versiebeheerprogramma's
-----------------------

.. index:: versiebeheer
.. index:: git
.. index:: mercurial
.. index:: subversion
.. index:: cvs
.. index:: repository
.. index:: opslagplaats
.. index:: gitlab

Versiebeheerprogramma's houden de veranderingen aan je bestanden over
tijd in de gaten en bewaren oude kopiëen door middel van eigen
database, die heet een :def:`opslagplaats` (Engels: :def:`repository`).

De meest gebruikte versiebeheerprogramma's medio 2015 zijn Git
(:program:`git`), en Mercurial (:program:`hg`). Er wordt ook steeds
gebruik gemaakt van Subversion (:program:`svn`) en heel soms van CVS
(:program:`cvs`), echter zijn die niet aangeraden voor nieuwe
projecten.

Deze programma's kun je gebruiken voor je broncode tijdens
programmeropdrachten, maar ook voor de verschillende verslagen
en scripties die je erbij zal moeten inleveren.

Vaak kun je ze koppelen aan een aandere computerserver die als
:def:`opslagplaats op afstand` (Engels: :def:`remote repository`) zal
spelen en eventueel back-ups zal regelen voor je repositories. 

Bijvoorbeeld op de UvA wordt je uitgenodigd op GitLab: 
https://gitlab-fnwi.uva.nl/ — het gebruik daarvan leer je later met |SGIT1|_.

(Zelf)evaluatie
---------------

1. Je krijgt een nieuwe computer. Hoe regel je geschikte back-ups voordat
   je hem begint te gebruiken voor werk?

   .. admonition:: Oplossing
      :class: toggle

      1. externe harde of SSD schijf aanschaffen (of eventueel
         bestaande schijf hergebruiken) en echte back-up programma
         inschakelen en configureren voor het hele systeem.

      2. eventueel het clientprogramma van de
         bestandssynchronisatiediensten (SURFdrive, Dropbox, e.d.)
         waar je al een account hebt installeren, en in het
         achtergrond laten synchroniseren.

      3. voor nieuwe programmeerprojecten, verslagen, scripties etc
         een versiebeheerprogramma zoals Git inschakelen, eventueel
         met behulp van GitLab__.

         .. __: https://gitlab-fnwi.uva.nl/

