.. include:: common.d

|DAUTO1| – Workflows automatiseren (basis)
============================================

:Author: Raphael ‘kena’ Poss

In dit hoofdstuk krijg je een eerste inleiding voor het
gebruik van |make(1)|_, Makefiles en :program:`latexmk`.

.. contents::

Wat doet |make(1)| eigenlijk?
-----------------------------

.. index:: make
.. index:: workflow

|make(1)|_ is een programma dat workflows automatisch kan uitvoeren.

In je opleiding informatica heb je meestal te maken met 4 soorten
workflows:

- het produceren van draaibare binaire programma's vanuit programma broncode (bv. Java of C);

- het produceren van PDF documenten vanuit LaTeX broncode;

- het meermalig draaien van een programma met meerdere parameters om
  zijn gedrag te bestuderen;

- het produceren en updaten van grafieken vanuit automatisch
  gegenereerde gegevens.

|make(1)|_ kan je helpen om deze workflows efficiënt en snel
automatisch uit te voeren.

|make(1)|_ houdt bij welke invoerbestanden zijn gewijzigd sinds de
laatste keer dat een resultaat was gebouwd, en voert alleen de stappen
uit die strikt noodzakelijk zijn.  |make(1)|_ kan ook onafhankelijke
onderdelen van een workflow verspreiden over meerdere processoren (of
cores) voor extra snelheid.

Waarom |make(1)|_ en waarom workflows automatiseren?
----------------------------------------------------

Een *workflow* in de wetenschap is als een recept voor een kok: een
stapwijs methode om een bepaalde doel te bereiken.

In de informatica kunnen sommige workflows heel complex
worden. Bijvoorbeeld kan het opbouwen van complexe programma's het
groeperen van honderden bestanden vereisen.  Het handmatig uitvoeren
van alle taken wordt snel onhandig!

Er zijn twee strategiëen om *workflows te automatiseren*:

- een *script* schrijven: een programma dat andere programma's
  aanroept in een vaste volgorde;

- de *afhankelijkheidsrelaties tussen delen van het resultaat*
  (Engels: *dependency graph*) beschrijven, en aan het computer een
  volgorde automatisch laten bepalen om het resultaat te produceren,
  door middel van een expertsysteem, zoals |make(1)|_.

Waarom geen scripts?
--------------------

.. index:: scripts (nadelen van)

Scripts klinken vaak makkelijker! Een script schrijven is vaak maar
een kwestie van een editor pakken en gewoon dezelfde commando's
erin opschrijven die je zelf handmatig in een shell zou uitvoeren. Maar
scripts hebben twee belangrijke nadelen:

- iedere keer dat je een script aanroept, moeten alle stappen opnieuw
  worden geëxecuteerd.

  Bijvoorbeeld, je hebt een LaTeX document die 100 plaatjes includeert
  in PDF vorm. Echter kan je beeldverwerkingsprogramma alleen PNG
  beelden opslaan, je schrijft dus een script om eerst alle 100 PNG
  beelden te converteren naar PDF voordat je je LaTeX document
  vertaalt. Nu als je maar één van de beelden modificeert, moet je opnieuw
  wachten op de conversie van alle 100 beelden! Dit kan lang duren.

- scripts draaien in sequentiële volgorde, met alle stappen na
  elkaar. Dit kan niet worden versneld door multi-core processoren!

Overzicht van |make(1)|
-----------------------

In een notendop werkt |make(1)|_ als volgt:

- je geeft hem als invoer een bestand dat :file:`Makefile` heet; en
  als commandolijnparameter een *doel*.

- |make(1)|_ zoekt dan binnen de :file:`Makefile` hoe hij het doel kan
  aanmaken, en voert de benodigde stappen uit in een automatisch bepaalde volgorde.

Het bestand :file:`Makefile` is waar je je workflow beschrijft.

Zodra je een :file:`Makefile` hebt aangemaakt, kun je het meermalig
hergebruiken. Vaak gebruiken mensen dezelfde stukken :file:`Makefile`
in meerdere projecten. In het begin is het verwacht dat je vaste
patronen zal hergebruiken voor je eigen Makefiles.

Voordat je begint
-----------------

Makefiles zijn plattetekstbestanden. Je kunt dus een normale
platteteksteditor gebruiken om je eigen Makefiles te maken.

Maar er is een bijzonderheid: **het is belangrijk dat je editor een
goed verschil weet te maken tussen gewone spatietekens en
tabtekens**. Dit is omdat tabtekens een bijzonder betekenis hebben in
een :file:`Makefile`. Sommige teksteditors vertalen automatisch
spatietekens naar tabtekens of omgekeerd. Als dit zo is, moet je eerst
dit gedrag uitschakelen. Kijk naar de voorkeuren van je teksteditor om
dit zodanig aan te passen.

