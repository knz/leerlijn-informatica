.. include:: common.d

|TDBG1| – Debuggen (basis)
============================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Soorten fouten
--------------

.. index:: ontwerpfout
.. index:: design bug
.. index:: specification bug
.. index:: implementatiefout
.. index:: contractovertreding (door omgeving)
.. index:: hardwarefout

De mens en de computer zijn feilbaar. Fouten bestaan. In de informatica
hebben we te maken met 4 soorten fouten:

- :def:`ontwerpfouten`: het *idee* (voor een algoritme, een
  softwarearchitectuur) klopt niet. Engels: :def:`design error` of
  :def:`specification bug`.

- :def:`implementatiefouten`: het idee en het plan kloppen, maar de
  vertaling naar een werkent programma is niet juist. Engels:
  :def:`implementation error`.

- :def:`contractovertreding door de softwareomgeving`: de software
  rond je programma (besturingssysteem, softwarebibliotheken, enz)
  werkt niet zoals je had verwacht (door ontwerp/implementatiefout, of
  simpelweg foute documentatie). Engels: :def:`environment contract
  violation`.

- :def:`hardwarefouten`: de software klopt maar de hardware
  faalt. Bijvoorbeeld een geheugenkaart slaat sommige bits verkeerd
  op; of een harde schijf geeft niet de goede data terug. Engels:
  :def:`hardware bug`.

============= ========== ================================
Soort fout    Hoe vaak   Wanneer jij er last van zal hebben
============= ========== ================================
ontwerp       30%        Tijdens het leren, of door onduidelijke opdracht van docent
implementatie 60%        Wanneer je te dicht bij de deadline begint met een opdracht
omgeving      <10%       Op Windows en OS X computers
hardware      <5%        Op oude computers, maar ook soms de nieuwere
============= ========== ================================

":def:`Debuggen`", oftewel fouten opsporen, zal dus meestal worden
besteed aan het onderzoeken van implementatiefouten.

Hoeveel tijd kost het om een fout op te sporen?
-----------------------------------------------

============= ===============================
Soort fout    Hoeveel tijd
============= ===============================
ontwerp       uren
implementatie minuten met de goede tools, anders uren
omgeving      uren
hardware      uren tot dagen
============= ===============================

In de vorige sectie heb je gezien dat implementatiefouten het vaakst
voorkomen. Dit betekent dat het van groot belang is om dit zo snel
te kunnen.

Overzicht starterskit debuggen
------------------------------

.. index:: assert
.. index:: print debugging
.. index:: stepwise execution
.. index:: valgrind
.. index:: monitored execution

Voor het debuggen van implementatiefouten kun je beginnen met de
volgende technieken:

- berichten afdrukken: voeg :code:`print` opdrachten binnen je
  programma toe om de huidige toestand van variabelen te printen
  tijdens executie.

  Engels: :def:`print debugging`.

- beweringen: voeg :code:`assert` toe om de verwachte eigenschappen
  van je datastructuren zo vaak mogelijk te checken.

  Engels: :def:`assertions`.

- stapsgewijze executie: door middel van een :def:`debugger` je
  programma executeren met een pause tussen elke opdracht; je
  kunt dan tussen elke stap de data inspecteren.

  Engels: :def:`stepwise execution` of :def:`stepping`.

- beheerde executie: je programma draaien onder controle van
  een validatieprogramma zoals :program:`valgrind`. Dit zal
  het gedrag van het programma checken en fouten automatisch
  detecteren en rapporteren.

  Engels: :def:`monitored execution`.

================= =============== ======================
Techniek          Moeilijkheid    Effectiviteit
================= =============== ======================
print debugging   zeer simpel     zeer slecht
assert            zeer simpel     redelijk goed
stepping          simpel          redelijk goed
monitoring        simpel          goed
================= =============== ======================

Om te bepalen welke methode je wanneer het beste kan kiezen
kun je de volgende handige tabel gebruiken:

================= =====================================
Techniek          Wanneer?
================= =====================================
print debugging   De resultaten kloppen heel vaak niet
assert            De resultaten kloppen vaak niet, of de executie stopt soms met een fout
stepping          De resultaten kloppen vaak niet, of de executie stopt altijd met een fout
monitoring        De resultaten kloppen soms niet, of de executie stopt soms met een fout
================= =====================================

Stapsgewijze executie
---------------------

.. index:: afbreekpunt
.. index:: breakpoint
.. index:: debugger

Vaak hoef je niet alles vanaf het begin van de executie te onderzoeken. We werken dus voor stapsgewijze executie als volgt:

1. een :def:`afbreekpunt` (Engels: :def:`breakpoint`) plaatsen op de
   eerste opdracht van het gedeelte van het programma dat je wilt onderzoeken.
   Als je toch het hele programma wilt onderzoeken kun je dit plaatsen
   op :code:`main`.

2. De executie beginnen in :def:`debug modus` (Engels: :def:`debug mode`).
   Dit doe je door middel van een :def:`debugger` (foutopsporingsprogramma).
   De executie pauseert dan automatisch op je afbreekpunt, maar het programma
   is dan nog bereid om door te gaan.

3. Vanaf dit punt kun je stapsgewijze executeren, met een pause en inspectie
   tussen elke opdracht.

Je kunt meerdere afbreekpunten plaatsen op meerdere plekken in je programma.

