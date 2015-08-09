Inleiding voor studenten
========================

.. include:: common.d

.. contents::


Inleiding
---------

Elke professionele kok weet dat je de handgreep van een hete pan niet
direct met je hand pakt. Echter is er geen vak "handgreep beheren" in
een kokopleiding. Dit is een vaardigheid die wordt ontwikkeld tijdens
alle activiteten in de kokopleiding.

De **leerlijn informaticavaardigheden** is een dergelijk verzamelingen
van basisvaardigheden verwacht van *alle* BSc informaticastudenten aan het
eind van hun studie. Het zijn technieken, kennis, methodes en
referenties die van toepassing kunnen zijn in alle vakgebieden binnen
de informatica en in elke informaticabaan na de studie.

Deze website, die je ook als `PDF document`__ kunt downloaden, geeft een
overzicht en gedetailleerde beschrijving voor elke vaardiheid in de
leerlijn. Je hoeft dit hele document niet door te nemen aan het begin
van je studie; in elk vak zal je worden uitgenodigd door je docenten
en assistenten om een paar hoofdstukken te bestuderen.

.. __: _static/LeerlijnInformaticavaardigheden.pdf

Elk hoofdstuk betekent tussen 15mn en 2 uur zelfstudie, plus af en toe
opnieuw oefenen of toepassen tijdens de rest van je studie.  Alle
vaardigheden in de leerlijn zijn letterlijk de moeite waard: elke
studieuur die je erzin zal investeren betaalt zich terug in
productiviteits- en kwaliteitswinsten: **hogere cijfers in minder uren
werk.**

Een deel van de vaardigheden wordt ook direct getoetst in de
opdrachten; elke opdracht zal verder toelichten welke extra en
minpunten zijn verbonden aan de leerlijn.

De volgende twee secties geven een samenvatting aan van alle
vaardigheden in de leerlijn en de volgorde waar ze worden
geïntroduceerd in je opleiding.

Overzicht van alle vaardigheden
-------------------------------

De leerlijn vaardigheden is gesplitst in 5 banen:

**S** (:stitle:`"Source"`)
   Omgaan met broncode

**U** (:utitle:`"Unix"`)
   Omgaan met de Unix commando en procesomgeving

**D** (:dtitle:`"Data"`)
   Omgaan met data, produceren en verwerken

**T** (:ttitle:`"Tools"`)
   Omgaan met programmeerapparatuur

**W** (:wtitle:`"Wetenschap"`)
   Wetenschappelijk communiceren

Op elke baan heeft ieder vaardigheden een kenmerk die met de letter
van zijn baan begint.

Alle vaardigheden behoren bij het gewenste profiel van een
gediplomeerde student Informatica, behalve de vaardigheden met een "+"
in de kenmerk, die alleen behoren bij studenten die verder willen
studeren in de Informatica (MSc CS of dergelijk).


.. tabularcolumns:: |p{.08\textwidth}|p{.3\textwidth}|p{.6\textwidth}|