Ter informatie, zijn :program:`vim` en :program:`emacs` vaak standaard
al goed geconfigureerd.

Je eerste :file:`Makefile`
--------------------------

1. Om het voorbeeld voor te bereiden, maak twee C bestanden aan
   :file:`hello.c` en :file:`world.c`.  In de eerste plaats je de
   volgende broncode:

   .. code-block:: c

      int a = 123;

   In de tweede plaats je de volgende code:

   .. code-block:: c

      #include <stdio.h>
      extern int a;
      int main(void) {
          printf("hello %d\n", a);
          return 0;
      }

2. Maak je dan een :file:`Makefile` aan met de volgende inhoud:

   .. code-block:: Makefile

      test: hello.o world.o
           cc -o test $^

   Pas op! de tweede regel (met ``cc ...``) *moet* beginnen met een tabteken.

3. Voer dan het commando :program:`make test` uit. Wat zie je?

   .. admonition:: Voorbeeld
      :class: toggle

      Als het goed is, zie je iets zoals dit:

      .. code-block:: shell

         $ make test
         cc -c -o hello.o hello.c
         cc -c -o world.o world.c
         cc -o test hello.o world.o

      .. note:: Als je dit niet ziet, en in plaats daarvan de foutmelding
         "``*** missing separator.  Stop.``" ziet, heb je het
         tabteken niet goed ingetikt. Check het nogmaals.

   Wat is gebeurt?

   - de eerste regel van je :file:`Makefile` zegt "om :file:`test` te
     maken, moeten :file:`hello.o` en :file:`world.o` eerst bestaan".

   - de tweede regel zegt "zodra :file:`hello.o` en :file:`world.o`
     bestaan, kan :file:`test` worden gemaakt door het commando
     :program:`cc -o test hello.o world.o` aan te roepen."

     Zoals je kunt zien, speelt "``$^``" als afkorting voor "de
     bestandsnamen rechts van de dubbele punt op de eerste regel".

   - wanneer je |make(1)|_ hebt aangeroepen met de doel :file:`test`,
     heeft |make(1)|_ dit gevonden in de :file:`Makefile` en de benodigde
     opdrachten automatisch uitgevoerd in de goede volgorde.

   Hoe weet |make(1)|_ hoe :file:`hello.o` en :file:`world.o` kunnen
   worden aangemaakt?  Simpel! |make(1)|_ heeft al standaard regels voor
   het bouwen van C programma's. Hij weet bijvoorbeeld al dat je een
   :file:`.o` bestand kunt krijgen vanaf een :file:`.c` bestand door
   :program:`cc -c` aan te roepen.

   Je kunt het geproduceerde programma :file:`test` aanroepen:

   .. code-block:: shell

      $ ./test
      hello 123

4. Verander de inhoud van :file:`hello.c` met:

   .. code:: c

      int a = 456;

5. Draai :program:`make test` weer. Wat zie je?

   .. admonition:: Voorbeeld
      :class: toggle

      Als het goed is, zie je iets zoals dit:

      .. code-block:: shell

         $ make test
         cc -c -o hello.o hello.c
         cc -o test hello.o world.o

   Merk het voor jezelf: het bestand :file:`world.o` wordt niet
   opnieuw aangemaakt. Dit hoeft niet omdat het niet veranderd is
   sinds de laatste keer! |make(1)|_ heeft dit automatisch
   geoptimiseerd.

   Je kunt het opnieuw geproduceerde programma :file:`test` weer
   aanroepen:

   .. code-block:: shell

      $ ./test
      hello 456

Hergebruikbaar :file:`Makefile` voor je eigen projecten
-------------------------------------------------------

