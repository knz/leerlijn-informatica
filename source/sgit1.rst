.. include:: common.d

|SGIT1| – Git gebruiken (basis)
=================================

:Auteurs: Robin de Vries, Rex Valkering, Robert van Wijk, Raphael
          ‘kena’ Poss, Stephan van Schaik

.. contents::
   :local:

Overzicht
---------

.. index:: gedistribueerd versiebeheersysteem
.. index:: distributed version control
.. index:: opslagplaats
.. index:: repository
.. index:: git

.. pull-quote::

   **Git** is een :def:`gedistribueerd versiebeheersysteem` (Engels:
   :def:`distributed version control system` of DVCS) dat bestaat uit
   een verzameling aan utilities die ervoor zorgen dat men eenvoudig
   code in een :def:`opslagplaats` (Engels: :def:`repository`) kan
   onderbrengen en beheren. Hiermee kunnen alle wijzigingen aan de
   code geregistreerd worden, waardoor er een soort logboek ontstaat
   dat een overzicht van codewijzigingen aan het project biedt. Zo kan
   men kleine aanpassingen beschrijven, kijken naar het verloop van
   het project, terugvallen op oudere versies van de code, etc.

   --Stephan van Schaik

Tijdens het programmeren gebruik je vaak Git door middel van het
commandolijnprogramma :program:`git`.

**GitLab** is een webprogramma dat een gebruikersinterface voor Git en
persoonlijke online repositories biedt.
De FNWI biedt een GitLab site aan alle informaticastudenten:

  https://gitlab-fnwi.uva.nl/

Voorbereiding
-------------

.. index:: public key (ssh)
.. index:: key authentication (ssh)
.. index:: sleutelauthenticatie (ssh)
.. index:: user.name (git)
.. index:: user.email (git)

1. Waarschijnlijk staat Git al op je laptop. Zo niet, zie hier voor de
   installatie instructies:

   https://informatica-byod.innovatievooronderwijs.nl/index.php/Git

2. Bereid je Git omgeving voor met je identificatiegegevens:

   .. code-block:: shell

      $ git config --global user.name "jouw volledige naam"
      $ git config --global user.email "jouw@mailadres.nl"

3. (Optioneel) Zorg ervoor dat je op de GitLab van de universiteit
   kunt inloggen: https://gitlab-fnwi.uva.nl/

4. (Optioneel) Om niet iedere keer je UvAnetID wachtwoord in te moeten
   tikken, kun je "SSH sleutelauthenticatie" voorbereiden. Als je nog
   geen SSH sleutels hebt aangemaakt gebruik het volgende commando:

   .. code-block:: shell

      $ ssh-keygen

   Je kunt daar een eigen wachtwoord instellen.  De inhoud van
   :file:`~/.ssh/id_rsa.pub` wordt dan je :def:`publieke sleutel` (dit
   wordt verder uitgelegd in |USRV1|_). Je kunt deze in een
   teksteditor openen, kopiëren dan plakken in Gitlab -> Profile
   settings -> SSH keys.

Je eigen lokale repository maken
--------------------------------

Stel je voor dat je de inhoud van je map :file:`~/belangrijk` in een
Git repository wil opslaan:

Hier is maar één commando voor nodig:

.. code-block:: shell

   $ cd ~/belangrijk
   $ git init

Je weet dat het commando successvol is afgerond omdat een map
:file:`.git` wordt aangemaakt (dit zie je evt. met :program:`ls -a`).

Bestanden laten tracken door Git en committen
---------------------------------------------

.. index:: add (git)
.. index:: status (git)
.. index:: commit message

Via het commando :program:`git add` kun je bestanden klaarzetten om te
committen. Dit kun je voor een enkel bestand doen, een hele map of
alle bestanden (:program:`git add *`). Controleer consequent na het
doen van een :program:`git add` de :program:`git status` om te kijken
of jouw handelingen de gewenste uitkomst hebben.

Via het commando :program:`git status` kun je kijken welke:

- Bestanden klaar staan om gecommit te worden – ‘Changes to be committed’

- Bestanden gevolgd worden door Git maar nog niet klaar staan om gecommit te worden – ‘Changes not staged for commit’

- Bestanden die niet door Git worden gevolgd – ‘Untracked files’.

Vervolgens kun je de bestanden die daarvoor klaarstaan committen. In
een bericht (Engels: :def:`commit message`) beschrijf je kort welke
wijzigingen je sinds de vorige commit hebt gedaan, zodat je deze later
makkelijk terug kunt vinden:

.. code-block:: shell

   $ git commit –m "Bericht"

Er is ook een manier om alle bestanden die door git gevolgd worden in
één keer te commiten, door de flag :program:`--all`, of :program:`-a`
toe te voegen tijdens het committen. Dit treft dus alle bestanden die
een keer in een vorige commit aan de repository zijn toegevoegd en nu
zijn aangepast:

.. code-block:: shell

   $ git commit -a -m "Bericht"

Naar oude versies kijken
------------------------

Met het commando :program:`git log` kun je de geschiedenis van je
repository inspecteren. In de output van :program:`git log` is elke
commit geidentificeerd door een tekenreeks die het :def:`commit id` of de
:def:`commit hash` heet.

Door middel van de commit hash kun je oudere versies van de bestanden
terug brengen in je huidige map. Dit doe je met het commando:

.. code-block:: shell

   $ git checkout plaats-de-commit-hash-hier

Als je klaar bent met het inspecteren van oudere versies, gebruik dan
het commando :program:`git checkout master` om terug te komen naar de
meest recente versie.

Ongewenste veranderingen verwerpen met :program:`git reset`
-----------------------------------------------------------