Stapsgewijze executie voor Java programma's met Eclipse
```````````````````````````````````````````````````````

- een afbreekpunt zetten: je cursor plaatsen waar je hem wil zetten,
  dan :kbd:`Ctrl+Shift+B` (of rechter muisklik *in de linkse marge*
  dan "Toggle Breakpoint").

- executeren met :kbd:`F11` (Run -> Debug)

- wanneer het programma  op je afbreekpunt gepauseerd is:

  - :kbd:`F5`: een stap doen binnen dezelfde functies, hele functiecalls in een keer uitvoeren.

  - :kbd:`F6`: stapsgewijze ook binnen aangeroepen functies pauseren.

  - :kbd:`F8`: doorgaan met executie zonder pause tot het volgende afbreekpunt of het eind van de executie.

De inhoud van variabelen inspecteer je dan in de grafische
gebruikersomgeving van Eclipse.

Stapsgewijze executie voor C/C++ met |gdb(1)|
`````````````````````````````````````````````

.. index:: backtrace

1. zorg ervoor dat je programma wordt gecompileerd met parameter
   :code:`-g`: ":program:`gcc -g -o foo foo.c`" bijvoorbeeld. Eventueel kun je
   :code:`-g` plaatsen in je :file:`Makefile`, zie ook |DAUTO1|_.

2. dan je programma executeren in debug modus met |gdb(1)|_:

   .. code-block:: shell

      gdb --args jouw-programma eventueel-argumenten...

      # bijvoorbeeld:
      gdb --args test

3. een afbreekpunt zetten doe je op de commandolijn van |gdb(1)|_ met
   het commando :code:`break`. Dit doe je door de naam van je functie
   te geven, of de plaats in je broncode:

   .. code-block:: gdb

      break  test.c:106
      # of
      break  mijn_functie

4. executeren met :code:`run`

5. wanneer het programma op je afbreekpunt gepauseerd is:

   - :code:`print ...`: de inhoud van variabelen inspecteren.

   - :code:`bt` (:def:`backtrace`): laat zien waar in de execuctie je je bevindt.

   - :code:`n` (next): een stap doen binnen dezelfde functies, hele functiecalls in een keer uitvoeren.

   - :code:`s` (step): stapsgewijze ook binnen aangeroepen functies pauseren.

   - :code:`c` (continue): doorgaan met executie zonder pause tot het volgende afbreekpunt of het eind van de executie.

Onderzoeken wanneer een programma vastloopt
-------------------------------------------

Als een programma vastloopt zonder foutmelding kun je het volgende doen:

1. draaien met |gdb(1)|_, zonder afbreekpunt

2. wanneer het lijkt vast te lopen, :kbd:`Ctrl+C` intikken. Dit heeft binnen |gdb(1)| hetzelfde
   effect als een afbreekpunt, en je kunt dan:

   - :code:`bt` gebruiken om te zien waar het vastloopt.

   - :code:`print` om variabelen en datastructuren te inspecteren.

   - :code:`break` om afbreekpunten te zetten, en :code:`s`, :code:`n` and :code:`c` om door te gaan met executeren.

Beheerde executie met :program:`valgrind`
-----------------------------------------

.. index:: memcheck

Valgrind__ is de naam van een gereedschapskist voor het analyseren van
programma's. :program:`valgrind` is een van de tools in Valgrind die de
verschillende features van Valgrind automatisch kan aanroepen.

.. __: http://valgrind.org/

De belangrijkste feature voor het analyseren van implementatiefouten
is de "memcheck".  Om met :program:`valgrind` en memcheck te beginnen
lees je de volgende zeer korte tutorial:

http://valgrind.org/docs/manual/quick-start.html

.. tip:: Probeer :program:`valgrind` zo vaak mogelijk te
   gebruiken. Het kan enorm veel fouten snel opsporen.

(Zelf)evaluatie
---------------

1. Wat zijn de 4 soorten fout in de informatica?

   .. admonition:: Oplossing
      :class: toggle

      Ontwerpfouten, implementatiefouten, contractovertredingen door
      de omgeving en hardwarefouten.

2. De uitvoer van je programma is altijd fout wanneer je
   een bepaalde input geeft, maar voor andere inputs blijkt het goed
   te werken. Hoe onderzoek je dit verder?

   .. admonition:: Oplossing
      :class: toggle

      Omdat het goed werkt voor veel input is het onwaarschijnlijk dat het een
      ontwerpfout is. Omdat het altijd niet goed werkt voor een bepaalde
      input is het dan verstandig door te gaan met print debugging,
      asserts of stapsgewijze executie.

3. Je programma stopt onverwacht met de melding "Segmentation
   fault". Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      Je kunt je programma draaien met |gdb(1)| en wachten totdat
      de fout plaats vindt. Dan zal |gdb(1)| je de kans geven
      om de toestand van het programma te inspecteren (bijvoorbeeld met
      :code:`bt` of :code:`print`).

      Je kunt ook eventueel je programma draaien met
      :program:`valgrind`. Dit kan vaak de oorzaak van de fout
      onthullen.


Verder inlezen
--------------

- Manasij Mukherjee. `A GDB Tutorial with Examples`__. Last accessed August 2015.

  .. __: http://www.cprogramming.com/gdb.html

- Matt Welsh. `Java Debugging with gdb`__. Last accessed August 2015. Modified June 2014.

  .. __: https://gcc.gnu.org/java/gdb.html

- Valgrind developers. `Valgrind manual`__. Last accessed August 2015. Modified September 2014.

  .. __: http://valgrind.org/docs/manual/manual.html
