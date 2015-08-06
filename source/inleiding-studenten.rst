Inleiding voor studenten
========================

.. role:: stitle
.. role:: utitle
.. role:: dtitle
.. role:: ttitle
.. role:: wtitle

.. raw:: html

   <script>
     $(document).ready(function() {
       $('.utitle').parent().addClass('utitle-parent');
       $('.dtitle').parent().addClass('dtitle-parent');
       $('.ttitle').parent().addClass('ttitle-parent');
       $('.wtitle').parent().addClass('wtitle-parent');
       $('.stitle').parent().addClass('stitle-parent');
     });
   </script>
   <style>
      
      
      @import url(http://fonts.googleapis.com/css?family=Iceberg);
      .stitle-parent {background-color:silver;}
      .wtitle-parent {background-color:teal;}
      .ttitle-parent {background-color:orange;}
      .utitle-parent {background-color:red;}
      .dtitle-parent {background-color:green;}
      a .stitle, a .dtitle, a .ttitle, a .wtitle, a .utitle {color: black;font-family:'Iceberg',monospace;}
   </style>

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

Deze website, die je ook als PDF document kunt downloaden, geeft een
overzicht en gedetailleerde beschrijving voor elke vaardiheid in de
leerlijn. Je hoeft dit hele document niet door te nemen aan het begin
van je studie; in elk vak zal je worden uitgenodigd door je docenten
en assistenten om een paar hoofdstukken te bestuderen.

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
     - Eigen ``--help`` tekst opstellen en ``help2man`` gebruiken

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
     - Programma vs. proces; redirecties; pipes; jobbeheer; man; sudo; kill

   * - |UCMD|_       
     - Basiscommando's
     - Navigatie filesysteem (ls, mkdir, cd, pwd, cp, mv, find, du, rm), bestanden
       inspecteren (file, cat, less, head, tail, grep
       met simpele strings, wc, cut)
  
   * - |UAR|_       
     - Dataarchiefformaten beheren
     - Gebruik van tar, zip, dd, dump/restore, cpio en verschillende
       compressiemethodes vanaf de commandolijn 

   * - |UFS|_       
     - Opslagbeheer
     - Aanmaken en wissen van eigen filesystemen vanaf de commandolijn

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

   * - |DPLOT1|_       
     - Automatisch plotten (basis)
     - Scatter, bar en lijn plots automatisch produceren door middel
       van simpele templates met gnuplot of matplotlib

   * - |DPLOT2+|_       
     - Automatisch plotten (adv)
     - Tweede Y-as gebruiken, logaritmische schaal toepassen, meedere
       plots bij elkaar genereren

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

Dit is de geschatte inbedding voor de periode 2015-2017. Wijzigingen
voorbehouden. De inbedding zal in de toekomst evolueren samen met de
verdere evolutie van het curriculum.

Probeer je vaardigheden zelfstandig te ontwikkelen; reken niet alleen
op vakopdrachten om je te motiveren.

+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Periode  | Vak                    | :wtitle:`Baan W` | :utitle:`Baan U` | :stitle:`Baan S` | :ttitle:`Baan T`  | :dtitle:`Baan D`   |
+==========+========================+==================+==================+==================+===================+====================+
| Jaar 1,  | Inleiding programmeren |                  | |UBASE|_         |                  |                   | |DCODE|_           |
| blok 1   |                        +------------------+------------------+------------------+-------------------+--------------------+
|          |                        |                  | |UCMD|_          |                  |                   |                    |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Arch & comp org        |                  | |UFS|_           |                  |                   | |DAUTO1|_          |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 2   | Discrete wiskunde &    | |WMATH1|_        |                  |                  |                   |                    |
|          | logica                 |                  |                  |                  |                   |                    |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Programmeertalen       | |WPRE1|_         |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 3   | Webprogrammeren        | |WTYP1|_         |                  | |SGIT1|_         |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 4   | Datastructuren         |                  |                  | |SNAV1|_         | |TDBG1|_          | |DSTAT1|_          |
|          |                        +------------------+------------------+------------------+-------------------+--------------------+
|          |                        |                  |                  |                  |                   | |DPLOT1|_          |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Lineaire algebra       | |WFIG1|_         |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 5   | Automaten & formele    |                  | |URE1|_          |                  |                   |                    |
|          | talen                  |                  |                  |                  |                   |                    |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Besturingssystemen     | |WBIB1|_         | |USRV1|_         | |SGIT2|_         | |TPROF1|_         | |DAUTO2|_          |
|          |                        +------------------+------------------+------------------+-------------------+--------------------+
|          |                        |                  |                  | |SDOC1|_         |                   | |DSTREAM+|_        |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 6   | Multimedia             | |WPRE2|_         |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Jaar 2,  | Intro. Comp. Sci.      | |WMATH2|_        |                  |                  |                   |                    |
| blok 1   +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Algoritmen &           |                  |                  |                  |                   |                    |
|          | complexiteit           |                  |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Netwerken & Security   |                  | |USRV2+|_        |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 2   | Conc. & parallel prog. | |WBIB2|_         | |URE2+|_         | |SDOC2+|_        | |TDBG2+|_         | |DSTAT2|_          |
|          |                        +------------------+------------------+------------------+-------------------+--------------------+
|          |                        |                  |                  |                  | |TPROF2+|_        | |DAUTO3+|_         |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 3   | Numerical recipes      |                  |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 4   | Gfx & game tech        |                  |                  | |SNAV2|_         |                   |                    |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Beeldbewerken          |                  |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 5   | Statistisch redeneren  |                  |                  |                  |                   | |DSTAT3|_          |
|          +------------------------+------------------+------------------+------------------+-------------------+--------------------+
|          | Reflectie op de        |                  |                  |                  |                   |                    |
|          | digitale cultuur       |                  |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+
| Blok 6   | Project software eng.  | |WFIG2+|_        |                  |                  |                   |                    |
+----------+------------------------+------------------+------------------+------------------+-------------------+--------------------+

 

.. |SGIT1| replace:: :stitle:`SGIT1` 
.. _SGIT1: sgit1.html
.. |SGIT2| replace:: :stitle:`SGIT2`
.. _SGIT2: sgit2.html
.. |SDOC1| replace:: :stitle:`SDOC1`
.. _SDOC1: sdoc1.html
.. |SDOC2+| replace:: :stitle:`SDOC2+`
.. _`SDOC2+`: sdoc2.html
.. |SNAV1| replace:: :stitle:`SNAV1`
.. _SNAV1: snav1.html
.. |SNAV2| replace:: :stitle:`SNAV2`
.. _SNAV2: snav2.html
.. |WBIB1| replace:: :wtitle:`WBIB1`
.. _WBIB1: wbib1.html
.. |WBIB2| replace:: :wtitle:`WBIB2`
.. _WBIB2: wbib2.html
.. |WPRE1| replace:: :wtitle:`WPRE1`
.. _WPRE1: wpre1.html
.. |WPRE2| replace:: :wtitle:`WPRE2`
.. _WPRE2: wpre2.html
.. |WFIG1| replace:: :wtitle:`WFIG1`
.. _WFIG1: wfig1.html
.. |WFIG2+| replace:: :wtitle:`WFIG2+`
.. _`WFIG2+`: wfig2.html
.. |WMATH1| replace:: :wtitle:`WMATH1`
.. _WMATH1: wmath1.html
.. |WMATH2| replace:: :wtitle:`WMATH2`
.. _WMATH2: wmath2.html
.. |WTYP1| replace:: :wtitle:`WTYP1`
.. _WTYP1: wtyp1.html
.. |TDBG1| replace:: :ttitle:`TDBG1`
.. _TDBG1: tdbg1.html
.. |TDBG2+| replace:: :ttitle:`TDBG2+`
.. _`TDBG2+`: tdbg2.html
.. |TPROF1| replace:: :ttitle:`TPROF1`
.. _TPROF1: tprof1.html
.. |TPROF2+| replace:: :ttitle:`TPROF2+`
.. _`TPROF2+`: tprof2.html
.. |UBASE| replace:: :utitle:`UBASE`
.. _UBASE: ubase.html
.. |UCMD| replace:: :utitle:`UCMD`
.. _UCMD: ucmd.html
.. |UAR| replace:: :utitle:`UAR`
.. _UAR: uar.html
.. |UFS| replace:: :utitle:`UFS`
.. _UFS: ufs.html
.. |USRV1| replace:: :utitle:`USRV1`
.. _USRV1: usrv1.html
.. |USRV2+| replace:: :utitle:`USRV2+`
.. _`USRV2+`: usrv2.html
.. |URE1| replace:: :utitle:`URE1`
.. _URE1: ure1.html
.. |URE2+| replace:: :utitle:`URE2+`
.. _`URE2+`: ure2.html
.. |DCODE| replace:: :dtitle:`DCODE`
.. _DCODE: dcode.html
.. |DPLOT1| replace:: :dtitle:`DPLOT1`
.. _DPLOT1: dplot1.html
.. |DPLOT2+| replace:: :dtitle:`DPLOT2+`
.. _`DPLOT2+`: dplot2.html
.. |DSTAT1| replace:: :dtitle:`DSTAT1`
.. _DSTAT1: dstat1.html
.. |DSTAT2| replace:: :dtitle:`DSTAT2`
.. _DSTAT2: dstat2.html
.. |DSTAT3| replace:: :dtitle:`DSTAT3`
.. _DSTAT3: dstat3.html
.. |DSTAT4+| replace:: :dtitle:`DSTAT4+`
.. _`DSTAT4+`: dstat4.html
.. |DAUTO1| replace:: :dtitle:`DAUTO1`
.. _DAUTO1: dauto1.html
.. |DAUTO2| replace:: :dtitle:`DAUTO2`
.. _DAUTO2: dauto2.html
.. |DAUTO3+| replace:: :dtitle:`DAUTO3+`
.. _`DAUTO3+`: dauto3.html
.. |DSTREAM+| replace:: :dtitle:`DSTREAM+`
.. _`DSTREAM+`: dstream.html