Bijvoorbeeld, je hebt werkende bestanden eerder opgeslagen, en je
laatste veranderingen kloppen niet. Je wil alle veranderingen
verwerpen en teruggaan naar een eerdere versie. Dit doe je als volg:

.. code-block:: shell

   $ git log   # om je geschiedenis te inspecteren
               # en de gewenste commit vinden

   $ git reset --hard  plaats-de-commit-hash-hier

Pas op! :program:`git reset` zal alle opgeslagen bestanden
terugbrengen naar hun eerdere vorm. Let goed op dat je geen
belangrijke informatie hierdoor verliest.

Veranderingen tijdelijk opslaan met :program:`git stash`
--------------------------------------------------------

Het komt wel eens voor dat je een bepaalde actie wilt uitvoeren die
vereist dat alle veranderingen gecommit zijn, maar je de gemaakte
veranderingen liever nog niet commit. Daarom biedt Git de mogelijkheid
om tijdelijk je veranderingen te :def:`stashen`.

Dit doe je door middel van het commando :program:`git stash`.

Dit commando slaat je huidige veranderingen op in een ander soort
commit die niet in de geschiedenis van je project verschijnt, en brengt
de huidige inhoud van je map terug naar de laatste gecommitte versie.

Je kunt vanaf dit punt andere operaties uitvoeren: je repository terugzetten
naar een oudere toestand, pushen of pullen, enz.

Als je je tijdelijke veranderingen wilt terugbrengen, gebruik dan het
commando :program:`git stash pop`.

Je kunt meerdere verzamelingen veranderingen naast elkaar opslaan met
:program:`git stash`. Om één ervan te selecteren voor :program:`pop`,
gebruik eerst het commando :program:`git stash list`.


Werken met online repositories
------------------------------

Een :def:`online opslagplaats` of :def:`online repository` is een
repository opgeslagen bij een Internet server. Dit heeft twee
voordelen: deze server kan dan dienen als een soort backup voor je
gegevens; en online repositories kunnen worden gedeeld met andere
mensen, bijvoorbeeld collega's, docenten of medestudenten, zelfs
wanneer je eigen computer uit staat.

De GitLab van de universiteit, de GitLab op `gitlab.com`__ en GitHub__ zijn
populaire verleners van online repositories. Om te werken met online
repositories zijn de volgende stappen algemeen van toepassing:

.. __: https://about.gitlab.com/
.. __: http://github.com/

1. Een gebruikersaccount aanmaken bij de dienstverlener.

   (NB: dit is niet nodig bij gitlab-fnwi.uva.nl, daar heb je al een
   studentaccount).

2. Op de server een repository aanmaken. Dit doe je door de webinterface.

3. De online repository koppelen aan de lokale repository op je eigen computer.
   Er zijn twee mogelijkheden:

   - als je de online repository éérst hebt aangemaakt: gebruik je dan
     :program:`git clone ...` eens om een lokale kopie te maken van de
     online repository.

   - als je je lokale repository éérst hebt aangemaakt: gebruik je dan
     :program:`git remote set-url origin ...` om de URL van je online
     repository toe te voegen aan je lokale repository.

4. Wanneer je veranderingen van de online repository wil brengen naar je
   lokale computer, gebruik je :program:`git pull`.

5. Wanneer je veranderingen van je lokale computer wil sturen naar
   de online repository, gebruik je :program:`git push`.

Voorbeeld gebruik
-----------------

Je begint een programmeeropdracht en je wilt je code beschermen met
Git. Hoe doe je dit?

1. Op de GitLab inloggen.

2. Daar een nieuwe repository aanmaken.

3. In je terminal, het commando invoeren:

   .. code-block:: shell

      # vervang hieronder de URL met je eigen repository
      $ git clone https://gitlab-fnwi.uva.nl/....

4. Bestanden aanmaken of verplaatsen naar de nieuwe map
   net aangemaakt door :program:`git clone`.

5. :program:`git add` om de bestanden voor te bereiden voor een commit.

6. :program:`git commit` om te committen.

7. :program:`git push` om je commit naar je online repository te sturen.

(Zelf)evaluatie
---------------

1. Stel, je hebt sinds de laatste commit veel veranderingen gemaakt,
   maar je wilt deze allemaal weggooien (en dus terug naar de versie
   van de laatste commit). Welk commando kun je hiervoor gebruiken?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         $ git reset --hard

2. Je hebt veel veranderingen gebracht aan je project maar het
   commando :program:`git commit` doet niets en zegt "no changes added
   to commit". Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      Eerst :program:`git add` dan pas weer :program:`git commit`.

3. Je hebt een bestand verwijderd van je project en wilt hem ook
   verwijderen uit je repository. Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      Eerst :program:`git rm` dan :program:`git commit`.

Verder inlezen
--------------

- Scott Chacon en Ben Straub. `Pro Git (Nederlands), 2de editie`__. 2014.

  .. __: http://git-scm.com/book/nl/v2

- Ben Lynn. `Git Magic`__. University of Stanford. Last accessed
  August 2015.

  .. __: http://www-cs-students.stanford.edu/~blynn/gitmagic/

- Roger Dudler (vertaling Pieter Michels). `git - een simpele
  uitleg`__. Last accessed August 2015.

  .. __: https://rogerdudler.github.io/git-guide/index.nl.html

- Mark Lodato. `A Visual Git Reference`__. 2010.

  .. __: http://marklodato.github.io/visual-git-guide/index-en.html

- Robin de Vries, Rex Valkering & Robert van Wijk. *PAV Bijeenkomst:
  Werken met Git.* Te vinden op Blackboard.