.. list-table:: Overzicht vaardigheden
   :widths: 8, 30, 60
   :header-rows: 1

   * - Kenmerk
     - Titel
     - Samenvatting

   * - |SGIT1|_
     - Git gebruiken (basis)
     - Init, status, add, commit, push, pull, gitlab, mergeconflicten

   * - |SGIT2|_
     - Git gebruiken (adv)
     - Git game, branches, issues, merge requests, git blame

   * - |SDOC1|_
     - Gebruikersdocumentatie produceren (basis)
     - Goed README-bestand opstellen voor eigen code

   * - |SDOC2+|_
     - Gebruikersdocumentatie produceren (adv)
     - Eigen ``--help`` tekst opstellen en help2man gebruiken

   * - |SNAV1|_
     - Efficiënte codenavigatie (basis)
     - Snel van gebruik van struct/functie naar definitie kunnen navigeren
       binnen een broncodebestand

   * - |SNAV2|_
     - Efficiënte codenavigatie (adv)
     - Alle uses van struct of klas vinden in project; snel functies
       methodes of klassen hernoemen door een heel project

   * - |WBIB1|_
     - Refereren (basis)
     - Gebruik van BibTeX met template

   * - |WBIB2|_
     - Refereren (adv)
     - Omgaan met referentiemanagementsoftware (RefWorks, Medeley of dergelijk)

   * - |WPRE1|_
     - Beamer (basis)
     - Simpele presentaties maken met template

   * - |WPRE2|_
     - Beamer (adv)
     - Maken van een wetenschappelijke poster

   * - |WFIG1|_
     - Figuren (basis)
     - Maken van simpele diagrammen, gebruik van dot, blockdiag, seqdiag

   * - |WFIG2+|_
     - Figuren (adv)
     - Complexere figureren, gebruik van PGF, TikZ

   * - |WMATH1|_
     - Formules (basis)
     - Weergeven relatief simpele formules of eigen formules

   * - |WMATH2|_
     - Formules (adv)
     - Overnemen van complexe formules uit bestaande boeken/artikelen

   * - |WTYP1|_
     - Typografie (basis)
     - Goed gebruik van “ ” ‘ ’ - – —, kerning, spaties en verbindingstekens

   * - |TDBG1|_
     - Debuggen (basis)
     - Print statements, breakpoints, backtraces, valgrind

   * - |TDBG2+|_
     - Debuggen (adv)
     - Watchpoints, data traces, multi-thread backtraces, cgdb

   * - |TPROF1|_
     - Gedrag profileren (basis)
     - strace, gprof

   * - |TPROF2+|_
     - Gedrag profileren (adv)
     - cachegrind, vtune

   * - |UBASE|_
     - Unix concepten
     - Programma vs. proces; jobbeheer; man; kill

   * - |UCMD|_
     - Basiscommando's
     - Navigatie bestandssysteem (ls, mkdir, cd, pwd, cp, mv, find, du, rm), bestanden
       inspecteren (file, cat, less, head, tail, grep
       met simpele strings, wc, cut)

   * - |USH|_
     - Basisfeatures van de shell
     - Geschiedenis, environment variabelen, jokertekens, redirecties, commandoprompt aanpassen

   * - |UAR|_
     - Dataarchiefformaten beheren
     - Gebruik van tar, zip, cpio en verschillende
       compressiemethodes vanaf de commandolijn

   * - |UFS+|_
     - Opslagbeheer
     - Aanmaken en wissen van eigen filesystemen vanaf de commandolijn, sudo

   * - |USRV1|_
     - Op afstand werken (basis)
     - SSH sleutelauthenticatie, gebruik van tmux of screen

   * - |USRV2+|_
     - Op afstand werken (adv)
     - Tunnel of SOCKS proxy aanmaken en gebruiken met SSH

   * - |URE1|_
     - Reguliere expressies (basis)
     - Complexe zoekopdrachten uitvoeren met grep en python.re

   * - |URE2+|_
     - Reguliere expressies (adv)
     - Simpele automatische
       tekstverwerkingen uitvoeren met sed, awk, perl of python.re

   * - |DCODE|_
     - Computergetallenstelsels
     - Snel verhoudingen en vergelijkingen schatten tussen binaire
       en hexadecimale getallen, 2-machten herkennen

   * - |DFP+|_
     - Zwevendekommagetallen
     - Bereik kennen van float en double, omgaan met NaN, vergelijkingen uitdrukken in code

   * - |DPLOT1|_
     - Automatisch plotten (basis)
     - Scatter, bar en lijn plots automatisch produceren door middel
       van simpele templates met gnuplot of matplotlib

   * - |DSTAT1|_
     - Statistische gegevens verzamelen (basis)
     - Bestaande formules voor min, max, gemiddelde, mediaan, std afwijking
       weten toe te passen in spreadsheetprogramma en Python

   * - |DSTAT2|_
     - Statistische gegevens verzamelen (adv)
     - Eigen meting- en evaluatieframework bouwen voor aflevering van een opdracht

   * - |DSTAT3|_
     - Statistische gegevens verzamelen (adv)
     - Verwoorden van statistische kwaliteit (p-test, confidence interval)

   * - |DSTAT4+|_
     - Statistische gegevens verzamelen (adv+)
     - Resolutie en betrouwbaarheid van automatische metingen weten detecteren
       en rapporteren

   * - |DAUTO1|_
     - Workflows automatiseren (basis)
     - Gebruik van Makefiles met vaste templates/voorbeelden

   * - |DAUTO2|_
     - Workflows automatiseren (adv)
     - Simpele scripts zelf maken om een programma meermalig aan te roepen
       met verschillende parameters, eigen Makefiles schrijven

   * - |DAUTO3+|_
     - Workflows automatiseren (adv+)
     - Gebruik van distcc en batchingcommando's om programma's uit te voeren
       op een rekencluster

   * - |DSTREAM+|_
     - Omgaan met datastromen
     - Continu 1D gegevens dynamisch plotten, lopende gemiddelde, min, max,
       std afwijking berekenen

