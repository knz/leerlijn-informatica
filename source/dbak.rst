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

Je zal, tenminste een keer tijdens je studie, ongetwijfeld **data verliezen**, en meerdere keer daarna.

Back-ups moet je zien als een **verzekering**: het lijkt niet nodig te
zijn totdat er een probleem ontstaat, en dan is het te laat om ermee te
beginnen.

.. note:: Tijdens je studie **kan je niet "data verlies" als excuus gebruiken
   voor te laat inleveren**, zelfs wanneer er sprake is van diefstal.
   Het is je eigen verantwoordelijkheid om voor
   jezelf back-ups te regelen en ervoor zorgen dat je back-ups altijd
   goed up-to-date en bruikbaar zijn.

In de praktijk
--------------

Vroeger moesten mensen handmatig en regelmatig hun data kopiëren naar
externe opslag om back-ups te maken. Dit was onpraktisch en
tijdrovend, en werd vaak vergeten.

Gelukkig hebben we nu veel verschillende tools om back-ups automatisch te
regelen. We maken onderscheid tussen:

- echte :def:`back-up programma's`, die alle bestanden kunnen opnemen en meerdere
  versies van de gearchiveerde bestanden over de tijd kunnen bijhouden;

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

.. index:: VCS
.. index:: versiebeheer
.. index:: version control
.. index:: git
.. index:: mercurial
.. index:: subversion
.. index:: cvs
.. index:: repository
.. index:: opslagplaats
.. index:: gitlab

Versiebeheerprogramma's (Engels: :def:`version control software`, afgekort VCS) houden de veranderingen aan je bestanden over
tijd in de gaten en bewaren oude kopiëen door middel van een eigen
database, een zogeheten :def:`opslagplaats` (Engels: :def:`repository`).

De meest gebruikte versiebeheerprogramma's medio 2017 zijn Git
(:program:`git`) en Mercurial (:program:`hg`). Er wordt ook steeds
gebruik gemaakt van Subversion (:program:`svn`) en heel soms van CVS
(:program:`cvs`), echter zijn die niet aan te raden voor nieuwe
projecten.

Deze programma's kun je gebruiken voor je broncode tijdens
programmeropdrachten, maar ook voor de verschillende verslagen
en scripties die je erbij zal moeten inleveren.

Vaak kun je ze koppelen aan een andere computerserver die als
:def:`opslagplaats op afstand` (Engels: :def:`remote repository`) optreedt
en eventueel back-ups zal regelen voor je repositories.

Op de UvA, bijvoorlbeeld, wordt je uitgenodigd op GitLab:
https://gitlab-fnwi.uva.nl/ — het gebruik daarvan leer je later met |SGIT1|_.

Pas op je bestandseigenschappen!
--------------------------------

Op unixsystemen heeft ieder bestand belangrijke eigenschappen naast
zijn naam: laatste wijzingingsdatum, aanmaakdatum en ook
eigenaarinformatie en **toegangsrechten**. Vooral de toegangsrechten
zijn belangrijk omdat ze bepalen of een bestand draaibaar (Engels:
:def:`executable`) is.

**Bestandssynchronisatieprogramma's gemaakt om ook te werken met
Windows (Dropbox etc.) bewaren deze eigenschappen niet goed.**
Versiebeheersoftware bewaart de data en eigenaarsinformatie ook niet.

Om een exacte kopie te maken van een unix bestandssysteem, kan je een
echt back-up programma gebruiken (zie boven), of eventueel kun je de
bestanden archiveren met :program:`tar -p ...` (:program:`-p` bewaart
de toegangsrechten, zie ook |UAR|_ voor het gebruik van |tar(1)|_)
waardoor deze eigenschappen ook goed worden opgeslagen.

(Zelf)evaluatie
---------------

1. Je krijgt een nieuwe computer. Hoe regel je geschikte back-ups voordat
   je deze begint te gebruiken?

   .. admonition:: Oplossing
      :class: toggle

      1. externe harde of SSD schijf aanschaffen (of eventueel
	 bestaande schijf hergebruiken) en een echt back-up programma
	 inschakelen en configureren voor het hele systeem.

      2. eventueel het clientprogramma van de
	 bestandssynchronisatiediensten (SURFdrive, Dropbox, e.d.)
	 waar je al een account hebt installeren, en in de
	 achtergrond laten synchroniseren.

      3. voor nieuwe programmeerprojecten, verslagen, scripties etc
	 een versiebeheerprogramma zoals Git inschakelen, eventueel
	 met behulp van GitLab__.

	 .. __: https://gitlab-fnwi.uva.nl/

2. Je hebt je eigen programma gemaakt en wilt hem delen met een
   vriend. Je plaatst het in je Dropbox :file:`Shared` map. Je vriend zegt, echter,
   dat het niet goed werkt. Wat is er aan de hand?

   .. admonition:: Oplossing
      :class: toggle

      De toegangsrechten zijn niet goed gekopieerd door Dropbox.

      Maak een archief van je programma met :program:`tar -p ...` en
      stuur het naar je vriend.  Eventueel kan je het tar archief ook
      delen via Dropbox.