Voor Java applicaties
`````````````````````

Voor het bouwen van Java programma's, kun je het volgende
:file:`Makefile` hergebruiken:

.. code-block:: Makefile

   # de volgende regel pas je aan in ieder project
   SOURCES = JouwBestand1.java JouwBestand2.java ...

   # de rest hieronder blijft onveranderd
   CLASSES = $(SOURCES:.java=.class)
   all: $(CLASSES)

   clean:
        rm -f $(CLASSES)

   .SUFFIXES: .java .class
   .java.class:
        javac -g $<

.. note:: Let goed op, de eerste regel na "clean:" en ".java.class"
   moeten beginnen met een tabteken.

Om dit te gebruiken, plaats je eerst dit :file:`Makefile` in de map
van je project, dan pas je ``SOURCES`` aan met de namen van je
:file:`.java` bestanden.

Dan gebruik je :program:`make` (of :program:`make all`) om je Java
klassen opnieuw te bouwen, dit zal alleen de klassen opbouwen die
sinds de laatste keer zijn veranderd.

Je kunt ook :program:`make clean` gebruiken om de klassen te wissen,
indien je ze allemaal opnieuw wil bouwen met :program:`make all`.

Voor C applicaties
``````````````````

Voor het bouwen van C programma's, kun je het volgende
:file:`Makefile` hergebruiken:

.. code-block:: Makefile

   # de volgende regel pas je aan in ieder project
   SOURCES = bestand1.c bestand2.c ...
   TARGET = naamresultaat

   # de rest hieronder blijft onveranderd
   CFLAGS = -W -Wall -g -std=c99
   OBJECTS = $(SOURCES:.c=.o)
   all: $(TARGET)

   clean:
        rm -f $(OBJECTS) $(TARGET)

   $(TARGET): $(OBJECTS)
        $(CC) -o $@ $^ $(CFLAGS) $(LDFLAGS)

.. note:: Let goed op, de eerste regel na "clean:" en "$(TARGET):"
   moeten beginnen met een tabteken.

Om dit te gebruiken, plaats je eerst dit :file:`Makefile` in de map
van je project, dan pas je ``SOURCES`` aan met de namen van je
:file:`.c` bestanden en ``TARGET`` met de gewenste naam voor het
resulterende binaire programma.

Dan gebruik je :program:`make` (of :program:`make all`) om je C
code opnieuw te compileren, dit zal alleen de brondcode
compileren die sinds de laatste keer is veranderd.

Je kunt ook :program:`make clean` gebruiken om de resultaten te wissen,
indien je ze allemaal opnieuw wil bouwen met :program:`make all`.

Automatisch paralleliseren op een multi-core computer
-----------------------------------------------------

Als je een computer gebruikt met meer dan 1 processor of met meerdere cores,
kun je aan |make(1)|_ vragen om meerdere cores te gebruiken met parameter :program:`-j`.

Bijvoorbeeld:

.. code:: shell

   $ make -j 4 test

Dit vraagt |make(1)|_ om maximaal 4 taken tegelijk uit te voeren om
het doel ``test`` te bereiken. Je krijgt de beste prestaties door een
waarde te kiezen die net hoger is dan het aantal cores op je
computer. Bijvoorbeeld met 4 cores kun je :program:`-j 6` gebruiken.

Automatisch bouwen van LaTeX documenten
---------------------------------------

Je hebt wellicht al geleerd dat je het commando :program:`pdflatex`
kunt aanroepen om een LaTeX document te vertalen naar PDF.

Echter, wanneer het document gebruik maakt van externe onderdelen,
bijvoorbeeld grafieken, andere LaTeX bestanden, plaatjes, citaten,
etc., moet je meerdere commando's achter elkaar aanroepen en soms zelfs
meermalig.

Voor LaTeX is er een programma dat dit voor je helemaal regelt:
:program:`latexmk`, inbegrepen met de meeste LaTeX
installaties. :program:`latexmk` kun je zien als een soort |make(1)|
met veel ingebouwde regels voor gebruik met LaTeX.

:program:`latexmk` gebruik je als volgt:

- om eenmalig een PDF document te produceren, geef je hem gewoon de
  naam van je hoofd LaTeX document met :program:`-pdf` als parameter,
  bijvoorbeeld:

  .. code-block:: shell

     $ latexmk -pdf hello.tex

- om continu een PDF te updaten terwijl je het LaTeX document aan het
  editen bent (om een voorvertoning automatisch te updaten) start je
  het volgende commando op in eigen terminal:

  .. code-block:: shell

     $ latexmk -pvc -pdf hello.tex

  (:program:`-pvc` staat voor "PreView Continuously")

(Zelf)evaluatie
---------------

1. Waarom wordt |make(1)|_ gebruikt eigenlijk?

   .. admonition:: Antwoord
      :class: toggle

      Om een procedure of workflow te automatiseren, beter dan een
      script schrijven: alleen de strikt noodzakelijke stappen worden
      uitgevoerd, en ze kunnen gebruik maken van meerdere processoren
      of cores.

2. Je wordt gevraagd om een :file:`Makefile` in te leveren met je
   opdracht. Hoe doe je dat?

   .. admonition:: Antwoord
      :class: toggle

      Je maakt een nieuw bestand :file:`Makefile` aan in je project, op
      basis van het voorbeeld eerder in dit document.  Je past het dan
      aan met de lijst broncodebestanden in je project.

      Dat test je dan ook eerst met :program:`make all`. En let
      goed op de tabtekens!

3. Je krijgt toegang tot de LaTeX code voor een groot document met
   veel bijlagen. Hoe bouw je het?

   .. admonition:: Antwoord
      :class: toggle

      .. code-block:: shell

         latexmk -pdf document.tex