Inbedding in het curriculum
---------------------------

Dit is de geschatte inbedding voor de periode 2015-2017. Dit is een
indicatie van wanneer elke vaardigheid voor het eerst wordt beoefend
in de verschillende vakken. Wijzigingen voorbehouden. De inbedding zal
in de toekomst evolueren samen met de verdere evolutie van het
curriculum.

Probeer je vaardigheden zelfstandig te ontwikkelen; reken niet alleen
op vakopdrachten om je te motiveren.

+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Periode  | Vak                    | Baan W    | Baan U    | Baan S    | Baan T     | Baan D      |
+==========+========================+===========+===========+===========+============+=============+
| Jaar 1,  | Inleiding programmeren |           | |UBASE|_  |           |            | |DCODE|_    |
| blok 1   |                        +-----------+-----------+-----------+------------+-------------+
|          |                        |           | |UCMD|_   |           |            |             |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Arch & comp org        |           | |UFS+|_   |           |            | |DAUTO1|_   |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 2   | Discrete wiskunde &    | |WMATH1|_ |           |           |            |             |
|          | logica                 |           |           |           |            |             |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Programmeertalen       | |WPRE1|_  |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 3   | Webprogrammeren        | |WTYP1|_  | |USH|_    | |SGIT1|_  |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 4   | Datastructuren         |           | |UAR|_    | |SNAV1|_  | |TDBG1|_   | |DSTAT1|_   |
|          |                        +-----------+-----------+-----------+------------+-------------+
|          |                        |           |           |           |            | |DPLOT1|_   |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Lineaire algebra       | |WFIG1|_  |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 5   | Automaten & formele    |           | |URE1|_   |           |            |             |
|          | talen                  |           |           |           |            |             |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Besturingssystemen     | |WBIB1|_  | |USRV1|_  | |SGIT2|_  | |TPROF1|_  | |DAUTO2|_   |
|          |                        +-----------+-----------+-----------+------------+-------------+
|          |                        |           |           | |SDOC1|_  |            | |DSTREAM+|_ |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 6   | Multimedia             | |WPRE2|_  |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Jaar 2,  | Intro. Comp. Sci.      | |WMATH2|_ |           |           |            |             |
| blok 1   +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Algoritmen &           |           |           |           |            |             |
|          | complexiteit           |           |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 2   | Netwerken & Security   |           | |USRV2+|_ |           |            |             |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Conc. & parallel prog. | |WBIB2|_  | |URE2+|_  | |SDOC2+|_ | |TDBG2+|_  | |DSTAT2|_   |
|          |                        +-----------+-----------+-----------+------------+-------------+
|          |                        |           |           |           | |TPROF2+|_ | |DAUTO3+|_  |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 3   | Numerical recipes      |           |           |           |            | |DFP+|_     |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 4   | Gfx & game tech        |           |           | |SNAV2|_  |            |             |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Beeldbewerken          |           |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 5   | Statistisch redeneren  |           |           |           |            | |DSTAT3|_   |
|          +------------------------+-----------+-----------+-----------+------------+-------------+
|          | Reflectie op de        |           |           |           |            |             |
|          | digitale cultuur       |           |           |           |            |             |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
| Blok 6   | Project software eng.  | |WFIG2+|_ |           |           |            | |DSTAT4+|_  |
+----------+------------------------+-----------+-----------+-----------+------------+-------------+
